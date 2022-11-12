import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import SignUp from "./sign_up/SignUp";
import Login from "./Components/log_in/Login";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
