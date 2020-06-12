import { Order } from './order.model';
import { OrderItem } from './order-item.model';

export interface OrderRequest{
    Order: Order;
    OrderItems: OrderItem[];
}