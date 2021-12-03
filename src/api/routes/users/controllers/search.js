import { getUsers } from "../../../../db/models/user"

export default async (req, res, next) => {
    try {
        const users = await getUsers(false,{
            sort:{
                by:"likes",
                type:"DESC"
            },
            like:{
                par:"username",
                exp:`%${req.query.search}%`
            }
        });
        res.status(200).json(users.map(i=>i.info()));
    } catch (e) {
        res.status(400).json({errors:e})
    }
}