import { UsersRepository } from "../../repositories/implementations/UsersRepository";

export class TurnUserAdminUseCase {
  constructor(private usersRepository: UsersRepository) {}

  execute(user_id: string) {
    this.usersRepository.turnUserAdmin = user_id;
  }
}
