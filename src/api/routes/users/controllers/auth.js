import { AuthUser } from "../../../../db/models/user"

export default async (req, res, next) => {
    try {
        const user = await AuthUser(req.body);
        res.status(200).json({retult:true,data:user.info(true)});
    } catch (e) {
        res.status(400).json({errors:e})
    }
}