import rUsers from "./routes/users"
import rBooks from "./routes/books"
import rToken from "./routes/tokens"
import rCategory from "./routes/categories"
import rCover from "./routes/covers"
import rLanguage from "./routes/languages"
import rPublisher from "./routes/publishers"
import rFriend from "./routes/friends"

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
    },
    {
        path: "/categories",
        controller: rCategory,
    },
    {
        path: "/covers",
        controller: rCover,
    },
    {
        path: "/languages",
        controller: rLanguage,
    },
    {
        path: "/publishers",
        controller: rPublisher,
    },
    {
        path: "/friends",
        controller: rFriend,
    }
]