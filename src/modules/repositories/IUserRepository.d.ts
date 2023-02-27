import { User } from "../model/User";

export interface ICreateUserDTO {
  name: string;
  email: string;
}

export interface IUserRepository {
  create({ name, email }: ICreateUserDTO): void;
  list(): User[];
  verifyIfIsAdmin(user_id: string): boolean;
}
