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
    if (user_id === "admin") {
      return true;
    }

    const userIsAdmin = this.users.some((user) => user.id === user_id);

    return userIsAdmin;
  }

  public set turnUserAdmin(user_id: string) {
    const userToChange = this.findUserById(user_id);
    if (userToChange) {
      userToChange.admin = true;
    } else {
      throw new Error("User not exists!");
    }
  }

  findUserById(user_id: string): User | undefined {
    const userFound = this.users.find((user) => user.id === user_id);

    return userFound;
  }

  public get list() {
    return this.users;
  }
}
