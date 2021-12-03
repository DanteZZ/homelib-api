import db from "../db";

export const _selectFrom = (from, params, or = false, another = {}) => {
    let query = "";
    if (params && Object.keys(params)?.length) {
        const pars = Object.keys(params).map(i => '`' + i + '`' + " = ? ").join(or ? "OR " : "AND ");
        query = 'SELECT * FROM `' + from + '` WHERE ' + pars
    } else {
        query = 'SELECT * FROM `' + from + '`'
    }

    if (another?.like) {
        const like = another?.like
        query += params ?
            ` AND \`${like.par}\` LIKE ${db.escape(like.exp)}` :
            ` WHERE \`${like.par}\` LIKE ${db.escape(like.exp)}`
    }

    if (another?.expert) {
        query += params || another?.like ?
            ` AND ` + another.expert :
            ` WHERE ` + another.expert
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

export const _selectFromByPars = (from, param, vals) => {
    let query = "SELECT * FROM `" + from + "` WHERE ";
    query += vals.map(() => { return "`" + param + "` = ?" }).join(" OR ");
    return new Promise((res, rej) => {
        db.query(query, vals, function (error, results, fields) {
            if (error) { rej(error); }
            res(results);
        });
    })
}

export const _insertInto = (into, data) => {
    const pars = Object.keys(data).map(i => "`" + i + "`").join(", ");
    const vals = Object.values(data).map(i => "?").join(", ")
    return new Promise((res, rej) => {
        db.query("INSERT INTO `" + into + "` (" + pars + ") VALUES (" + vals + ")", Object.values(data), function (error, results, fields) {
            if (error) rej(error);
            res(results);
        });
    })
}

export const _updateIn = (into, id, params) => {
    const pars = Object.keys(params).map(i => i + " = ? ").join(", ");
    return new Promise((res, rej) => {
        db.query('UPDATE `' + into + '` SET ' + pars + ' WHERE `id` = ' + id, Object.values(params), function (error, results, fields) {
            if (error) rej(error);
            res(results);
        });
    })
}

export const _removeById = (from, id) => {
    return new Promise((res, rej) => {
        db.query("DELETE FROM `" + from + "` WHERE `id` = ?", [id], function (error, results, fields) {
            if (error) { rej(error); }
            res(results);
        });
    })
}