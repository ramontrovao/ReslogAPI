import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { CreateUserController } from "./createUserController";
import { CreateUserUseCase } from "./createUserUseCase";

const usersRepository = UsersRepository.getInstance();
const createUserUseCase = new CreateUserUseCase(usersRepository);
export const createUserController = new CreateUserController(createUserUseCase);
