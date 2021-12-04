import { checkToken } from "../../../../db/token";
import { getPublisher } from "../../../../db/models/publisher";

export default async (req, res, next) => {
    try {
        const jwtInfo = await checkToken(req?.headers?.authorization.split(" ")?.[1]);
        const item = await getPublisher(req.params.id);
        await item.removeImage();
        await item.update();
        res.status(200).json(item.info());
    } catch (e) {
        res.status(400).json({ errors: e })
    }
}