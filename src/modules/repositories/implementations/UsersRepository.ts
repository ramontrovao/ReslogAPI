import { User } from "../../model/User";
import { ICreateUserDTO, IUserRepository } from "../IUserRepository";

export class UsersRepository implements IUserRepository {
  private users: User[];
  private static INSTANCE: UsersRepository;

  constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): void {
    const newUser = new User();

    Object.assign(newUser, {
      name,
      email,
    });

    this.users.push(newUser);
  }

  verifyIfIsAdmin(user_id: string): boolean {
    const userIsAdmin = this.users.some((user) => user.id === user_id);

    return userIsAdmin;
  }

  list() {
    return this.users;
  }
}
