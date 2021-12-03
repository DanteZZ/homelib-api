import { getUser } from "../../../../db/models/user"

export default async (req, res, next) => {
    try {
        const user = await getUser("username",req.params.username);
        res.status(200).json(user.info());
    } catch (e) {
        res.status(400).json({errors:e})
    }
}