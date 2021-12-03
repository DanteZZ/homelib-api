import { _inside as _user } from "./user";
import { getUser } from "./user";
import { errorMessages } from "../../configs";
import validate from "validate.js";
import { _selectFrom, _insertInto, _updateIn, _removeById } from "../common";

const errors = errorMessages().invite;

const constraints = {
    username: {
        presence: { message: errors.empty_user },
    },
    message: {
        length: { maximum: 100, message: errors.long_message }
    },
}

const inviteList = async (id, from = false) => { // получить список инвайтов мне/от меня
    try {
        const invites = await _selectFrom("dialog_invites", from ? { from: id } : { user: id });
        if (invites.length > 0) {
            for (let k in invites) {
                const user = await getUser("id", invites[k].user);
                const from = await getUser("id", invites[k].from);
                const dialog = await getDialog(invites[k].dialog);
                invites[k] = new DialogInviteModel({ ...invites[k], user, from, dialog });
            }
            return invites;
        }
        return [];
    } catch (e) {
        return [];
    }
}


const getInvite = async (ownid, id) => {
    const invites = await inviteList(ownid);
    let inv = false;
    invites.forEach((i) => {
        if (i.id == id) { inv = i; }
    });
    if (!inv) { throw errors.not_found };
    return inv;
}

const createInvite = async (from, { username, message, dialog }, toId = false) => {
    const isInvalid = validate({ message, username }, constraints);
    if (isInvalid) {
        throw isInvalid
    } else {
        const usr = await getUser(toId ? "id" : "username", username);
        const dlg = await getDialog(dialog);
        if (usr.id == from) { throw errors.self; }
        const exist = await _selectFrom("dialog_invites", { from, user: usr.id, dialog: dlg.id });
        if (exist.length) { throw errors.exist; };
        const add = await _insertInto("dialog_invites", { from, user: usr.id, dialog: dlg.id, message: message || null });
        const invite = await _selectFrom("dialog_invites", { id: add.insertId });
        return invite;
    }
}

/* Модель */

const DialogInviteModel = class {
    /**
    * @apiDefine DialogInviteResult
    * @apiSuccess (200) {Number} id ID
    * @apiSuccess (200) {Number} dialog Диалог
    * @apiSuccess (200) {String} message Сообщение
    * @apiSuccess (200) {Number} from Создатель инвайта
    */

    constructor(data) {
        this.id = data.id;
        this.user = data.user;
        this.message = data.message;
        this.dialog = data.dialog;
        this.from = data.from;
    }

    accept = async () => {
        this.user.dialogs = this.user.dialogs || [];
        this.dialog.users = this.dialog.users || [];
        this.user.dialogs.push(this.dialog.id);
        this.dialog.users.push(this.user.id);
        try {
            await this.user.update();
            await this.dialog.update();
        } catch (e) {
            throw errors.dialog_error
        };
        return await this.remove();
    }

    decline = async () => {
        return await this.remove();
    }

    remove = async () => {
        await _removeById("dialog_invites", this.id);
        return true;
    }

    info = () => {
        return {
            id: this.id,
            from: this.from.info(),
            to: this.user.info(),
            dialog: this.dialog.info(),
            message: this.message
        }
    }
}

export {
    getInvite,
    inviteList,
    createInvite
}