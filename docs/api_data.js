define({ "api": [
  {
    "type": "post",
    "url": "/api/books/create/",
    "title": "Создать книгу",
    "version": "1.0.0",
    "name": "CreateBook",
    "group": "Books",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
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
    "error": {
      "examples": [
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/books/index.js",
    "groupTitle": "Books",
    "success": {
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
            "field": "author",
            "description": "<p>Автор</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Название</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "publisher",
            "description": "<p>Издатель</p>"
          },
          {
            "group": "200",
            "type": "Year",
            "optional": false,
            "field": "year",
            "description": "<p>Год</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "isbn",
            "description": "<p>ISBN</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "buy_date",
            "description": "<p>Дата покупки</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "language",
            "description": "<p>Язык</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Количество страниц</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Цена</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Изображение</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "cover",
            "description": "<p>Тип обложки</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "category",
            "description": "<p>Категория</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "rate",
            "description": "<p>Рейтинг</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "handovered",
            "description": "<p>Отдана ли кому-то</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "readed",
            "description": "<p>Прочитана ли книга</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "serie",
            "description": "<p>Серия</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "read_date",
            "description": "<p>Дата прочтения</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "ordered",
            "description": "<p>Находится ли она в доставке</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/api/books/delete/:id",
    "title": "Удалить книгу",
    "version": "1.0.0",
    "name": "DeleteBook",
    "group": "Books",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Идентификатор книги</p>"
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
    "error": {
      "examples": [
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/books/index.js",
    "groupTitle": "Books",
    "success": {
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
            "field": "author",
            "description": "<p>Автор</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Название</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "publisher",
            "description": "<p>Издатель</p>"
          },
          {
            "group": "200",
            "type": "Year",
            "optional": false,
            "field": "year",
            "description": "<p>Год</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "isbn",
            "description": "<p>ISBN</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "buy_date",
            "description": "<p>Дата покупки</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "language",
            "description": "<p>Язык</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Количество страниц</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Цена</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Изображение</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "cover",
            "description": "<p>Тип обложки</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "category",
            "description": "<p>Категория</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "rate",
            "description": "<p>Рейтинг</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "handovered",
            "description": "<p>Отдана ли кому-то</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "readed",
            "description": "<p>Прочитана ли книга</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "serie",
            "description": "<p>Серия</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "read_date",
            "description": "<p>Дата прочтения</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "ordered",
            "description": "<p>Находится ли она в доставке</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/books/list/",
    "title": "Список книг",
    "version": "1.0.0",
    "name": "GetBookList",
    "group": "Books",
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
    "error": {
      "examples": [
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/books/index.js",
    "groupTitle": "Books",
    "success": {
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
            "field": "author",
            "description": "<p>Автор</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Название</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "publisher",
            "description": "<p>Издатель</p>"
          },
          {
            "group": "200",
            "type": "Year",
            "optional": false,
            "field": "year",
            "description": "<p>Год</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "isbn",
            "description": "<p>ISBN</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "buy_date",
            "description": "<p>Дата покупки</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "language",
            "description": "<p>Язык</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Количество страниц</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Цена</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Изображение</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "cover",
            "description": "<p>Тип обложки</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "category",
            "description": "<p>Категория</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "rate",
            "description": "<p>Рейтинг</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "handovered",
            "description": "<p>Отдана ли кому-то</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "readed",
            "description": "<p>Прочитана ли книга</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "serie",
            "description": "<p>Серия</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "read_date",
            "description": "<p>Дата прочтения</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "ordered",
            "description": "<p>Находится ли она в доставке</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/books/update/:id",
    "title": "Изменить книгу",
    "version": "1.0.0",
    "name": "UpdateBook",
    "group": "Books",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Идентификатор книги</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
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
    "error": {
      "examples": [
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/books/index.js",
    "groupTitle": "Books",
    "success": {
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
            "field": "author",
            "description": "<p>Автор</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Название</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "publisher",
            "description": "<p>Издатель</p>"
          },
          {
            "group": "200",
            "type": "Year",
            "optional": false,
            "field": "year",
            "description": "<p>Год</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "isbn",
            "description": "<p>ISBN</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "buy_date",
            "description": "<p>Дата покупки</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "language",
            "description": "<p>Язык</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Количество страниц</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Цена</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Изображение</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "cover",
            "description": "<p>Тип обложки</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "category",
            "description": "<p>Категория</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "rate",
            "description": "<p>Рейтинг</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "handovered",
            "description": "<p>Отдана ли кому-то</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "readed",
            "description": "<p>Прочитана ли книга</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "serie",
            "description": "<p>Серия</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "read_date",
            "description": "<p>Дата прочтения</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "ordered",
            "description": "<p>Находится ли она в доставке</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/categories/create/",
    "title": "Создать категорию",
    "version": "1.0.0",
    "name": "CreateCategory",
    "group": "Categories",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
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
    "error": {
      "examples": [
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/categories/index.js",
    "groupTitle": "Categories",
    "success": {
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
            "field": "name",
            "description": "<p>Название</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "parent",
            "description": "<p>ID родительской категории</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/api/categories/delete/:id",
    "title": "Удалить категорию",
    "version": "1.0.0",
    "name": "DeleteCategory",
    "group": "Categories",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Идентификатор категории</p>"
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
    "error": {
      "examples": [
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/categories/index.js",
    "groupTitle": "Categories",
    "success": {
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
            "field": "name",
            "description": "<p>Название</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "parent",
            "description": "<p>ID родительской категории</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/categories/list/",
    "title": "Список категорий",
    "version": "1.0.0",
    "name": "GetCategoryList",
    "group": "Categories",
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
    "error": {
      "examples": [
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/categories/index.js",
    "groupTitle": "Categories",
    "success": {
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
            "field": "name",
            "description": "<p>Название</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "parent",
            "description": "<p>ID родительской категории</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/categories/update/:id",
    "title": "Изменить категорию",
    "version": "1.0.0",
    "name": "UpdateCategory",
    "group": "Categories",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Идентификатор категории</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
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
    "error": {
      "examples": [
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/categories/index.js",
    "groupTitle": "Categories",
    "success": {
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
            "field": "name",
            "description": "<p>Название</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "parent",
            "description": "<p>ID родительской категории</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/covers/create/",
    "title": "Создать переплёт",
    "version": "1.0.0",
    "name": "CreateCover",
    "group": "Covers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
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
    "error": {
      "examples": [
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/covers/index.js",
    "groupTitle": "Covers",
    "success": {
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
            "field": "name",
            "description": "<p>Название</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/api/covers/delete/:id",
    "title": "Удалить переплёт",
    "version": "1.0.0",
    "name": "DeleteCover",
    "group": "Covers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Идентификатор переплёта</p>"
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
    "error": {
      "examples": [
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/covers/index.js",
    "groupTitle": "Covers",
    "success": {
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
            "field": "name",
            "description": "<p>Название</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/covers/list/",
    "title": "Список переплётов",
    "version": "1.0.0",
    "name": "GetCoverList",
    "group": "Covers",
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
    "error": {
      "examples": [
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/covers/index.js",
    "groupTitle": "Covers",
    "success": {
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
            "field": "name",
            "description": "<p>Название</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/covers/update/:id",
    "title": "Изменить переплёт",
    "version": "1.0.0",
    "name": "UpdateCover",
    "group": "Covers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Идентификатор переплёта</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
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
    "error": {
      "examples": [
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/covers/index.js",
    "groupTitle": "Covers",
    "success": {
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
            "field": "name",
            "description": "<p>Название</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/externals/get/",
    "title": "Получить книгу",
    "version": "1.0.0",
    "name": "ExternalGet",
    "group": "Externals",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": ""
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
    "error": {
      "examples": [
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/external/index.js",
    "groupTitle": "Externals"
  },
  {
    "type": "post",
    "url": "/api/external/search/",
    "title": "Поиск книг",
    "version": "1.0.0",
    "name": "GetExternalFind",
    "group": "Externals",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": ""
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
    "filename": "src/api/routes/external/index.js",
    "groupTitle": "Externals"
  },
  {
    "type": "post",
    "url": "/api/friends/create/",
    "title": "Создать друга",
    "version": "1.0.0",
    "name": "CreateFriend",
    "group": "Friends",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
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
    "error": {
      "examples": [
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/friends/index.js",
    "groupTitle": "Friends",
    "success": {
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
            "field": "name",
            "description": "<p>Имя</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/api/friends/delete/:id",
    "title": "Удалить друга",
    "version": "1.0.0",
    "name": "DeleteFriend",
    "group": "Friends",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Идентификатор друга</p>"
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
    "error": {
      "examples": [
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/friends/index.js",
    "groupTitle": "Friends",
    "success": {
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
            "field": "name",
            "description": "<p>Имя</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/friends/list/",
    "title": "Список друзей",
    "version": "1.0.0",
    "name": "GetFriendList",
    "group": "Friends",
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
    "error": {
      "examples": [
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/friends/index.js",
    "groupTitle": "Friends",
    "success": {
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
            "field": "name",
            "description": "<p>Имя</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/friends/update/:id",
    "title": "Изменить друга",
    "version": "1.0.0",
    "name": "UpdateFriend",
    "group": "Friends",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Идентификатор друга</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
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
    "error": {
      "examples": [
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/friends/index.js",
    "groupTitle": "Friends",
    "success": {
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
            "field": "name",
            "description": "<p>Имя</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/handovers/create/",
    "title": "Создать передачу",
    "version": "1.0.0",
    "name": "CreateHandover",
    "group": "Handovers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "book",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "to",
            "description": ""
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
    "error": {
      "examples": [
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/handovers/index.js",
    "groupTitle": "Handovers",
    "success": {
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
            "field": "book",
            "description": "<p>ID Книги</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "to",
            "description": "<p>ID Друга</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Дата передачи</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "return_date",
            "description": "<p>Дата возврата</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "fact_date",
            "description": "<p>Фактическая дата возврата</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "handovered",
            "description": "<p>Передана ли</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/api/handovers/delete/:id",
    "title": "Удалить передачу",
    "version": "1.0.0",
    "name": "DeleteHandover",
    "group": "Handovers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Идентификатор передачи</p>"
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
    "error": {
      "examples": [
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/handovers/index.js",
    "groupTitle": "Handovers",
    "success": {
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
            "field": "book",
            "description": "<p>ID Книги</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "to",
            "description": "<p>ID Друга</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Дата передачи</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "return_date",
            "description": "<p>Дата возврата</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "fact_date",
            "description": "<p>Фактическая дата возврата</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "handovered",
            "description": "<p>Передана ли</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/handovers/list/",
    "title": "Список передач",
    "version": "1.0.0",
    "name": "GetHandoverList",
    "group": "Handovers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "book",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "to",
            "description": ""
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
    "error": {
      "examples": [
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/handovers/index.js",
    "groupTitle": "Handovers",
    "success": {
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
            "field": "book",
            "description": "<p>ID Книги</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "to",
            "description": "<p>ID Друга</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Дата передачи</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "return_date",
            "description": "<p>Дата возврата</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "fact_date",
            "description": "<p>Фактическая дата возврата</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "handovered",
            "description": "<p>Передана ли</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/handovers/update/:id",
    "title": "Изменить передачу",
    "version": "1.0.0",
    "name": "UpdateHandover",
    "group": "Handovers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Идентификатор передачи</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "book",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "to",
            "description": ""
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
    "error": {
      "examples": [
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/handovers/index.js",
    "groupTitle": "Handovers",
    "success": {
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
            "field": "book",
            "description": "<p>ID Книги</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "to",
            "description": "<p>ID Друга</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Дата передачи</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "return_date",
            "description": "<p>Дата возврата</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "fact_date",
            "description": "<p>Фактическая дата возврата</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "handovered",
            "description": "<p>Передана ли</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/languages/create/",
    "title": "Создать язык",
    "version": "1.0.0",
    "name": "CreateLanguage",
    "group": "Languages",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": ""
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
    "error": {
      "examples": [
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/languages/index.js",
    "groupTitle": "Languages",
    "success": {
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
            "field": "name",
            "description": "<p>Название</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>Иконка</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/api/languages/delete/:id",
    "title": "Удалить язык",
    "version": "1.0.0",
    "name": "DeleteLanguage",
    "group": "Languages",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Идентификатор языка</p>"
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
    "error": {
      "examples": [
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/languages/index.js",
    "groupTitle": "Languages",
    "success": {
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
            "field": "name",
            "description": "<p>Название</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>Иконка</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/languages/list/",
    "title": "Список языков",
    "version": "1.0.0",
    "name": "GetLanguageList",
    "group": "Languages",
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
    "error": {
      "examples": [
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/languages/index.js",
    "groupTitle": "Languages",
    "success": {
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
            "field": "name",
            "description": "<p>Название</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>Иконка</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/languages/update/:id",
    "title": "Изменить язык",
    "version": "1.0.0",
    "name": "UpdateLanguage",
    "group": "Languages",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Идентификатор языка</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": ""
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
    "error": {
      "examples": [
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/languages/index.js",
    "groupTitle": "Languages",
    "success": {
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
            "field": "name",
            "description": "<p>Название</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>Иконка</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/publishers/create/",
    "title": "Создать издателя",
    "version": "1.0.0",
    "name": "CreatePublisher",
    "group": "Publishers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
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
    "error": {
      "examples": [
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/publishers/index.js",
    "groupTitle": "Publishers",
    "success": {
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
            "field": "name",
            "description": "<p>Название</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Изображение</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/api/publishers/delete/:id",
    "title": "Удалить издателя",
    "version": "1.0.0",
    "name": "DeletePublisher",
    "group": "Publishers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Идентификатор издателя</p>"
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
    "error": {
      "examples": [
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/publishers/index.js",
    "groupTitle": "Publishers",
    "success": {
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
            "field": "name",
            "description": "<p>Название</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Изображение</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/api/publishers/deleteimg/:id",
    "title": "Удалить изображение издателя",
    "version": "1.0.0",
    "name": "DeletePublisherImg",
    "group": "Publishers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Идентификатор издателя</p>"
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
    "error": {
      "examples": [
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/publishers/index.js",
    "groupTitle": "Publishers",
    "success": {
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
            "field": "name",
            "description": "<p>Название</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Изображение</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/publishers/list/",
    "title": "Список издателей",
    "version": "1.0.0",
    "name": "GetPublisherList",
    "group": "Publishers",
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
    "error": {
      "examples": [
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/publishers/index.js",
    "groupTitle": "Publishers",
    "success": {
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
            "field": "name",
            "description": "<p>Название</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Изображение</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/publishers/update/:id",
    "title": "Изменить издателя",
    "version": "1.0.0",
    "name": "UpdatePublisher",
    "group": "Publishers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Идентификатор издателя</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": ""
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
    "error": {
      "examples": [
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/publishers/index.js",
    "groupTitle": "Publishers",
    "success": {
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
            "field": "name",
            "description": "<p>Название</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Изображение</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/reviews/create/",
    "title": "Создать заметку",
    "version": "1.0.0",
    "name": "CreateReview",
    "group": "Reviews",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "book",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": ""
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
    "error": {
      "examples": [
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reviews/index.js",
    "groupTitle": "Reviews",
    "success": {
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
            "field": "book",
            "description": "<p>ID Книги</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Страница</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Текст</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/api/reviews/delete/:id",
    "title": "Удалить заметку",
    "version": "1.0.0",
    "name": "DeleteReview",
    "group": "Reviews",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Идентификатор заметки</p>"
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
    "error": {
      "examples": [
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reviews/index.js",
    "groupTitle": "Reviews",
    "success": {
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
            "field": "book",
            "description": "<p>ID Книги</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Страница</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Текст</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/reviews/list/",
    "title": "Список заметок",
    "version": "1.0.0",
    "name": "GetReviewList",
    "group": "Reviews",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "book",
            "description": ""
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
    "error": {
      "examples": [
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reviews/index.js",
    "groupTitle": "Reviews",
    "success": {
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
            "field": "book",
            "description": "<p>ID Книги</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Страница</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Текст</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/reviews/update/:id",
    "title": "Изменить заметку",
    "version": "1.0.0",
    "name": "UpdateReview",
    "group": "Reviews",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Идентификатор заметки</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "book",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": ""
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
    "error": {
      "examples": [
        {
          "title": "Error-Auth:",
          "content": "HTTP/1.1 403 AuthenticationFailed\n{\n    \"errors\": \"Ошибка авторизации\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reviews/index.js",
    "groupTitle": "Reviews",
    "success": {
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
            "field": "book",
            "description": "<p>ID Книги</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Страница</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Текст</p>"
          }
        ]
      }
    }
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
