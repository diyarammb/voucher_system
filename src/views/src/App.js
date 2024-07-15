import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./assets/css/style.css";
import "./assets/css/font.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/quill/quill.snow.css";
import "./assets/vendor/quill/quill.bubble.css";
import "./assets/vendor/remixicon/remixicon.css";
import "./assets/vendor/simple-datatables/style.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./Pages/Main/Home";
import Register from "./Pages/Main/Auth/Register";
import Login from "./Pages/Main/Auth/Login";
import NotFound from "./Pages/NotFound";

import VoucherList from "./Pages/Main/Product/VoucherList";
import Product from "./Pages/Main/Product/Voucher";
import Addvoucher from "./Pages/Main/Product/Addvoucher";
import Editvoucher from "./Pages/Main/Product/Editvoucher";
import ProtectedRoutes from "./Pages/Main/utils/ProtectedRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="*" element={<NotFound />} />
          <Route path="/dashboard" element={<Home />} />
          {/* auth part */}

          {/* Group part */}

          {/* product Route start */}
          <Route path="/vouchers" element={<VoucherList />} />
          <Route path="/add/voucher" element={<Addvoucher />} />
          <Route path="/voucher/edit/:id" element={<Editvoucher />} />
          <Route path="/voucher/:id" element={<Product />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
