import { getUsers } from "../../../../db/models/user"

export default async (req, res, next) => {
    try {
        const users = await getUsers(false,{
            sort:{by:"likes",type:"DESC"},
            limit:20
        });
        res.status(200).json(users.map(i=>i.info()));
    } catch (e) {
        res.status(400).json({errors:e})
    }
}