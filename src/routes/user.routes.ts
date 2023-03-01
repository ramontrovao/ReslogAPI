import { Router } from "express";
import { VerifyIfEmailIsTakenMiddleware } from "../modules/middlewares/verifyIfEmailIsTaken/verifyIfEmailIsTakenMiddleware";
import { VerifyIfUserExistsMiddleware } from "../modules/middlewares/verifyIfUserExists/verifyIfUserExistsMiddleware";
import { VerifyIfUserIsAdminMiddleware } from "../modules/middlewares/verifyIfUserIsAdmin/verifyIfUserExistsMiddleware";
import { createUserController } from "../modules/useCases/createUser";
import { findUserByIdController } from "../modules/useCases/findUserById";
import { listUsersController } from "../modules/useCases/listUsers";
import { turnUserAdminController } from "../modules/useCases/turnUserAdmin";

export const userRouter = Router();

userRouter.post("/", VerifyIfEmailIsTakenMiddleware, (req, res) => {
  return createUserController.handle(req, res);
});

userRouter.patch(
  "/:user_id/admin",
  VerifyIfUserExistsMiddleware,
  (req, res) => {
    return turnUserAdminController.handle(req, res);
  }
);

userRouter.get("/:user_id", VerifyIfUserExistsMiddleware, (req, res) => {
  return findUserByIdController.handle(req, res);
});

userRouter.get(
  "/",
  VerifyIfUserExistsMiddleware,
  VerifyIfUserIsAdminMiddleware,
  (req, res) => {
    return listUsersController.handle(req, res);
  }
);
