import { UsersRepository } from "../../repositories/implementations/UsersRepository";

export class ListUsersUseCase {
  constructor(private usersRepository: UsersRepository) {}

  execute(user_id: string) {
    const allCategories = this.usersRepository.list;

    return allCategories;
  }
}
