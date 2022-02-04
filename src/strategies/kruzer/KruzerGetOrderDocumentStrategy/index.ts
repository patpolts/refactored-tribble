 
import { MysqlKruzerPedidos } from "@repositories/implementations/MysqlKruzerOrdersRepository";
import { KruzerGetOrderDocumentStrategy } from "./KruzerGetOrderDocumentStrategy";
import { KruzerGetOrderDocumentStrategyController } from "./KruzerGetOrderDocumentStrategyController";

const ordersRepository = new MysqlKruzerPedidos();
const ordersDocumentStrategy = new KruzerGetOrderDocumentStrategy(ordersRepository);
const ordersDocumentController = new KruzerGetOrderDocumentStrategyController(ordersDocumentStrategy);

export { ordersDocumentStrategy, ordersDocumentController };