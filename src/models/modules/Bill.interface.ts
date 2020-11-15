import Product from './Product.interface'

export default interface Bill {
    client_id: number;
    product_details: Product[];
  }