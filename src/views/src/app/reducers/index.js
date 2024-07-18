import { combineReducers } from "redux";

import { addVoucherReducer, viewVouchers,getvoucherByID ,updateVoucher} from "./voucherReducer";
import { createUserReducer, userLoginReducer } from "./userReducer";

const rootReducer = combineReducers({
  // user section
  userCreate: createUserReducer,
  userLogin: userLoginReducer,

  // productReducer
  addvc: addVoucherReducer,
  viewvc: viewVouchers,
  getbyIdVc:getvoucherByID,
  updateVc:updateVoucher
});

export default rootReducer;
