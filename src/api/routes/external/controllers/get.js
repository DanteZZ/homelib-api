import { checkToken } from "../../../../db/token";
import { GetImage } from "../../../../db/models/external";

export default async (req, res, next) => {
    try {
        //const jwtInfo = await checkToken(req?.headers?.authorization.split(" ")?.[1]);
        const { info, type } = await GetImage(req.query.url);
        res.writeHead(200, { 'Content-Type': type });
        res.status(200).end(info, 'binary');
    } catch (e) {
        res.status(400).json({ errors: e })
    }
}