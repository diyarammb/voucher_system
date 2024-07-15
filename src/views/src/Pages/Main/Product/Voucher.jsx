import Header from "../../Header/Header";
import SideBar from "../../Header/SideBar";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewProductById } from "../../../app/actions/productActions";
import { Link, useParams } from "react-router-dom";

const Voucher = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, products, error } = useSelector(
    (state) => state.viewProductById // make sure the reducer name matches
  );

  useEffect(() => {
    dispatch(viewProductById(id));
  }, [dispatch, id]);

  return (
    <>
      <Header />
      <SideBar />

      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Product Details</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="breadcrumb-item">Product</li>
            </ol>
          </nav>
        </div>
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  {loading && <p>Loading...</p>}
                  {error && <p>Error: {error}</p>}
                  {products && (
                    <div className="container mt-5">
                      <div className="row">
                        <div className="col-4 font-weight-bold">#ID:</div>
                        <div className="col-8 font-weight-bold">
                          {products.product_id}
                        </div>
                      </div>
                      <div className="row">
                        <hr />
                        <div className="col-4 font-weight-bold">
                          voucher_code
                        </div>
                        <div className="col-8 font-weight-bold">
                          {products.product_lookup_code}
                        </div>
                      </div>
                      <div className="row">
                        <hr />
                        <div className="col-4">discount_type</div>
                        <div className="col-8">{products.product_type}</div>
                      </div>
                      <div className="row">
                        <hr />
                        <div className="col-4">discount_value</div>
                        <div className="col-8">{products.description}</div>
                      </div>
                      <div className="row">
                        <hr />
                        <div className="col-4">expiry_date</div>
                        <div className="col-8">{products.product_name}</div>
                      </div>
                      <div className="row">
                        <hr />
                        <div className="col-4">issue_date</div>
                        <div className="col-8">{products.department}</div>
                      </div>
                      <div className="row">
                        <hr />
                        <div className="col-4">status</div>
                        <div className="col-8">{products.category}</div>
                      </div>
                      <div className="row">
                        <hr />
                        <div className="col-4">notes</div>
                        <div className="col-8">{products.price}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Voucher;
