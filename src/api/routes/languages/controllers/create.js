import { checkToken } from "../../../../db/token";
import { createLanguage } from "../../../../db/models/language";

export default async (req, res, next) => {
    try {
        const jwtInfo = await checkToken(req?.headers?.authorization.split(" ")?.[1]);
        const item = await createLanguage(req.body);
        res.status(200).json(item.info());
    } catch (e) {
        res.status(400).json({ errors: e })
    }
}