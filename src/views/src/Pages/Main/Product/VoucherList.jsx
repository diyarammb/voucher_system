import Header from "../../Header/Header";
import SideBar from "../../Header/SideBar";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  fetchProduct,
  deleteProduct,
} from "../../../app/actions/productActions";
import { Link } from "react-router-dom";

const VoucherList = () => {
  const dispatch = useDispatch();

  const setState = (state) => ({
    loading: state.viewProduct.loading,
    message: state.deleteProduct.message,
    error: state.deleteProduct.error,
    products: state.viewProduct.products,
  });
  const { products, error, message } = useSelector(setState);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch, products]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (message) {
      toast.success(message);
    }
  });

  return (
    <>
      <Header />
      <SideBar />

      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Vouchers</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Dashboard</a>
              </li>
              <li className="breadcrumb-item">vouchers</li>
            </ol>
            <ol className="breadcrumb">
              <h5 className="card-title">
                {" "}
                <Link
                  className="btn btn-success text-white"
                  to="/create-product"
                >
                  Add
                </Link>
              </h5>
            </ol>
          </nav>
        </div>
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <table className="table datatable">
                    <thead>
                      <tr>
                        <th>voucher_code</th>
                        <th>discount_type</th>
                        <th>discount_value</th>
                        <th>expiry_date</th>
                        {/* <th>department</th> */}
                        <th>issue_date</th>
                        <th>status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr key={product.product_id}>
                          <td>{product.product_lookup_code}</td>
                          <td>{product.product_name}</td>
                          <td>{product.product_Type}</td>
                          <td>{product.description}</td>
                          <td>{product.category}</td>
                          <td>{product.price}</td>
                          <td>
                            <Link to={`/products/${product.product_id}`}>
                              <i className="bi bi-eye text-primary m-1"></i>
                            </Link>

                            <Link to={`/product/edit/${product.product_id}`}>
                              <i className="bi bi-pencil-square text-success m-1"></i>
                            </Link>
                            <span
                              onClick={() => handleDelete(product.product_id)}
                            >
                              <i className="bi bi-trash text-danger m-1"></i>
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default VoucherList;
