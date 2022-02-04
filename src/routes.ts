import { Router } from "express";
import { createUserController } from "@strategies/CreateUser"; 
import { RequestUseCaseController } from "@strategies/ApiUseCases/RequestsUseCase/RequestUseCaseController"; 
import { ordersDocumentController } from "@strategies/kruzer/KruzerGetOrderDocumentStrategy";

const router = Router()

router.all('/', (request, response) => {
  const requestUseCaseController = new RequestUseCaseController();
  return requestUseCaseController.handle(request,response);
});
router.all('/users', (request, response) => {
  return createUserController.handle( request, response );
});

/**
 * APIs  Kruzer
 * -----------
 * 
 */

/** #Consulta pedido na kruzer (mysql) por numero documento e retorna json
 * > GET: /kruzer/pedidosDocumento/${numero_documento_obrigatorio}/${numero_pedido_opicional}
 * @params documento, pedidoId
 * @returns
 */
router.all('/kruzer/pedidosDocumento/:documento/:pedidoId?', (request, response) => {  
  return ordersDocumentController.handle(request,response);
});

export { router }