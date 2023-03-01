import { NextFunction, Request, Response } from "express";
import { verifyIfEmailIsTakenService } from ".";

export function VerifyIfEmailIsTakenMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email } = req.body;

  const emailIsTaken = verifyIfEmailIsTakenService.execute(email as string);

  if (emailIsTaken) {
    return res
      .status(401)
      .json({ error: { message: "Email already exists!" } });
  }

  return next();
}
