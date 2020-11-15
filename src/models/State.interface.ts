import BillState from "./states/BillState.interface";
import ProductState from "./states/ProductState.interface";
import UserState from "./states/UserState.interface";

export default interface State {
    products: ProductState
    user: UserState
    orders: BillState
}