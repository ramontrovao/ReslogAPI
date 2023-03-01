import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { IVerifyIfEmailisTakenService } from "./IVerifyIfEmailisTakenService";

export class VerifyIfEmailIsTakenService
  implements IVerifyIfEmailisTakenService
{
  constructor(private UserRepository: UsersRepository) {}

  execute(user_email: string) {
    const emailIsTaken =
      this.UserRepository.emailIsAlreadyRegistered(user_email);

    return emailIsTaken;
  }
}
