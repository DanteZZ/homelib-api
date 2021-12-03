import mysql from "mysql";
import { conf_db } from "../configs.js";

const connection = mysql.createConnection(conf_db);
connection.connect();

export default connection