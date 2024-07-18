import { useState } from "react";
import { addUser } from "../../../app/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const { message, error } = useSelector((state) => state.userCreate);
  console.log(message, error);
  const [registe_data, formdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    formdata({ ...registe_data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(addUser(registe_data));
      clearForm();
      toast.success("Registration Successfully");
    }
  };

  const validateForm = () => {
    if (!registe_data.name.trim()) {
      toast.error("name is required");
      return false;
    }
    if (!registe_data.email.trim()) {
      toast.error("email is required");
      return false;
    }
    if (!registe_data.password.trim()) {
      toast.error("password is required");
      return false;
    }

    return true;
  };

  const clearForm = () => {
    formdata({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="row mt-4">
        <h5 className="text-center "> Register via Website</h5>
      </div>
      <div className="container mt-4">
        <div className="row ">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="card p-4 ">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control bg-light"
                    id="name"
                    placeholder="name"
                    name="name"
                    onChange={handleChange}
                    value={registe_data.name}
                  ></input>
                </div>
                {/* email */}
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control bg-light"
                    id="Email"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    value={registe_data.email}
                  ></input>
                </div>

                {/* password */}
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control bg-light"
                    id="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    value={registe_data.password}
                  ></input>
                </div>

                <div className="d-grid gap-2 col-4 mx-auto">
                  <button className="btn btn-dark rounded-pill" type="submit">
                    Sign Up
                  </button>
                  <Link to ='/login'>already Account</Link>
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

export default Register;
