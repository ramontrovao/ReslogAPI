import { User } from "../model/User";

export interface ICreateUserDTO {
  name: string;
  email: string;
}

export interface IUserRepository {
  create({ name, email }: ICreateUserDTO): void;
  get list(): User[];
  findUserById(user_id: string): User | undefined;
  verifyIfUserExists(user_id: string): boolean;
  set turnUserAdmin(user_id: string);
  verifyIfUserIsAdmin(user_id: string): boolean;
}
