import NavBar from "./NavBar";

function Header() {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h1>Whispering Moss</h1>
      <NavBar />
    </header>
  );
}

export default Header;