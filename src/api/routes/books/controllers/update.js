import { checkToken } from "../../../../db/token";
import { getBook } from "../../../../db/models/book";

export default async (req, res, next) => {
    try {
        const jwtInfo = await checkToken(req?.headers?.authorization.split(" ")?.[1]);
        const item = await getBook(jwtInfo.id, req.params.id);
        for (var par in req.body) {
            if (par == "image" && (req.body[par] !== item.image)) {
                await item.setImage(req.body[par]);
            } else {
                item[par] = req.body[par];
            }
        }
        await item.update();
        res.status(200).json(item.info());
    } catch (e) {
        res.status(400).json({ errors: e })
    }
}