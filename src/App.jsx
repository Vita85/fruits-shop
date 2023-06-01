import Header from "./components/Header";
import FruitItem from "./components/FruitItem";
import fruitsData from "./data/fruitsData";

function App() {

  return (
    <div className="App">
      <Header />
      <div className="products-container">
        {fruitsData.map((fruit) => {
          return (
            <FruitItem {...fruit} key={fruit.id}/>
          );
        })}
      </div>
    </div>
  );
}

export default App;
