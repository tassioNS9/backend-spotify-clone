import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://tassioneves9:HGDbJjjAB45Seuk9@databases.rbdls.mongodb.net/?retryWrites=true&w=majority&appName=databases";

const client = new MongoClient(URI);

export const db = client.db("spotifyClone");
const songCollection = await db.collection("songs").find({}).toArray();
console.log(songCollection);
