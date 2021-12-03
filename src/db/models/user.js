import db from "../../db";
import validate from "validate.js";
import { errorMessages, common } from "../../configs";
import bcrypt from "bcryptjs";
import { saveImage, removeImage } from "../file";

const errors = errorMessages().user;

/* Валидаторы */

const constraints = {
    _create: {
        name: {
            presence: { message: errors.empty_name },
            length: { minimum: 2, message: errors.short_name }
        },
        username: {
            presence: { message: errors.empty_username },
            length: { minimum: 3, message: errors.short_username }
        },
        password: {
            presence: { message: errors.empty_password },
            length: { minimum: 3, message: errors.short_password }
        },
        email: {
            presence: { message: errors.empty_email },
            email: { message: errors.invalid_email }
        }
    },
    _update: {
        name: {
            presence: { message: errors.empty_name },
            length: { minimum: 2, message: errors.short_name }
        }
    }
}

/* Внутренние (SQL) функции */

const _insertUser = (data) => {
    const pars = Object.keys(data).map(i => "`" + i + "`").join(", ");
    const vals = Object.values(data).map(i => "?").join(", ")
    return new Promise((res, rej) => {
        db.query("INSERT INTO `users` (" + pars + ") VALUES (" + vals + ")", Object.values(data), function (error, results, fields) {
            if (error) rej(error);
            res(results);
        });
    })
}

const _updateUser = (id, params) => {
    const pars = Object.keys(params).map(i => i + " = ? ").join(", ");
    return new Promise((res, rej) => {
        db.query('UPDATE `users` SET ' + pars + ' WHERE `id` = ' + id, Object.values(params), function (error, results, fields) {
            if (error) rej(error);
            res(results);
        });
    })
}

const _selectUsers = (params, or = false, another = {}) => {
    let query = "";
    if (params && Object.keys(params)?.length) {
        const pars = Object.keys(params).map(i => i + " = ? ").join(or ? "OR " : "AND ");
        query = 'SELECT * FROM `users` WHERE ' + pars
    } else {
        query = 'SELECT * FROM `users`'
    }

    if (another?.like) {
        const like = another?.like
        query += params ?
            ` AND ${like.par} LIKE ${db.escape(like.exp)}` :
            ` WHERE ${like.par} LIKE ${db.escape(like.exp)}`
    }

    if (another?.sort) { query += ` ORDER BY ${another?.sort.by} ${another?.sort.type}` }
    if (another?.limit) { query += ` LIMIT ${another?.limit}` }

    return new Promise((res, rej) => {
        db.query(query, params ? Object.values(params) : [], function (error, results, fields) {
            if (error) { rej(error); }
            res(results);
        });
    })
}


const _selectUsersByIds = (ids) => {
    let query = "SELECT * FROM `users` WHERE ";
    query += ids.map(() => { return "`id` = ?" }).join(" OR ");
    return new Promise((res, rej) => {
        db.query(query, ids, function (error, results, fields) {
            if (error) { rej(error); }
            res(results);
        });
    })
}

const _removeUser = (id) => {
    return new Promise((res, rej) => {
        db.query("DELETE FROM `users` WHERE `id` = ?", [id], function (error, results, fields) {
            if (error) { rej(error); }
            res(results);
        });
    })
}

/* Внешние функции */

const createUser = async (data) => {
    const isInvalid = validate(data, constraints._create);
    if (isInvalid) {
        throw isInvalid
    } else {
        const exist = await _selectUsers({ username: data.username, email: data.email }, true);
        if (exist?.id || exist?.[0]?.id) {
            throw errors.existing_user
        } else {
            data.salt = bcrypt.genSaltSync(common.saltLength);
            data.password = bcrypt.hashSync(data.password, data.salt);
            try {
                const add = await _insertUser(data);
                const user = await _selectUsers({ id: add.insertId });
                return new UserModel(user[0]);
            } catch (e) {
                throw errors.create;
            }
        }
    }
}

const getUser = async (param, val) => {
    try {
        const users = await getUsers({ [param]: val })
        if (users[0]) { return users[0] };
        throw errors.not_found
    } catch (e) {
        throw errors.not_found
    }
}

const getUsers = async (params, another = {}) => {
    try {
        const users = await _selectUsers(params, false, another);
        return users.length > 0 ? users.map(i => new UserModel(i)) : [];
    } catch (e) {
        return [];
    }
}

const AuthUser = async (params) => {
    try {
        if (!params.username || !params.password) { throw errors.me.auth };
        const users = await getUsers({ username: params.username })
        if (users?.[0]) {
            const user = users[0];
            if (bcrypt.compareSync(params.password, user.password)) {
                return user
            }
        }
        throw errors.me.auth
    } catch (e) {
        throw errors.me.auth
    }
}

/* Модель */

const UserModel = class {

    /**
    * @apiDefine UserResult
    * @apiSuccess (200) {Number} id ID
    * @apiSuccess (200) {String} username Логин
    * @apiSuccess (200) {String} avatar Ссылка на аватарку
    * @apiSuccess (200) {String} name Имя пользователя
    * @apiSuccess (200) {String} email E-Mail
    */

    constructor(data) {
        this.id = data.id;
        this.username = data.username;
        this.avatar = data.avatar;
        this.name = data.name;
        this.email = data.email;
        this.password = data.password;
        this.salt = data.salt;
        this.removed = data.removed;
    }

    setPassword = async (oldpass, newpass) => {
        if (bcrypt.compareSync(oldpass, this.password)) {
            const isInvalid = validate.single(newpass, constraints._create.password);
            if (isInvalid) { throw isInvalid };
            this.salt = bcrypt.genSaltSync(common.saltLength);
            this.password = bcrypt.hashSync(newpass, this.salt);
            return true;
        }
        throw errors.me.pass_not_equal;
    }

    setEmail = async (email, password) => {
        if (bcrypt.compareSync(password, this.password)) {
            const isInvalid = validate.single(email, constraints._create.email);
            if (isInvalid) { throw isInvalid };
            const users = await _selectUsers({ email });
            if (users[0] && users[0].id !== this.id) { throw errors.me.existing_email }
            this.email = email;
            return true;
        }
        throw errors.me.pass_not_equal;
    }

    renewSalt = async () => {
        this.salt = bcrypt.genSaltSync(common.saltLength);
        return true;
    }

    setAvatar = async (base64) => {
        try {
            if (this.avatar) { await removeImage(this.avatar) };
            const name = await saveImage(base64);
            this.avatar = name;
            return true;
        } catch (e) {
            throw e;
        }
    }

    removeAvatar = async () => {
        try {
            if (this.avatar) { await removeImage(this.avatar); }
            this.avatar = null;
            return true;
        } catch (e) {
            throw e;
        }
    }

    info(withSalt = false) {
        const salt = withSalt ? { salt: this.salt } : {}
        return {
            id: this.id,
            username: this.username,
            avatar: this.avatar ? common.parameters.repo_images + this.avatar : this.avatar,
            name: this.name,
            email: this.email,
            removed: this.removed,
            ...salt
        }
    }

    remove = async (password) => {
        if (bcrypt.compareSync(password, this.password)) {
            try {
                await _removeUser(this.id);
                if (this.avatar) { await removeImage(this.avatar); }
                this.removed = true;
                await this.update();
                return true;
            } catch {
                throw errors.remove;
            }
        }
        throw errors.me.pass_not_equal;
    }

    update = async () => {
        const data = {
            id: this.id,
            avatar: this.avatar,
            name: this.name,
            salt: this.salt,
            password: this.password,
            email: this.email,
            removed: this.removed
        }
        const isInvalid = validate(data, constraints._update);

        if (isInvalid) {
            throw isInvalid
        } else {
            try {
                const res = await _updateUser(this.id, data)
                return true;
            } catch (e) {
                throw errors.update
            }
        }
    }
}

export {
    getUser,
    getUsers,
    createUser,
    AuthUser,
}
export const _inside = {
    _selectUsers,
    _selectUsersByIds,
    _updateUser,
    UserModel
}