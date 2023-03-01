import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { VerifyIfUserIsAdmin } from "./verifyIfUserExistsService";

const userRepository = UsersRepository.getInstance();
export const verifyIfUserIsAdmin = new VerifyIfUserIsAdmin(userRepository);
