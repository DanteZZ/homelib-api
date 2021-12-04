import { checkToken } from "../../../../db/token";
import { getReview } from "../../../../db/models/review";

export default async (req, res, next) => {
    try {
        const jwtInfo = await checkToken(req?.headers?.authorization.split(" ")?.[1]);
        const item = await getReview(jwtInfo.id, req.params.id);
        for (var par in req.body) {
            item[par] = req.body[par];
        }
        await item.update();
        res.status(200).json(item.info());
    } catch (e) {
        res.status(400).json({ errors: e })
    }
}