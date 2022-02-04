import { MongoUsersRepository } from "@repositories/implementations/MongoUsersRepository";
import { CreateUserApiStrategy } from "./CreateUserApiStrategy";
import { CreateUserApiStrategyController } from "./CreateUserApiStrategyController";


const usersRepository = new MongoUsersRepository();
const createUserApiStrategy = new CreateUserApiStrategy(usersRepository);
const createUserApiController = new CreateUserApiStrategyController(createUserApiStrategy);

export { createUserApiStrategy, createUserApiController}