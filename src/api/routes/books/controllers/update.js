import { checkToken } from "../../../../db/token";
import { getBook } from "../../../../db/models/book";

export default async (req, res, next) => {
    try {
        const jwtInfo = await checkToken(req?.headers?.authorization.split(" ")?.[1]);
        const book = await getBook(jwtInfo.id, req.params.id);
        for (var par in req.body) {
            book[par] = req.body[par];
        }
        await book.update();
        res.status(200).json(book.info());
    } catch (e) {
        res.status(400).json({ errors: e })
    }
}