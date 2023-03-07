import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/authContext";
const PrivateRoutes = () => {
  const authCtx = useContext(AuthContext);
  return authCtx.isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
