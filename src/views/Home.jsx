import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import pizzas from "../data/pizzas";

function Home({ cart, setCart }) {
  return (
    <>
      <Header />

      <div className="container my-5">
        <div className="row">
          {pizzas.map((pizza) => (
            <div className="col-md-4 mb-4" key={pizza.id}>
              <CardPizza
                pizza={pizza}
                cart={cart}
                setCart={setCart}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
