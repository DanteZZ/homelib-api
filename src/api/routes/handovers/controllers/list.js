import { checkToken } from "../../../../db/token";
import { handoverList } from "../../../../db/models/handover";

export default async (req, res, next) => {
    try {
        const jwtInfo = await checkToken(req?.headers?.authorization.split(" ")?.[1]);
        const list = await handoverList(jwtInfo.id,req.query.book || null,req.query.to || null);
        res.status(200).json(list.map(inv => inv.info()));
    } catch (e) {
        res.status(400).json({ errors: e })
    }
}