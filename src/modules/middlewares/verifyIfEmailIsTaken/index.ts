import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { VerifyIfEmailIsTakenService } from "./VerifyIfEmailIsTakenService";

const userRepository = UsersRepository.getInstance();
export const verifyIfEmailIsTakenService = new VerifyIfEmailIsTakenService(
  userRepository
);
