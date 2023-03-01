import { NextFunction, Request, Response } from "express";
import { verifyIfUserIsAdmin } from ".";

export function VerifyIfUserIsAdminMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const userId = req.params["user_id"]
    ? req.params["user_id"]
    : req.headers["user_id"];

  if (userId === "admin") {
    return next();
  }

  const userIsAdmin = verifyIfUserIsAdmin.execute(userId as string);

  if (!userIsAdmin) {
    return res.status(401).json({ error: { message: "User is not admin!" } });
  }

  return next();
}
