import { checkToken } from "../../../../db/token";
import { createCover } from "../../../../db/models/cover";

export default async (req, res, next) => {
    try {
        const jwtInfo = await checkToken(req?.headers?.authorization.split(" ")?.[1]);
        const item = await createCover(req.body);
        res.status(200).json(item);
    } catch (e) {
        res.status(400).json({ errors: e })
    }
}