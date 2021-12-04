import { errorMessages } from "../../configs";
import validate from "validate.js";
import { _selectFrom, _insertInto, _updateIn, _removeById } from "../common";

const errors = errorMessages().friend;

const constraints = {}

const friendList = async (user) => { // получить список друзей
    try {
        const friends = await _selectFrom("friends",{user});
        if (friends.length > 0) {
            for (let k in friends) {
                friends[k] = new FriendModel({ ...friends[k] });
            }
            return friends;
        }
        return [];
    } catch (e) {
        return [];
    }
}

const getFriend = async (user,id) => { // получить друга
    const friends = await _selectFrom("friends", { id, user });
    if (friends.length > 0) {
        const friend = friends[0];
        return new FriendModel({ ...friend });
    };
    throw errors.not_found

}

const createFriend = async (user,data) => {
    const isInvalid = validate(data, constraints);
    if (isInvalid) {
        throw isInvalid
    } else {
        data.user = user;
        const add = await _insertInto("friends", data);
        const friend = await _selectFrom("friends", { id: add.insertId });
        return friend[0];
    }
}

/* Модель */

const FriendModel = class {
    /**
    * @apiDefine FriendResult
    * @apiSuccess (200) {Number} id ID
    * @apiSuccess (200) {String} name Имя
    */

    constructor(data) {
        this.id = data.id;
        this.name = data.name;
    }

    remove = async () => {
        await _removeById("friends", this.id);
        return true;
    }

    info = () => {
        return {
            id: this.id,
            name: this.name
        }
    }

    update = async () => {
        const data = {
            name: this.name,
        }
        const isInvalid = validate(data, constraints);

        if (isInvalid) {
            throw isInvalid
        } else {
            try {
                const res = await _updateIn("friends", this.id, data)
                return true;
            } catch (e) {
                throw errors.update
            }
        }
    }
}

export {
    friendList,
    createFriend,
    getFriend
}