import { Request, Response } from "express";
import { ListUsersUseCase } from "./listUsersUseCase";

export class ListUsersController {
  constructor(private listUsersUseCase: ListUsersUseCase) {}

  handle(req: Request, res: Response) {
    const { user_id } = req.headers;

    try {
      const allUsers = this.listUsersUseCase.execute(user_id as string);

      return res.status(202).json(allUsers);
    } catch {
      return res.status(401).send();
    }
  }
}
