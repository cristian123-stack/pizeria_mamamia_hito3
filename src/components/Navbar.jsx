import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cart }) => {
  const [token, setToken] = useState(false);

  const total = cart.reduce(
    (sum, pizza) => sum + pizza.price * pizza.count,
    0
  );

  const totalItems = cart.reduce(
    (sum, pizza) => sum + pizza.count,
    0
  );

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

            <button
              className="btn"
              style={btnStyle}
              onClick={() => setToken(false)}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn" style={btnStyle}>
              Login
            </Link>

            <Link to="/register" className="btn" style={btnStyle}>
              Register
            </Link>
          </>
        )}
      </div>

      {/* CARRITO AL EXTREMO DERECHO */}
      <div className="ms-auto">
        <Link to="/cart" className="btn" style={btnStyle}>
          🛒 {totalItems} | ${total.toLocaleString("es-CL")}
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;
