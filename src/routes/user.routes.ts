import { Router } from "express";
import { createUserController } from "../modules/useCases/createUser";
import { listUsersController } from "../modules/useCases/listUsers";

export const userRouter = Router();

userRouter.post("/", (req, res) => {
  return createUserController.handle(req, res);
});

userRouter.get("/", (req, res) => {
  return listUsersController.handle(req, res);
});
