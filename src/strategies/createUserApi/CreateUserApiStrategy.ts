import { IUsersRepository } from "@repositories/IUsersRepository";
import { ICreateUserApiRequestDTO } from "./CreateUserApiStrategyDTO";
import { User } from "@entities/User"; 
import { IMailProvider } from "@providers/IMailProvider";

export class CreateUserApiStrategy {
  constructor(
    private usersRepository: IUsersRepository
  ) {}

  async execute(data: ICreateUserApiRequestDTO) {

    const user = new User(data);
    
    const saved = await this.usersRepository.save(user); 

    return {response: saved}
  }
}