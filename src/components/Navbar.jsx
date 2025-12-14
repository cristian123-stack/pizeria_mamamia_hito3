import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [token, setToken] = useState(false);
  const total = 25000;
  const navigate = useNavigate();

  const handleLogin = () => setToken(true);
  const handleLogout = () => setToken(false);

  const btnStyle = {
    background: "transparent",
    border: "1px solid white",
    color: "white",
    borderRadius: "8px",
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark px-3 d-flex align-items-center">

      {/* TÍTULO */}
      <span className="navbar-brand text-white me-4 fw-bold">
        Pizzería Mamma Mia
      </span>

      {/* HOME */}
      <Link to="/" className="btn me-2" style={btnStyle}>
        Home
      </Link>

      {/* LOGIN / REGISTER / PROFILE / LOGOUT */}
      <div className="d-flex gap-2">
        {token ? (
          <>
            <button className="btn" style={btnStyle}>
              Profile
            </button>

            <button className="btn" style={btnStyle} onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn" style={btnStyle}>
              Login
            </Link>

            <button
              className="btn"
              style={btnStyle}
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </>
        )}
      </div>

      {/* TOTAL AL EXTREMO DERECHO */}
      <div className="ms-auto">
        <button className="btn" style={btnStyle}>
          Total: ${total.toLocaleString("es-CL")}
        </button>
      </div>

    </nav>
  );
};

export default Navbar;
