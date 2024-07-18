import {
  VOUCHER_REQUEST,
  VOUCHER_SUCCESS,
  VOUCHER_FAILURE,
  FETCH_VOUCHER_REQUEST,
  FETCH_VOUCHER_SUCCESS,
  FETCH_VOUCHER_FAILURE,
  // DELETE_VOUCHER_REQUEST,
  // DELETE_VOUCHER_SUCCESS,
  // DELETE_VOUCHER_FAILURE,
  UPDATE_VOUCHER_REQUEST,
  UPDATE_VOUCHER_SUCCESS,
  UPDATE_VOUCHER_FAILURE,
  FETCH_VOUCHER_BY_ID_REQUEST,
  FETCH_VOUCHER_BY_ID_SUCCESS,
  FETCH_VOUCHER_BY_ID_FAILURE,
} from "../actions/voucherActions";

const initialState = {
  loading: false,
  error: null,
  message: "",
  vouchers: [],
};

export const addVoucherReducer = (state = initialState, action) => {
  switch (action.type) {
    case VOUCHER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case VOUCHER_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: false,
        error: null,
      };
    case VOUCHER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const viewVouchers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VOUCHER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_VOUCHER_SUCCESS:
      return {
        ...state,
        loading: false,
        vouchers: action.payload,
        error: null,
      };
    case FETCH_VOUCHER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// export const deleteVocher = (state = initialState, action) => {
//   switch (action.type) {
//     case DELETE_VOUCHER_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case DELETE_VOUCHER_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         products: state.products.filter(
//           (product) => product.product_id !== action.payload.id
//         ),
//         error: null,
//       };
//     case DELETE_VOUCHER_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

export const updateVoucher = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_VOUCHER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_VOUCHER_SUCCESS:
      return {
        ...state,
        loading: false,
        vouchers: action.payload,
        error: null,
      };
    case UPDATE_VOUCHER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// get voucher by id

export const getvoucherByID = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VOUCHER_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_VOUCHER_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        vouchers: action.payload,
        error: null,
      };
    case FETCH_VOUCHER_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
