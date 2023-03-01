import { User } from "../../model/User";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

export class FindUserByUseCase {
  constructor(private usersRepository: UsersRepository) {}

  execute(user_id: string): User | undefined {
    const userFound = this.usersRepository.findUserById(user_id);

    return userFound;
  }
}
