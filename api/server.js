import express from "express";
import { db } from "./connect.js";
import { artistArray } from "../database/artists.js";
import { songsArray } from "../database/songs.js";
const app = express();
const PORT = 3000;

app.get("/", (request, response) => {
  response.send("Olá, Mundo!");
});

app.get("/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", (request, response) => {
  response.send(songsArray);
});
app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});
