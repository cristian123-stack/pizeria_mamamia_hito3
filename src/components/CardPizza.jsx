const CardPizza = ({ pizza, cart, setCart }) => {
  const { id, name, price, ingredients, img } = pizza;

  const addToCart = () => {
    const exists = cart.find(item => item.id === id);

    if (exists) {
      setCart(
        cart.map(item =>
          item.id === id
            ? { ...item, count: item.count + 1 }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id,
          name,
          price,
          img,
          count: 1,
        },
      ]);
    }
  };

  return (
    <div className="card shadow-sm" style={{ width: "18rem", borderRadius: "10px" }}>
      <img
        src={img}
        alt={name}
        className="card-img-top"
        style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
      />

      <div className="card-body">
        <h5 className="card-title fw-bold">{name}</h5>

        <p className="text-muted mb-1">Ingredientes:</p>
        <ul className="text-muted">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h6 className="fw-bold mb-3">
          ${price.toLocaleString("es-CL")}
        </h6>

        <div className="d-flex gap-3">
          <button className="btn btn-dark" onClick={addToCart}>
            Añadir
          </button>

          <button
            className="btn"
            style={{
              background: "transparent",
              border: "1px solid #000",
              borderRadius: "6px",
            }}
          >
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
