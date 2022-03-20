import express from "express";
import cors from "cors";
import corsConfig from "./config/index.js";
import "./config/stripe.js";
import { paymentIntent, session } from "./config/stripe.js";

const { PORT } = process.env;

const server = express();

server.use(cors(corsConfig));
server.use(express.json());

server.route("/testRoute").post(async (req, res, next) => {
  console.log("here");
  const int = session.url;
  res.send(int);
});

server.listen(PORT, () => console.log("Server listening on " + PORT));
server.on("error", (error) => console.log("Server crashed due " + error));

export default server;
