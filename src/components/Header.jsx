import logoImg from "../assets/logo.jpg";
import Button from "../UI/Button";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="logo" />
        <h1>React Food</h1>
      </div>
      <nav>
        <Button textOnly>Cart</Button>
      </nav>
    </header>
  );
}
