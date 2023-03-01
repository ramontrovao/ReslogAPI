import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { VerifyIfUserExistsService } from "./verifyIfUserExistsService";

const userRepository = UsersRepository.getInstance();
export const verifyIfUserExistsService = new VerifyIfUserExistsService(
  userRepository
);
