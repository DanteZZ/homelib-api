import { checkToken } from "../../../../db/token";
import { Get } from "../../../../db/models/external";

export default async (req, res, next) => {
    try {
        const jwtInfo = await checkToken(req?.headers?.authorization.split(" ")?.[1]);
        const info = await Get(req.body.url, req.body.type);
        res.status(200).json(info);
    } catch (e) {
        res.status(400).json({ errors: e })
    }
}