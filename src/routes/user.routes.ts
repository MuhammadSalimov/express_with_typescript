import { Router } from "express";
import { getUser } from "../controllers/user.controller";

const userRoute = Router();

userRoute.get("/", getUser);

export default userRoute;
