import { UsersRepository } from "../../repositories/implementations/UsersRepository";

export class ListUsersUseCase {
  constructor(private usersRepository: UsersRepository) {}

  execute(user_id: string) {
    const userIsAdmin = this.usersRepository.verifyIfIsAdmin(user_id);
    const allCategories = this.usersRepository.list();

    if (userIsAdmin) {
      return allCategories;
    }

    throw new Error("Not allowed. You are not an admin!");
  }
}
