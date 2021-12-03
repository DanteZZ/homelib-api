import rUsers from "./routes/users"
import rInvites from "./routes/invites"
import rToken from "./routes/tokens"

export default [
    {
        path: "/users",
        controller: rUsers,
    },
    {
        path: "/invites",
        controller: rInvites,
    },
    {
        path: "/token",
        controller: rToken,
    }
]