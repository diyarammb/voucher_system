import axios from "axios";

export const VOUCHER_REQUEST = "VOUCHER_REQUEST";
export const VOUCHER_SUCCESS = "VOUCHER_SUCCESS";
export const VOUCHER_FAILURE = "VOUCHER_FAILURE";

export const FETCH_VOUCHER_REQUEST = "FETCH_VOUCHER_REQUEST";
export const FETCH_VOUCHER_SUCCESS = "FETCH_VOUCHER_SUCCESS";
export const FETCH_VOUCHER_FAILURE = "FETCH_VOUCHER_FAILURE";

// export const DELETE_VOUCHER_REQUEST = "DELETE_VOUCHER_REQUEST";
// export const DELETE_VOUCHER_SUCCESS = "DELETE_VOUCHER_SUCCESS";
// export const DELETE_VOUCHER_FAILURE = "DELETE_VOUCHER_FAILURE";

export const UPDATE_VOUCHER_REQUEST = "UPDATE_VOUCHER_REQUEST";
export const UPDATE_VOUCHER_SUCCESS = "UPDATE_VOUCHER_SUCCESS";
export const UPDATE_VOUCHER_FAILURE = "UPDATE_VOUCHER_FAILURE";

export const FETCH_VOUCHER_BY_ID_REQUEST = "FETCH_VOUCHER_BY_ID_REQUEST";
export const FETCH_VOUCHER_BY_ID_SUCCESS = "FETCH_VOUCHER_BY_ID_SUCCESS";
export const FETCH_VOUCHER_BY_ID_FAILURE = "FETCH_VOUCHER_BY_ID_FAILURE";

const requestAction = (type) => ({ type });
const successAction = (type, payload) => ({ type, payload });
const failureAction = (type, payload) => ({ type, payload });

// Create Vouchers functions
export const addVouchers = (voucherData) => {
  return (dispatch) => {
    dispatch(requestAction(VOUCHER_REQUEST));
    axios
      .post("http://localhost:3292/api/vouchers", voucherData)
      .then((response) => {
        dispatch(successAction(VOUCHER_SUCCESS, response.data.message));
      })
      .catch((error) => {
        dispatch(failureAction(VOUCHER_FAILURE, error.message));
      });
  };
};

// Fetch Vouchers data
export const fetchVouchers = () => {
  return (dispatch) => {
    dispatch(requestAction(FETCH_VOUCHER_REQUEST));
    axios
      .get("http://localhost:3292/api/vouchers")
      .then((response) => {
        dispatch(successAction(FETCH_VOUCHER_SUCCESS, response.data));
      })
      .catch((error) => {
        dispatch(failureAction(FETCH_VOUCHER_FAILURE, error.message));
      });
  };
};

// Delete voucher functions
// export const deleteProduct = (id) => {
//   return (dispatch) => {
//     dispatch(requestAction(DELETE_VOUCHER_REQUEST));
//     axios
//       .delete(`http://localhost:3292/api/products/delete/${id}`)
//       .then((response) => {
//         dispatch(successAction(DELETE_VOUCHER_SUCCESS, response.data.message));
//       })
//       .catch((error) => {
//         dispatch(failureAction(DELETE_VOUCHER_FAILURE, error.message));
//       });
//   };
// };

// // Update Vouchers functions
export const updateVoucher = (id, voucherData) => {
  return (dispatch) => {
    dispatch(requestAction(UPDATE_VOUCHER_REQUEST));
    axios
      .put(`http://localhost:3292/api/vouchers/${id}`, voucherData)
      .then((response) => {
        dispatch(successAction(UPDATE_VOUCHER_SUCCESS, response));
      })
      .catch((error) => {
        dispatch(failureAction(UPDATE_VOUCHER_FAILURE));
      });
  };
};

export const viewVoucherById = (id) => {
  return (dispatch) => {
    dispatch(requestAction(FETCH_VOUCHER_BY_ID_REQUEST));
    axios
      .get(`http://localhost:3292/api/vouchers/${id}`)
      .then((response) => {
        dispatch(successAction(FETCH_VOUCHER_BY_ID_SUCCESS, response.data));
      })
      .catch((error) => {
        dispatch(failureAction(FETCH_VOUCHER_BY_ID_FAILURE, error.message));
      });
  };
};
