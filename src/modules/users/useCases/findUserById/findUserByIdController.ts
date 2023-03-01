import { Request, Response } from "express";
import { FindUserByUseCase } from "./findUserByIdUseCase";

export class FindUserByIdController {
  constructor(private findUserByIdUseCase: FindUserByUseCase) {}

  handle(req: Request, res: Response) {
    const { user_id } = req.params;
    const userFound = this.findUserByIdUseCase.execute(user_id as string);

    return res.status(202).json(userFound);
  }
}
