import { Router } from "express";
import { createUserController } from "../modules/useCases/createUser";
import { findUserByIdController } from "../modules/useCases/findUserById";
import { listUsersController } from "../modules/useCases/listUsers";
import { turnUserAdminController } from "../modules/useCases/turnUserAdmin";

export const userRouter = Router();

userRouter.post("/", (req, res) => {
  return createUserController.handle(req, res);
});

userRouter.patch("/:user_id/admin", (req, res) => {
  return turnUserAdminController.handle(req, res);
});

userRouter.get("/:user_id", (req, res) => {
  return findUserByIdController.handle(req, res);
});

userRouter.get("/", (req, res) => {
  return listUsersController.handle(req, res);
});
