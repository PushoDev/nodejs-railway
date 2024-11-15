import express from "express";
// importar DataBase
import { pool } from "./db.js";
// Importar Configuraciones
import { PORT } from "./config.js";

const app = express();

// Init App
app.get("/", (req, res) => {
  res.send("Bienvenidos a mi Servidor...");
});

app.get("/clients", async (req, res) => {
  const [rows] = await pool.query("SELECT *FROM clients");
  res.json(rows);
});

app.get("/clients/create", async (req, res) => {
  const result = await pool.query(
    'INSERT INTO clients(name, telf) VALUES ("Luis", "55572430")'
  );
  res.json(result);
});

// Port
app.listen(PORT);
console.log("Servidor en el Puerto", PORT);
