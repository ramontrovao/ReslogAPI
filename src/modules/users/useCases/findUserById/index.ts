import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { FindUserByIdController } from "./findUserByIdController";
import { FindUserByUseCase } from "./findUserByIdUseCase";

const userRepository = UsersRepository.getInstance();
const findUserByIdUseCase = new FindUserByUseCase(userRepository);
export const findUserByIdController = new FindUserByIdController(
  findUserByIdUseCase
);
