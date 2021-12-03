import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import routes from './api/routes';
import { loadParameters } from './db/parameters';

const app = express();

const startApp = async () => {
    try {
        console.log("Запуск сервера API");
        const params = await loadParameters();
        console.log("Параметры загружены:\n",params);
        app.disable('etag');
        app.use(logger('dev'));
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
        app.use(cookieParser());
        if (process.env.NODE_ENV == "development") {app.use("/docs/",express.static(path.join(__dirname, '../docs')));};
        app.use("/repo/",express.static(path.join(__dirname, '../public/repo/')));
        routes.forEach(i=>app.use(i.path, i.controller));
        console.log("Сервер успешно запущен");
    } catch (e) {
        console.log(e);
    }
}

startApp();

export default app;