import { NextFunction, Request, Response } from "express";
import { getAllUser } from "../services/user.service";
import { BaseError } from "../error/base.error";

export function getUser(req: Request, res: Response) {
  try {
    const user = getAllUser(req, res);
    res.send(user);
  } catch (error) {
  }
}
