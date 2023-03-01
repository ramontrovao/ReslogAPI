import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { IVerifyIfUserIsAdminService } from "./IVerifyIfUserIsAdminService";

export class VerifyIfUserIsAdmin implements IVerifyIfUserIsAdminService {
  constructor(private UserRepository: UsersRepository) {}

  execute(user_id: string) {
    const userExists = this.UserRepository.verifyIfUserIsAdmin(user_id);

    return userExists;
  }
}
