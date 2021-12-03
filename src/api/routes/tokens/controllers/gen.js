import { genToken } from "../../../../db/token"

export default async (req, res, next) => {
    try {
        const token = await genToken(req.body.salt);
        res.status(200).json({result:{token:token}});
    } catch (e) {
        res.status(400).json({errors:e})
    }
}