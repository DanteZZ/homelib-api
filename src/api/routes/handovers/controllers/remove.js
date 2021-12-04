import { checkToken } from "../../../../db/token";
import { getHandover } from "../../../../db/models/handover";

export default async (req, res, next) => {
    try {
        const jwtInfo = await checkToken(req?.headers?.authorization.split(" ")?.[1]);
        const item = await getHandover(jwtInfo.id, req.params.id);
        await item.remove();
        res.status(200).json(true);
    } catch (e) {
        res.status(400).json({ errors: e })
    }
}