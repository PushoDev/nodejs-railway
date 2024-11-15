import { createPool } from "mysql2/promise";

import {
  MYSQLUSER,
  MYSQLPASSWORD,
  MYSQLHOST,
  MYSQLPORT,
  MYSQLDATABSE
} from "./config.js";

export const pool = createPool({
  user: MYSQLUSER,
  password: MYSQLPASSWORD,
  host: MYSQLHOST,
  port: MYSQLPORT,
  database: MYSQLDATABSE
});
