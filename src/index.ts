import express, { NextFunction, Request, Response } from "express";
import router from "./routes";

const app = express();

const PORT = 3000;

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});
