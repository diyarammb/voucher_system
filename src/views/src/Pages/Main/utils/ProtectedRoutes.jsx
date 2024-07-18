import { Outlet, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoutes = () => {
  const isLogged = Cookies.get("isLogged");
  console.log("user",isLogged)
  const user = isLogged;
  return user ? <Outlet /> : <Navigate to="/login" />;
};


export default ProtectedRoutes