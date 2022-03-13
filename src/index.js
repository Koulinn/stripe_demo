import express from "express";
import cors from "cors";
import corsConfig from "./config/index.js";

const { PORT } = process.env;

const server = express();

server.use(cors(corsConfig));
server.use(express.json());

server.listen(PORT, () => console.log("Server listening on " + PORT));
server.on("error", (error) => console.log("Server crashed due " + error));

export default server;
