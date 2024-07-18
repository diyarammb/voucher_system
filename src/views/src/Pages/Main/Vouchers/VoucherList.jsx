import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { fetchVouchers } from "../../../app/actions/voucherActions";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import SideBar from "../../Header/SideBar";

const VoucherList = () => {
  const dispatch = useDispatch();
  const { vouchers, error, message } = useSelector((state) => state.viewvc);

  useEffect(() => {
    dispatch(fetchVouchers());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (message) {
      toast.success(message);
    }
  }, [error, message]);

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
          </nav>
          <h5 className="card-title">
            <Link className="btn btn-success text-white" to="/add/voucher">
              Add
            </Link>
          </h5>
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
                        <th>issue_date</th>
                        <th>status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {vouchers.map((voucher) => (
                        <tr key={voucher.voucher_id}>
                          <td>{voucher.voucher_code}</td>
                          <td>{voucher.discount_type}</td>
                          <td>{voucher.discount_value}</td>
                          <td>
                            {new Date(voucher.expiry_date).toLocaleDateString()}
                          </td>
                          <td>
                            {new Date(voucher.issue_date).toLocaleDateString()}
                          </td>
                          <td>{voucher.status}</td>
                          <td>
                            <Link to={`/voucher/${voucher.voucher_id}`}>
                              <i className="bi bi-eye text-primary m-1"></i>
                            </Link>
                            <Link to={`/voucher/edit/${voucher.voucher_id}`}>
                              <i className="bi bi-pencil-square text-success m-1"></i>
                            </Link>
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
