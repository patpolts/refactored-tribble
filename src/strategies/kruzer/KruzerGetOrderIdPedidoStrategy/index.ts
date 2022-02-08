 
import { MysqlKruzerPedidos } from "@repositories/implementations/MysqlKruzerOrdersRepository";
import { KruzerGetOrderIdPedidoStrategy } from "./KruzerGetOrderIdPedidoStrategy";
import { KruzerGetOrderIdPedidoStrategyController } from "./KruzerGetOrderIdPedidoStrategyController";

const ordersRepository = new MysqlKruzerPedidos();
const ordersIdPedidoStrategy = new KruzerGetOrderIdPedidoStrategy(ordersRepository);
const ordersIdPedidoController = new KruzerGetOrderIdPedidoStrategyController(ordersIdPedidoStrategy);

export { ordersIdPedidoStrategy, ordersIdPedidoController };