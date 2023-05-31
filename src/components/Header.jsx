// import logo from "./img/fruits.png"

const Header = () => {
  return (
    <header>
      <img src="./img/fruits.png" alt="Fruits" className="logo__img" />
      <div className="logo-img">Fruit Boutique</div>
      <ul>
        <li>Головна</li>
        <li>Каталог</li>
        <li>Про нас</li>
        <li>Контакти</li>
      </ul>
    </header>
  );
};

export default Header;
