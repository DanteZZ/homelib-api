define({ "api": [
  {
    "type": "post",
    "url": "/invites/dialog/:id/accept",
    "title": "Подтвердить приглашение в диалоги",
    "version": "0.5.0",
    "name": "Accept",
    "group": "Invites-Dialog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID Инвайта</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer токен.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\":true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NOT FOUND\n{\n    \"errors\": \"Приглашение <id> не найдено\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/invites/index.js",
    "groupTitle": "Invites-Dialog"
  },
  {
    "type": "post",
    "url": "/invites/dialog/:id/decline",
    "title": "Не подтверждать приглашение в диалоги",
    "version": "0.5.0",
    "name": "Decline",
    "group": "Invites-Dialog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID Инвайта</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer токен.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\":true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NOT FOUND\n{\n    \"errors\": \"Приглашение <id> не найдено\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/invites/index.js",
    "groupTitle": "Invites-Dialog"
  },
  {
    "type": "get",
    "url": "/invites/dialog/",
    "title": "Список приглашений в диалоги",
    "version": "0.5.0",
    "name": "GetDialogInvites",
    "group": "Invites-Dialog",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer токен.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [\n     \"id\":1,\n     \"dialog\":1337,\n     \"message\":\"Hello there!\",\n     \"from\":1333\n ]",
          "type": "json"
        }
      ],
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "dialog",
            "description": "<p>Диалог</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Сообщение</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "from",
            "description": "<p>Создатель инвайта</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/invites/index.js",
    "groupTitle": "Invites-Dialog"
  },
  {
    "type": "post",
    "url": "/api/token/gen",
    "title": "Сгенерировать токен",
    "version": "0.5.0",
    "name": "GenToken",
    "group": "Tokens",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "salt",
            "description": "<p>Ключ юзера</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\":<Bearer roken>\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NOT FOUND\n{\n    \"errors\": \"Пользователь с таким ключом не найден\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/tokens/index.js",
    "groupTitle": "Tokens"
  },
  {
    "type": "put",
    "url": "/api/users/me/changemail",
    "title": "Изменить email текущего пользователя",
    "version": "0.5.0",
    "name": "ChangeMyEmail",
    "group": "Users-Me",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Пароль для подтверждения</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-Mail</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer токен.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\":true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Validation:",
          "content": "HTTP/1.1 400 BAD REQUEST\n{\n    \"errors\": \"Неверный формат E-Mail\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/users/index.js",
    "groupTitle": "Users-Me"
  },
  {
    "type": "put",
    "url": "/api/users/me/changepass",
    "title": "Изменить пароль текущего пользователя",
    "version": "0.5.0",
    "name": "ChangeMyPass",
    "group": "Users-Me",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "old_password",
            "description": "<p>Старый пароль</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Новый пароль</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer токен.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\":true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Validation:",
          "content": "HTTP/1.1 400 BAD REQUEST\n{\n    \"errors\": \"Пароли не совпадают\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/users/index.js",
    "groupTitle": "Users-Me"
  },
  {
    "type": "get",
    "url": "/api/users/me/info",
    "title": "Получить информацию о текущем пользователе",
    "version": "0.5.0",
    "name": "GetInfoAboutMe",
    "group": "Users-Me",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer токен.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"username\": \"testuser\",\n    \"avatar\": \"\",\n    \"name\": \"Тестовый пользователь\",\n    \"email\": \"test@test.ru\",\n    \"ingame\": false,\n    \"ingame_info\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Логин</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Ссылка на аватарку</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Имя пользователя</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-Mail</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/users/index.js",
    "groupTitle": "Users-Me"
  },
  {
    "type": "delete",
    "url": "/api/users/me/remove",
    "title": "Удалить текущего пользователя",
    "version": "0.5.0",
    "name": "RemoveMe",
    "group": "Users-Me",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Пароль для подтверждения</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer токен.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\":true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Validation:",
          "content": "HTTP/1.1 400 BAD REQUEST\n{\n    \"errors\": \"Неверный пароль\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/users/index.js",
    "groupTitle": "Users-Me"
  },
  {
    "type": "delete",
    "url": "/api/users/me/removeavatar",
    "title": "Удалить аватар текущего пользователя",
    "version": "0.5.0",
    "name": "RemoveMyAvatar",
    "group": "Users-Me",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer токен.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"username\": \"testuser\",\n    \"avatar\": \"\",\n    \"name\": \"Тестовый пользователь\",\n    \"email\": \"test@test.ru\",\n    \"ingame\": false,\n    \"ingame_info\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/users/index.js",
    "groupTitle": "Users-Me"
  },
  {
    "type": "put",
    "url": "/api/users/me/setavatar",
    "title": "Изменить аватар текущего пользователя",
    "version": "0.5.0",
    "name": "SetMyAvatar",
    "group": "Users-Me",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Аватар (base64)</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer токен.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\":true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Validation:",
          "content": "HTTP/1.1 400 BAD REQUEST\n{\n    \"errors\": \"Не удалось сохранить изображение\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/users/index.js",
    "groupTitle": "Users-Me"
  },
  {
    "type": "put",
    "url": "/api/users/me/setgame",
    "title": "Установить игру текущего пользователя",
    "version": "0.5.0",
    "name": "SetMyGame",
    "group": "Users-Me",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "ingame",
            "description": "<p>Находится ли в игре</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "game",
            "description": "<p>Информация об игре</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "game.name",
            "description": "<p>Название сборки</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "game.version",
            "description": "<p>Версия сборки</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "game.build",
            "description": "<p>ID Версии (Если она расшарена)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "game.gamecode",
            "description": "<p>Код игры</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer токен.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"username\": \"testuser\",\n    \"avatar\": \"\",\n    \"name\": \"Тестовый пользователь\",\n    \"email\": \"test@test.ru\",\n    \"ingame\": false,\n    \"ingame_info\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Validation:",
          "content": "HTTP/1.1 400 BAD REQUEST\n{\n    \"errors\": \"Не удалось установить игру\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/users/index.js",
    "groupTitle": "Users-Me"
  },
  {
    "type": "put",
    "url": "/api/users/me/update",
    "title": "Обновить информацию о текущем пользователе",
    "version": "0.5.0",
    "name": "UpdateMyInfo",
    "group": "Users-Me",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Имя пользователя</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer токен.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\":true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Validation:",
          "content": "HTTP/1.1 400 BAD REQUEST\n{\n    \"errors\": {\n        \"name\": [\n            \"Имя пользователя не может быть короче 2 символов\"\n        ]\n    }\n}",
          "type": "json"
        },
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/users/index.js",
    "groupTitle": "Users-Me"
  },
  {
    "type": "post",
    "url": "/api/users/auth",
    "title": "Авторизация пользователя",
    "version": "0.5.0",
    "name": "Authentication",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Логин</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Пароль</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"result\": true,\n     \"data\": <user>\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 BAD REQUEST\n{\n    \"errors\": \"Неверный логин или пароль\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/users/index.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/api/users/get/:username",
    "title": "Получить пользователя по логину",
    "version": "0.5.0",
    "name": "GetByUsername",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Логин</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"username\": \"testuser\",\n    \"avatar\": \"\",\n    \"name\": \"Тестовый пользователь\",\n    \"email\": \"test@test.ru\",\n    \"ingame\": false,\n    \"ingame_info\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Логин</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Ссылка на аватарку</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Имя пользователя</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-Mail</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 BAD REQUEST\n{\n    \"errors\": \"Пользователь <username> не найден\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/users/index.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/api/users/",
    "title": "Получить топ активных пользователей",
    "version": "0.5.0",
    "name": "GetTop",
    "group": "Users",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     {\n         \"id\": 1,\n         \"username\": \"testuser\",\n         \"avatar\": \"\",\n         \"name\": \"Тестовый пользователь\",\n         \"email\": \"test@test.ru\",\n         \"ingame\": false,\n         \"ingame_info\": null\n     }\n]",
          "type": "json"
        }
      ],
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Логин</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Ссылка на аватарку</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Имя пользователя</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-Mail</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/users/index.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/api/users/reg",
    "title": "Регистрация пользователя",
    "version": "0.5.0",
    "name": "Registration",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Логин</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Пароль</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Имя пользователя</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-Mail</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"username\": \"testuser\",\n    \"avatar\": \"\",\n    \"name\": \"Тестовый пользователь\",\n    \"email\": \"test@test.ru\",\n    \"ingame\": false,\n    \"ingame_info\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Validation:",
          "content": "HTTP/1.1 400 BAD REQUEST\n{\n    \"errors\": {\n        \"name\": [\n            \"Name Имя пользователя не может быть короче 2 символов\"\n        ]\n    }\n}",
          "type": "json"
        },
        {
          "title": "Error-Registration:",
          "content": "HTTP/1.1 400 BAD REQUEST\n{\n    \"errors\": \"Пользователь с таким логином или E-Mail уже существует\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/users/index.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/api/users/search",
    "title": "Поиск пользователей",
    "version": "0.5.0",
    "name": "Search",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>Логин</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     {\n         \"id\": 1,\n         \"username\": \"testuser\",\n         \"avatar\": \"\",\n         \"name\": \"Тестовый пользователь\",\n         \"email\": \"test@test.ru\",\n         \"ingame\": false,\n         \"ingame_info\": null\n     }\n]",
          "type": "json"
        }
      ],
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Логин</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Ссылка на аватарку</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Имя пользователя</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-Mail</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/users/index.js",
    "groupTitle": "Users"
  }
] });
