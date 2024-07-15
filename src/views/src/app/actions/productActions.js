import axios from "axios";

export const PRODUCT_REQUEST = "PRODUCT_REQUEST";
export const PRODUCT_SUCCESS = "PRODUCT_SUCCESS";
export const PRODUCT_FAILURE = "PRODUCT_FAILURE";

export const FETCH_PRODUCT_REQUEST = "FETCH_PRODUCT_REQUEST";
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
export const FETCH_PRODUCT_FAILURE = "FETCH_PRODUCT_FAILURE";

export const DELETE_PRODUCT_REQUEST = "DELETE_PRODUCT_REQUEST";
export const DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS";
export const DELETE_PRODUCT_FAILURE = "DELETE_PRODUCT_FAILURE";

export const UPDATE_PRODUCT_REQUEST = "UPDATE_PRODUCT_REQUEST";
export const UPDATE_PRODUCT_SUCCESS = "UPDATE_PRODUCT_SUCCESS";
export const UPDATE_PRODUCT_FAILURE = "UPDATE_PRODUCT_FAILURE";

export const FETCH_PRODUCT_BY_ID_REQUEST = "FETCH_PRODUCT_BY_ID_REQUEST";
export const FETCH_PRODUCT_BY_ID_SUCCESS = "FETCH_PRODUCT_BY_ID_SUCCESS";
export const FETCH_PRODUCT_BY_ID_FAILURE = "FETCH_PRODUCT_BY_ID_FAILURE";

const requestAction = (type) => ({ type });
const successAction = (type, payload) => ({ type, payload });
const failureAction = (type, payload) => ({ type, payload });

// Create product functions
export const addProduct = (productData) => {
  return (dispatch) => {
    dispatch(requestAction(PRODUCT_REQUEST));
    axios
      .post("http://localhost:5454/api/create-product", productData)
      .then((response) => {
        dispatch(successAction(PRODUCT_SUCCESS, response.data.message));
      })
      .catch((error) => {
        dispatch(failureAction(PRODUCT_FAILURE, error.message));
      });
  };
};

// Fetch products data
export const fetchProduct = () => {
  return (dispatch) => {
    dispatch(requestAction(FETCH_PRODUCT_REQUEST));
    axios
      .get("http://localhost:5454/api/products")
      .then((response) => {
        dispatch(successAction(FETCH_PRODUCT_SUCCESS, response.data.data));
      })
      .catch((error) => {
        dispatch(failureAction(FETCH_PRODUCT_FAILURE, error.message));
      });
  };
};

// Delete product functions
export const deleteProduct = (id) => {
  return (dispatch) => {
    dispatch(requestAction(DELETE_PRODUCT_REQUEST));
    axios
      .delete(`http://localhost:5454/api/products/delete/${id}`)
      .then((response) => {
        dispatch(successAction(DELETE_PRODUCT_SUCCESS, response.data.message));
        
      })
      .catch((error) => {
        dispatch(failureAction(DELETE_PRODUCT_FAILURE, error.message));
      });
  };
};

// Update product functions
export const updateProduct = (id, productData) => {
  return (dispatch) => {
    dispatch(requestAction(UPDATE_PRODUCT_REQUEST));
    axios
      .put(`http://localhost:5454/api/update-products/${id}`, productData)
      .then((response) => {
        dispatch(successAction(UPDATE_PRODUCT_SUCCESS, response.data.message));
        alert(response.data.message);
      })
      .catch((error) => {
        dispatch(failureAction(UPDATE_PRODUCT_FAILURE, error.message));
      });
  };
};

export const viewProductById = (id) => {
  return (dispatch) => {
    dispatch(requestAction(FETCH_PRODUCT_BY_ID_REQUEST));
    axios
      .get(`http://localhost:5454/api/products/${id}`)
      .then((response) => {
        dispatch(
          successAction(FETCH_PRODUCT_BY_ID_SUCCESS, response.data.data)
        );
      })
      .catch((error) => {
        dispatch(failureAction(FETCH_PRODUCT_BY_ID_FAILURE, error.message));
      });
  };
};