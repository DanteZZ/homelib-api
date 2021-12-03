import { checkToken } from "../../../../db/token";
import { createBook } from "../../../../db/models/book";

export default async (req, res, next) => {
    try {
        const jwtInfo = await checkToken(req?.headers?.authorization.split(" ")?.[1]);
        const book = await createBook(jwtInfo.id, req.body);
        res.status(200).json(book);
    } catch (e) {
        res.status(400).json({ errors: e })
    }
}