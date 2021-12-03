import { checkToken } from "../../../../../db/token";
import { getInvite } from "../../../../../db/models/dialog_invite";

export default async (req, res, next) => {
    try {
        const jwtInfo = await checkToken(req?.headers?.authorization.split(" ")?.[1]);
        const invite = await getInvite(jwtInfo.id, req.params.id);
        await invite.decline();
        res.status(200).json({ result: true });
    } catch (e) {
        res.status(400).json({ errors: e })
    }
}