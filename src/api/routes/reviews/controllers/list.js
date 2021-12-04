import { checkToken } from "../../../../db/token";
import { reviewList } from "../../../../db/models/review";

export default async (req, res, next) => {
    try {
        const jwtInfo = await checkToken(req?.headers?.authorization.split(" ")?.[1]);
        const list = await reviewList(jwtInfo.id,req.query.book || null);
        res.status(200).json(list.map(inv => inv.info()));
    } catch (e) {
        res.status(400).json({ errors: e })
    }
}