

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
        invite: {
            not_found: 'Приглашение не найдено',
            exist: 'Приглашение уже отправлено',
            self: 'Нельзя отправить приглашение самому себе',
            friend_error: "Не удалось добавить друга",
            dialog_error: "Не удалось подключиться к диалогу",
            empty_user: "Пустой пользователь",
            long_message: "Сообщение не может быть длинее 100 символов"
        },
        build: {
            not_found: "Сборка не найдена",
            empty_name: "Название не может быть пустым",
            short_name: "Название не может быть короче 2 символов",
            image: "Не удалось сохранить изображение"
        },
        dialog: {
            not_found: "Диалог не найден",
            access: "Нет доступа к диалогу",
            has_user: "Пользователь уже находится в диалоге",
            user_not_friend: "Один или несколько пользователей отсутствуют в ваших друзьях",
            create_error: "Не удалось создать диалог",
            empty_name: "Название не может быть пустым",
            short_name: "Название не может быть короче 2 символов",
            image: "Не удалось сохранить изображение"
        },
        message: {
            not_found: "Сообщение не найдено",
            type_format: "Неизвестный тип сообщения",
            data_format: "Неверный формат сообщения"
        },
        friends: {
            not_found: "Друг не найден"
        },
        tokens: {
            not_found_salt: "Пользователь с таким ключем не найден",
            undefined: "Непредвиденная ошибка",
            auth: "Ошибка авторизации"
        },
        upload: {
            save: "Не удалось сохранить изображение"
        }
    }
}

export const errorMessages = (locale = "ru_RU") => {
    return errors[locale];
}

export const setParameters = (parameters) => {
    common.parameters = parameters;
}