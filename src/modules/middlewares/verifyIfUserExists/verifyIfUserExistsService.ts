import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { IVerifyUserService } from "./IVerifyUserService";

export class VerifyIfUserExistsService implements IVerifyUserService {
  constructor(private UserRepository: UsersRepository) {}

  execute(user_id: string) {
    const userExists = this.UserRepository.verifyIfUserExists(user_id);

    return userExists;
  }
}
