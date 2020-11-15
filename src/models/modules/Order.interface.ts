import Bill from './Bill.interface'
import Client from './Client.interface'

export default interface Order {
    id: number;
    bills: Bill;
    client: Client;
    date:string
  }