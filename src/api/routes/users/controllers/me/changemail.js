import { getUser } from "../../../../../db/models/user"
import { checkToken } from "../../../../../db/token";

export default async (req, res, next) => {
    try {
        const jwtInfo = await checkToken(req?.headers?.authorization.split(" ")?.[1]);
        const user = await getUser("id",jwtInfo.id);
        const data = req.body;
        await user.setEmail(data.email,data.password);
        await user.update();
        res.status(200).json({result:true});
    } catch (e) {
        console.log(e);
        res.status(400).json({errors:e})
    }
}