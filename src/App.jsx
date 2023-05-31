import Header from "./components/Header";
import FruitItem from "./components/FruitItem";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="products-container">
        <FruitItem
          promo={"Хіт"}
          img={"Pineapple"}
          article={"3245"}
          title={"Ананас стиглий солодкий Sweet Gold 1шт"}
          price={"325.00"}
        />
        <FruitItem
          promo={"Знижка -20%"}
          img={"Apple"}
          article={"0123"}
          title={"Яблуко червоне Україна Golden 1кг"}
          price={"25.00"}
        />
        <FruitItem
          promo={"Новинка"}
          img={"Plum"}
          article={"0956"}
          title={"Слива рожева Іспанія 450гр"}
          price={"105.00"}
        />
        <FruitItem
          promo={"Хіт"}
          img={"Banana"}
          article={"4001"}
          title={"Банан Sweet Gold 1кг"}
          price={"75.00"}
        />
        <FruitItem
          promo={"Хіт"}
          img={"Kiwi"}
          article={"3609"}
          title={"Ківі 1кг"}
          price={"125.00"}
        />
        <FruitItem
          promo={"Знижка -10%"}
          img={"Pear"}
          article={"3256"}
          title={"Груша Конференція 1кг"}
          price={"112.00"}
        />
        <FruitItem
          promo={"Хіт"}
          img={"Peach"}
          article={"2456"}
          title={"Персик 1кг"}
          price={"325.00"}
        />
        <FruitItem
          promo={"Новинка"}
          img={"Grapes"}
          article={"0034"}
          title={"Виноград солодкий білий Іспанія 500гр"}
          price={"85.00"}
        />
        <FruitItem
          promo={"Хіт"}
          img={"Strawberry"}
          article={"32456"}
          title={"Полуниця солодка Польща 300гр"}
          price={"45.00"}
        />
      </div>
    </div>
  );
}

export default App;
