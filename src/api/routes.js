import rUsers from "./routes/users"
import rBooks from "./routes/books"
import rToken from "./routes/tokens"

export default [
    {
        path: "/users",
        controller: rUsers,
    },
    {
        path: "/books",
        controller: rBooks,
    },
    {
        path: "/token",
        controller: rToken,
    }
]