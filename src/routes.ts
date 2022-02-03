import { Router } from "express";
import { createUserController } from "@strategies/CreateUser";

const router = Router()

router.all('/users', (request, response) => {
  return createUserController.handle( request, response );
});

export { router }