import Order from './modules/Order.interface';
import Product from './modules/Product.interface';
import User from './modules/User.interface';

export default interface Action {
  type: string;
  payload?: null | boolean | number | Product | Product[] | User | Order | Order[];
}