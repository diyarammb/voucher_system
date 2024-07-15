import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../../Header/Header";
import SideBar from "../../Header/SideBar";
import {
  updateProduct,
  viewProductById,
} from "../../../app/actions/productActions";

const Editvoucher = () => {
  const dispatch = useDispatch();
  const { loading, error, products, message } = useSelector(
    (state) => state.viewProductById
  );
  const { id } = useParams();

  // Initialize local state with empty strings or default values
  const [productData, setProductData] = useState({
    voucher_code: "",
    discount_type: "",
    discount_value: "",
    expiry_date: "",
    issue_date: "",
    status: "",
    notes: "",
  });

  // Fetch product data when component mounts or id changes
  useEffect(() => {
    if (id) {
      dispatch(viewProductById(id));
    }
  }, [dispatch, id]);

  // Update local state with product data from Redux when it changes
  useEffect(() => {
    if (products) {
      setProductData({
        voucher_code: products.voucher_code || "",
        discount_type: products.discount_type || "",
        discount_value: products.discount_value || "",
        expiry_date: products.expiry_date || "",
        issue_date: products.issue_date || "",
        status: products.status || "",
        notes: products.notes || "",
      });
    }
  }, [products]);

  // Handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(id, productData));
  };

  return (
    <>
      <Header />
      <SideBar />
      <main id="main" className="main">
        <div className="pagetitle">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">update Product {id}</h5>

              <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingName"
                      name="product_lookup_code"
                      value={productData.product_lookup_code}
                      onChange={handleChange}
                    />
                    <label htmlFor="floatingName">item Lookup Code</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingName"
                      name="product_type"
                      value={productData.product_type}
                      onChange={handleChange}
                    />
                    <label htmlFor="floatingName">item Type</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingName"
                      name="product_name"
                      value={productData.product_name}
                      onChange={handleChange}
                    />
                    <label htmlFor="floatingName">Product Name</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingName"
                      name="description"
                      value={productData.description}
                      onChange={handleChange}
                    />
                    <label htmlFor="floatingName">Description</label>
                  </div>
                </div>
                {/* category */}
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingSelect"
                      name="category"
                      value={productData.category}
                      onChange={handleChange}
                    />
                    <label htmlFor="floatingSelect">Category</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingSelect"
                      name="department"
                      value={productData.department}
                      onChange={handleChange}
                    />
                    <label htmlFor="floatingSelect">Department</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingPrice"
                      name="price"
                      value={productData.price}
                      onChange={handleChange}
                    />
                    <label htmlFor="floatingPrice">Price</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingcost"
                      name="cost"
                      value={productData.cost}
                      onChange={handleChange}
                    />
                    <label htmlFor="floatingcost">cost</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <select
                      className="form-select"
                      id="floatingSelect"
                      name="barcode"
                      value={productData.barcode}
                      onChange={handleChange}
                    >
                      <option value="">None</option>
                      <option value="None">None</option>
                      <option value="barcode">barcode</option>
                    </select>
                    <label htmlFor="floatingSelect">Barcode</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <select
                      className="form-select"
                      id="floatingSelect"
                      name="returnType"
                      value={productData.returnType}
                      onChange={handleChange}
                    >
                      <option value="">Select Return Type</option>
                      <option value="refundable">Refundable</option>
                      <option value="returnable">Returnable</option>
                    </select>
                    <label htmlFor="floatingSelect">Return Type</label>
                  </div>
                </div>

                <div className="">
                  <div className="">
                    <button
                      type="submit"
                      className="btn btn-primary "
                      disabled={loading}
                    >
                      {loading ? "Adding..." : "update Product"}
                    </button>
                  </div>
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                {message && (
                  <div className="alert alert-success">{message}</div>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Editvoucher;
