import { checkToken } from "../../../../db/token";
import { Find } from "../../../../db/models/external";

export default async (req, res, next) => {
    try {
        const jwtInfo = await checkToken(req?.headers?.authorization.split(" ")?.[1]);
        const info = await Find(req.body.query);
        res.status(200).json(info);
    } catch (e) {
        console.log(e);
        res.status(400).json({ errors: e })
    }
}