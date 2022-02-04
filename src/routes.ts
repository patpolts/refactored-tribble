import { Router } from "express";
import { createUserController } from "@strategies/CreateUser"; 
import { RequestUseCaseController } from "@strategies/ApiUseCases/RequestsUseCase/RequestUseCaseController";
import { ConsultaPedidoController } from "@strategies/kruzer/consultaPedido"
import  {GetPedidosController}  from "@strategies/kruzer/getPedidos/GetPedidosController"; 

const router = Router()

router.all('/', (request, response) => {
  const requestUseCaseController = new RequestUseCaseController();
  return requestUseCaseController.handle(request,response);
});
router.all('/users', (request, response) => {
  return createUserController.handle( request, response );
});
router.all('/document/:document', (request, response) => {
  const consult = new  ConsultaPedidoController();

  return consult.handle( request, response );
});

router.all('/kruzer/pedidos/document/:document', (request, response) => {  
  const crtl = new GetPedidosController();
  return GetPedidosController.handle(request,response);
});

export { router }