import User from "models/modules/User.interface";

export default interface UserState{
    user: User | null
    is_logged:false
    userError:null
}