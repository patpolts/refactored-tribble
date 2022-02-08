import { Router } from "express";
import { createUserController } from "@strategies/CreateUser"; 
import { RequestUseCaseController } from "@strategies/ApiUseCases/RequestsUseCase/RequestUseCaseController"; 
import { ordersDocumentController } from "@strategies/kruzer/KruzerGetOrderDocumentStrategy";
import { ordersIdPedidoController } from "@strategies/kruzer/KruzerGetOrderIdPedidoStrategy";
import { CreateUserApiStrategy } from "@strategies/createUserApi/CreateUserApiStrategy";
import {createUserApiController } from '@strategies/createUserApi';
import { MongoUsersRepository } from "@repositories/implementations/MongoUsersRepository";
const router = Router();

export const verifyToken = async (req,res,next) => {
  const token = req.headers['x-access-token'];
  if(!token){
    res.status(501).json({status: "unauthorize", message: "token inválido"}).end();
  }
  const usersRepository = new MongoUsersRepository();
  const checkToken = usersRepository.findByToken(token);
  checkToken ? next(): res.status(401).json({status: "error", message: "Erro inesperado"}).end();
}

router.all('/', (request, response) => {
  const requestUseCaseController = new RequestUseCaseController();
  return requestUseCaseController.handle(request,response);
});

router.all('/users',verifyToken, (request, response) => {
  return createUserApiController.handle( request, response );
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
router.all('/kruzer/pedidosDocumento/:documento',verifyToken, (request, response) => {  
  return ordersDocumentController.handle(request,response);
});

/** #Consulta pedido na kruzer (mysql) por numero documento e retorna json
 * > GET: /kruzer/pedidosDocumento/${numero_documento_obrigatorio}/${numero_pedido_opicional}
 * @params documento, pedidoId
 * @returns
 */
 router.all('/kruzer/pedidosDocumento/:documento/:idPedido?',verifyToken, (request, response) => {  
  return ordersIdPedidoController.handle(request,response);
});

export { router }