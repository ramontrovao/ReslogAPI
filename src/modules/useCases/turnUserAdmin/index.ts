import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { TurnUserAdminController } from "./turnUserAdminController";
import { TurnUserAdminUseCase } from "./turnUserAdminUseCase";

const userRepository = UsersRepository.getInstance();
const turnUserAdminUseCase = new TurnUserAdminUseCase(userRepository);
export const turnUserAdminController = new TurnUserAdminController(
  turnUserAdminUseCase
);
