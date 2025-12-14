const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card shadow-sm" style={{ width: "18rem", borderRadius: "10px" }}>
      
      <img 
        src={img} 
        alt={name} 
        className="card-img-top"
        style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
      />

      <div className="card-body">

        {/* Nombre de la pizza */}
        <h5 className="card-title fw-bold">{name}</h5>

        {/* Ingredientes */}
        <p className="text-muted">
          Ingredientes: {ingredients.join(", ")}
        </p>

        {/* Precio */}
        <h6 className="fw-bold mb-3">
          ${price.toLocaleString("es-CL")}
        </h6>

        {/* Botones con separación */}
        <div className="d-flex gap-5">
          <button className="btn btn-dark">Añadir</button>

          <button
            className="btn"
            style={{
              background: "transparent",
              border: "1px solid #000",
              borderRadius: "6px",
              color: "black",
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
