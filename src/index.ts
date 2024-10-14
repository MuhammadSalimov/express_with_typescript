import http from "http";
import express from "express";
import cors from "cors";
import router from "./routes";
import { SERVER } from "./config";
import "./config/logging";
import { loggingHandler } from "./middleware/loggingHandler";
const application = express();
let httpServer: ReturnType<typeof http.createServer>;

const Main = () => {
  logging.info("---------------------");
  logging.info("Initializing API");
  logging.info("---------------------");
  application.use(express.urlencoded({ extended: true }));
  application.use(express.json());

  logging.info("---------------------");
  logging.info("Logging & Configuration");
  logging.info("---------------------");
  application.use(loggingHandler);
  application.use(cors());

  logging.info("---------------------");
  logging.info("Defined Controller Routing");
  logging.info("---------------------");
  application.use("/api", router);

  logging.info("---------------------");
  logging.info("server started");
  logging.info("---------------------");
  httpServer = http.createServer(application);
  httpServer.listen(SERVER.port, () => {
    logging.info("---------------------");
    logging.info(`server started on http://${SERVER.host}:${SERVER.port}`);
    logging.info("---------------------");
  });
};

export const ShutDown = (colback: any) =>
  httpServer && httpServer.close(colback);

Main();
