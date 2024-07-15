import { combineReducers } from "redux";

import {
  viewProduct,
  productReducer,
  deleteProduct,
  updateProduct,
  getProductByID,
} from "./productReducer";

import { createUserReducer, userLoginReducer } from "./userReducer";

const rootReducer = combineReducers({
  // user section
  userCreate: createUserReducer,
  userLogin: userLoginReducer,

  // productReducer
  product: productReducer,
  viewProduct: viewProduct,
  viewProductById: getProductByID,
  deleteProduct: deleteProduct,
  editProduct: updateProduct,
});

export default rootReducer;
