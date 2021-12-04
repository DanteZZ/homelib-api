import { checkToken } from "../../../../db/token";
import { createFriend } from "../../../../db/models/friend";

export default async (req, res, next) => {
    try {
        const jwtInfo = await checkToken(req?.headers?.authorization.split(" ")?.[1]);
        const item = await createFriend(jwtInfo.id, req.body);
        res.status(200).json(item);
    } catch (e) {
        res.status(400).json({ errors: e })
    }
}