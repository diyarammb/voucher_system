import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../../Header/Header";
import SideBar from "../../Header/SideBar";
import {
  updateVoucher,
  viewVoucherById,
} from "../../../app/actions/voucherActions";
import { toast } from "react-toastify";
const Editvoucher = () => {
  const dispatch = useDispatch();
  const { loading, error, vouchers, message } = useSelector(
    (state) => state.getbyIdVc
  );
  console.log(vouchers);
  const { id } = useParams();
  // Initialize local state with empty strings or default values
  const [voucherData, setVoucherData] = useState({
    voucher_code: "",
    discount_type: "",
    discount_value: "",
    expiry_date: "",
    issue_date: "",
    status: "",
  });
  // Fetch product data when component mounts or id changes
  useEffect(() => {
    if (id) {
      dispatch(viewVoucherById(id));
    }
  }, [dispatch, id]);
  // Update local state with product data from Redux when it changes
  useEffect(() => {
    if (vouchers) {
      setVoucherData({
        voucher_code: vouchers.voucher_code || "",
        discount_type: vouchers.discount_type || "",
        discount_value: vouchers.discount_value || "",
        expiry_date: vouchers.expiry_date || "",
        issue_date: vouchers.issue_date || "",
        status: vouchers.status || "",
      });
    }
  }, [vouchers]);

  // Handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVoucherData({ ...voucherData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateVoucher(id, voucherData));
    toast.success("voucher updated");
  };

  return (
    <>
      <Header />
      <SideBar />
      <main id="main" className="main">
        <div className="pagetitle">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">update Voucher {id}</h5>

              <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingName"
                      name="voucher_code"
                      value={voucherData.voucher_code}
                      onChange={handleChange}
                    />
                    <label htmlFor="floatingName">voucher code</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingName"
                      name="discount_type"
                      value={voucherData.discount_type}
                      onChange={handleChange}
                    />
                    <label htmlFor="floatingName">idiscount type</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingName"
                      name="discount_value"
                      value={voucherData.discount_value}
                      onChange={handleChange}
                    />
                    <label htmlFor="floatingName">discount value</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingName"
                      name="expiry_date"
                      value={voucherData.expiry_date}
                      onChange={handleChange}
                    />
                    <label htmlFor="floatingName">expiry_date</label>
                  </div>
                </div>
                {/* category */}
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingSelect"
                      name="issue_date"
                      value={voucherData.issue_date}
                      onChange={handleChange}
                    />
                    <label htmlFor="floatingSelect">issue date</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingSelect"
                      name="status"
                      value={voucherData.status}
                      onChange={handleChange}
                    />
                    <label htmlFor="floatingSelect">Status</label>
                  </div>
                </div>

                <div className="">
                  <div className="">
                    <button
                      type="submit"
                      className="btn btn-primary "
                      disabled={loading}
                    >
                      {loading ? "Adding..." : "update Voucher"}
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
