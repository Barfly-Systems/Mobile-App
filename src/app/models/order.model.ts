import { Item } from "./item.model";
import { OrderError } from  "./order-error.model";
import { GroupedArray } from './GroupedArray';

export interface Order {
    Id: number;
    OrganisationId: number;
    TableId: number;
    Cost: number;
    Received: Date | string;
    Delivered: Date | string | null;
    OrderStatusId: number | null;
}