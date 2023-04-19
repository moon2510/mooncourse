import { Navigate } from "react-router-dom";

export const PrivateRoute = (Component) => {
  const firstLogin = localStorage.getItem("checkLogin");
  return firstLogin ? Component : <Navigate to="/login" replace />;
};
