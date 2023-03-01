import { NextFunction, Request, Response } from "express";
import { verifyIfUserExistsService } from ".";

export function VerifyIfUserExistsMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(req.params["user_id"], req.headers["user_id"]);

  const userId = req.params["user_id"]
    ? req.params["user_id"]
    : req.headers["user_id"];

  if (userId === "admin") {
    return next();
  }

  const userExists = verifyIfUserExistsService.execute(userId as string);

  if (!userExists) {
    return res.status(400).json({ error: { message: "User not exists!" } });
  }

  return next();
}
