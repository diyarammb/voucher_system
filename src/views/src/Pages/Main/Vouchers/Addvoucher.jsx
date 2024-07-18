import Header from "../../Header/Header";
import SideBar from "../../Header/SideBar";
import { toast } from "react-toastify";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVouchers } from "../../../app/actions/voucherActions";

const Addvoucher = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.addvc);

  const [voucherData, setvoucherData] = useState({
    voucher_code: "",
    discount_type: "",
    discount_value: "",
    expiry_date: "",
    issue_date: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setvoucherData({ ...voucherData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(addVouchers(voucherData));
      clearForm();
      toast.success("Product Added Successfully");
    }
  };
  const validateForm = () => {
    if (!voucherData.voucher_code.trim()) {
      toast.error("voucher code  is required");
      return false;
    }
    if (!voucherData.discount_value.trim()) {
      toast.error("discount value is required");
      return false;
    }

    return true;
  };

  // clear form
  const clearForm = () => {
    setvoucherData({
      voucher_code: "",
      discount_type: "",
      discount_value: "",
      expiry_date: "",
      issue_date: "",
      status: "",
    });
  };

  return (
    <>
      <Header />
      <SideBar />
      <main id="main" className="main">
        <div className="pagetitle">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Create Voucher</h5>

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
                    <label htmlFor="floatingName">discount Type</label>
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
                      type="date"
                      className="form-control"
                      id="floatingName"
                      name="expiry_date"
                      value={voucherData.expiry_date}
                      onChange={handleChange}
                    />
                    <label htmlFor="floatingName">expiry date</label>
                  </div>
                </div>
                {/* category */}
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="date"
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
                    <label htmlFor="floatingSelect">status</label>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary m-2"
                      disabled={loading}
                    >
                      {loading ? "Adding..." : "Add voucher"}
                    </button>
                  </div>

                  {/* <button type="reset" className="btn btn-secondary">
                    Reset
                  </button> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Addvoucher;
