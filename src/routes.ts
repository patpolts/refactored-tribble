import { Router } from "express";
import { createUserController } from "@strategies/CreateUser"; 
import { RequestUseCaseController } from "@strategies/ApiUseCases/RequestsUseCase/RequestUseCaseController";

const router = Router()

router.all('/', (request, response) => {
  const requestUseCaseController = new RequestUseCaseController();
  return requestUseCaseController.handle(request,response);
});
router.all('/users', (request, response) => {
  return createUserController.handle( request, response );
});

export { router }