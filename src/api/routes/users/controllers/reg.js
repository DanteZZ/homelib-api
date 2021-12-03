import { createUser } from "../../../../db/models/user"
export default async (req, res, next) => {
    try {
        const user = await createUser(req.body)
        res.status(200).json(user.info(true));
    } catch (e) {
        res.status(400).json({errors:e})
    }
    
}