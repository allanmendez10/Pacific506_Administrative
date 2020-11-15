import Bill from "models/modules/Bill.interface";

export default interface BillState{
    orders: []
    loaded:false
    currentBill:null
    billError:null
}
