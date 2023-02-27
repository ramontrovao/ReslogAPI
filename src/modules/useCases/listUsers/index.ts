import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { ListUsersController } from "./listUsersController";
import { ListUsersUseCase } from "./listUsersUseCase";

const usersRepository = UsersRepository.getInstance();
const listUsersUseCase = new ListUsersUseCase(usersRepository);
export const listUsersController = new ListUsersController(listUsersUseCase);
