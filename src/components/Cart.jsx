// src/components/Cart.jsx
const Cart = ({ cart, setCart }) => {

  const increase = (id) => {
    setCart(
      cart.map(pizza =>
        pizza.id === id
          ? { ...pizza, count: pizza.count + 1 }
          : pizza
      )
    );
  };

  const decrease = (id) => {
    setCart(
      cart
        .map(pizza =>
          pizza.id === id
            ? { ...pizza, count: pizza.count - 1 }
            : pizza
        )
        .filter(pizza => pizza.count > 0)
    );
  };

  const total = cart.reduce(
    (sum, pizza) => sum + pizza.price * pizza.count,
    0
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-4">🛒 Carrito de compras</h2>

      {cart.map(pizza => (
        pizza.count > 0 && (
          <div
            key={pizza.id}
            className="d-flex align-items-center justify-content-between border-bottom py-3"
          >
            <div className="d-flex align-items-center gap-3">
              <img src={pizza.img} alt={pizza.name} width="70" />
              <strong>{pizza.name}</strong>
            </div>

            <div className="d-flex align-items-center gap-3">
              <button
                className="btn btn-danger btn-sm"
                onClick={() => decrease(pizza.id)}
              >
                -
              </button>

              <span>{pizza.count}</span>

              <button
                className="btn btn-success btn-sm"
                onClick={() => increase(pizza.id)}
              >
                +
              </button>
            </div>

            <strong>
              ${(pizza.price * pizza.count).toLocaleString("es-CL")}
            </strong>
          </div>
        )
      ))}

      <h4 className="mt-4">
        Total: ${total.toLocaleString("es-CL")}
      </h4>

      <button className="btn btn-dark mt-3">
        Pagar
      </button>
    </div>
  );
};

export default Cart;
