import express from 'express';
import cors from "cors";
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
        console.log("Параметры загружены:\n", params);
        app.disable('etag');
        app.use(cors());
        app.use(logger('dev'));
        app.use(express.json({ limit: '20mb' }));
        app.use(express.urlencoded({ extended: false, limit: '20mb' }));
        app.use(cookieParser());
        if (process.env.NODE_ENV == "development" || true) { app.use("/docs/", express.static(path.join(__dirname, '../docs'))); };
        app.use("/repo/", express.static(path.join(__dirname, '../public/repo/')));
        routes.forEach(i => app.use(i.path, i.controller));
        console.log("Сервер успешно запущен");
    } catch (e) {
        console.log(e);
    }
}

startApp();

export default app;