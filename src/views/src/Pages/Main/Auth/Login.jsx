import { useState } from "react";
import { userLogin } from "../../../app/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { message, error, loading } = useSelector((state) => state.userLogin);
  const [login_data, setLoginData] = useState({ email: "", password: "" });
  console.log(message, error);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...login_data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(userLogin(login_data, navigate));
      toast.success("User logged in successfully");
    }
  };

  const validateForm = () => {
    if (!login_data.email.trim()) {
      toast.error("Email is required");
      return false;
    }
    if (!login_data.password.trim()) {
      toast.error("Password is required");
      return false;
    }

    return true;
  };

  return (
    <>
      <div className="row mt-4">
        <h5 className="text-center">Login Client Admin</h5>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="card p-4">
              <form onSubmit={handleSubmit}>
                {/* email */}
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control bg-light"
                    id="Email"
                    placeholder="Email"
                    name="email"
                    value={login_data.email}
                    onChange={handleChange}
                  />
                </div>

                {/* password */}
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control bg-light"
                    id="password"
                    placeholder="Password"
                    name="password"
                    value={login_data.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-grid gap-2 col-4 mx-auto">
                  <button type="submit" className="btn btn-dark rounded-pill">
                    {loading ? "loging..." : "Login"}
                  </button>
                  <Link to ='/register'>create account</Link>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
};

export default Login;