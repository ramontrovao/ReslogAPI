import { Request, Response } from "express";
import { TurnUserAdminUseCase } from "./turnUserAdminUseCase";

export class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(req: Request, res: Response) {
    const { user_id } = req.params;

    try {
      this.turnUserAdminUseCase.execute(user_id);

      return res.status(202).send();
    } catch {
      return res.status(400).send();
    }
  }
}
