import { getUser } from "../../../../../db/models/user"
import { checkToken } from "../../../../../db/token";

export default async (req, res, next) => {
    try {
        const jwtInfo = await checkToken(req?.headers?.authorization.split(" ")?.[1]);
        const user = await getUser("id",jwtInfo.id);
        const data = req.body;
        user.ingame = data.ingame
        user.ingame_info = data.ingame ? (data.game || {a:1}) : null;
        await user.update();
        res.status(200).json(user.info());
    } catch (e) {
        res.status(400).json({errors:e})
    }
}