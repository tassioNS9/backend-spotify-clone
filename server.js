import express from "express";
import { db } from "./api/connect.js";
import cors from "cors";
const app = express();
import "dotenv/config";
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  response.send("Olá, Mundo!");
});

app.get("/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});
