import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(req: Request, res: Response) {
    const { name, email } = req.body;
    this.createUserUseCase.execute({ name, email });

    return res.status(201).send();
  }
}
