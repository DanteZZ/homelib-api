export const conf_db = {
    host: "localhost",
    user: "admin",
    password: "SS5nJ7M8Dj2KS7Ss",
    database: "homelib"
}

export const common = {
    saltLength: 8,
    repo_images: "/public/repo/images/",
    parameters: {},
    messagesCount: 50
}

export const errors = {
    ru_RU: {
        user: {
            empty_name: "Имя пользователя не может быть пустым",
            empty_username: "Логин не может быть пустым",
            empty_email: "E-Mail не может быть пустым",
            empty_password: "Пароль не может быть пустым",

            short_name: "Имя пользователя не может быть короче 2 символов",
            short_username: "Логин не может быть короче 3 символов",
            short_password: "Пароль не может быть короче 3 символов",

            invalid_email: "Неверный формат E-Mail",

            existing_user: "Пользователь с таким логином или E-Mail уже существует",

            not_found: "Пользователь не найден",

            create: "Произошла непредвиденная ошибка при регистрации пользователя",
            update: "Произошла непредвиденная ошибка при обновлении пользователя",
            remove: "Произошла непредвиденная ошибка при удалении пользователя",

            avatar: "Не удалось сохранить изображение",
            me: {
                auth: "Не удалось авторизоваться, проверьте логин или пароль",
                pass_not_equal: "Пароли не совпадают",
                password: "Не верный пароль",
                ingame: "Не удалось установить игру",
                existing_email: "E-Mail занят"
            }
        },
        tokens: {
            not_found_salt: "Пользователь с таким ключем не найден",
            undefined: "Непредвиденная ошибка",
            auth: "Ошибка авторизации"
        },
        upload: {
            save: "Не удалось сохранить изображение"
        },
        book: {
            update: "Произошла ошибка при сохранении книги",
            not_found: "Книга не найдена"
        }
    }
}

export const errorMessages = (locale = "ru_RU") => {
    return errors[locale];
}

export const setParameters = (parameters) => {
    common.parameters = parameters;
}