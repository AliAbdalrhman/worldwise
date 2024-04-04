import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { isAuthinticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthinticated) navigate("/");
    },
    [isAuthinticated, navigate]
  );
  return isAuthinticated ? children : null;
}

export default ProtectedRoute;
