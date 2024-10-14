import { NextFunction, Request, Response } from "express";
import { getAllUser } from "../services/user.service";
import { BaseError } from "../error/base.error";
import { CreateUserDto } from "../dtos/CreateUser.dto";

export function getUser(req: Request<{}, {}, CreateUserDto>, res: Response) {
  try {
    const user = getAllUser();
    res.status(200).json(user);
  } catch (error) {}
}
