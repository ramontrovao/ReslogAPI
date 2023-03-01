import { UsersRepository } from "../../repositories/implementations/UsersRepository";

interface IRequest {
  name: string;
  email: string;
}

export class CreateUserUseCase {
  constructor(private userRepository: UsersRepository) {}

  execute({ name, email }: IRequest) {
    this.userRepository.create({ name, email });
  }
}
