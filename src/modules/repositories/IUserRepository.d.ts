import { User } from "../model/User";

export interface ICreateUserDTO {
  name: string;
  email: string;
}

export interface IUserRepository {
  create({ name, email }: ICreateUserDTO): void;
  get list(): User[];
  verifyIfIsAdmin(user_id: string): boolean;
  findUserById(user_id: string): User | undefined;
  set turnUserAdmin(user_id: string);
}
