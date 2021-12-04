import { checkToken } from "../../../../db/token";
import { categoryList } from "../../../../db/models/category";

export default async (req, res, next) => {
    try {
        const jwtInfo = await checkToken(req?.headers?.authorization.split(" ")?.[1]);
        const list = await categoryList();
        res.status(200).json(list.map(inv => inv.info()));
    } catch (e) {
        res.status(400).json({ errors: e })
    }
}