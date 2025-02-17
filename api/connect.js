import { MongoClient } from "mongodb";
import "dotenv/config";
const client = new MongoClient(process.env.MONGODB_CONNECT_URI);

export const db = client.db("spotifyClone");
const songCollection = await db.collection("songs").find({}).toArray();
console.log(songCollection);
