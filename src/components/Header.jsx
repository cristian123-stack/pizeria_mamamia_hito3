const Header = () => {
  const headerStyle = {
    backgroundImage: "url('/header-pizza.jpg')",
    backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/header-pizza.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "120px 20px",
    color: "white",
    textShadow: "2px 2px 5px black",
    textAlign: "center",
  };

  return (
    <header style={headerStyle}>
      <h1>Pizzería Mamma Mia</h1>
      <p>"La mejor pizza artesanal hecha con ingredientes frescos y mucho cariño."</p>
    </header>
  );
};

export default Header;
