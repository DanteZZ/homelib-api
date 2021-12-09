import { checkToken } from "../../../../db/token";
import { getPublisher } from "../../../../db/models/publisher";

export default async (req, res, next) => {
    try {
        const jwtInfo = await checkToken(req?.headers?.authorization.split(" ")?.[1]);
        const item = await getPublisher(req.params.id);
        for (var par in req.body) {
            if (par == "image") {
                if ((req.body[par] !== item.info().image)) {
                    await item.setImage(req.body[par]);
                };
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