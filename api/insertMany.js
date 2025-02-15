import { artistArray } from "../database/artists.js";
import { songsArray } from "../database/songs.js";
import { db } from "./connect.js";

// Inserindo os dados no banco do mongoDb mas removendo o id dos dados, pois o mongo já tras
const newArtistArray = artistArray.map((currentArtistObj) => {
  const newArtistObj = { ...currentArtistObj };
  delete newArtistObj.id;

  return newArtistObj;
});

const newSongsArray = songsArray.map((currentSongObj) => {
  const newSongObj = { ...currentSongObj };
  delete newSongObj.id;

  return newSongObj;
});

const responseSongs = await db.collection("songs").insertMany(newSongsArray);
const responseArtists = await db
  .collection("artists")
  .insertMany(newArtistArray);

console.log(responseSongs);
console.log(responseArtists);

// console.log(newArtistArray);
// console.log(newSongsArray);
// console.log(songsArray);
