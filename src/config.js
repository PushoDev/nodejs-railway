// Puerto de Conenction
export const PORT = process.env.PORT || 3000;

// Conectar con DataBase
// export const DB_HOST = process.env.DB_HOST || "localhost";
// export const DB_USER = process.env.DB_USER || "root";
// export const DB_PASSWORD = process.env.DB_PASSWORD || "";
// export const DB_NAME = process.env.DB_NAME || "proyectoremesa";
// export const DB_PORT = process.env.DB_PORT || 3306;


// Configuraciones para Production
export const MYSQLHOST = process.env.MYSQLHOST || 'localhost'
export const MYSQLUSER = process.env.MYSQLUSER || 'root'
export const MYSQLPASSWORD = process.env.MYSQLPASSWORD || ''
export const MYSQLDATABSE = process.env.MYSQLDATABSE || 'proyectoremesa'
export const MYSQLPORT = process.env.MYSQLPORT || 3306