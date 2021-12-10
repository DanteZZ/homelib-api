import { checkToken } from "../../../../db/token";
import { createCategory } from "../../../../db/models/category";

export default async (req, res, next) => {
    try {
        const jwtInfo = await checkToken(req?.headers?.authorization.split(" ")?.[1]);
        const item = await createCategory(req.body);
        res.status(200).json(item.info());
    } catch (e) {
        res.status(400).json({ errors: e })
    }
}