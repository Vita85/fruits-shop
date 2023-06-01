import ItemBtn from "./ItemBtn";
function FruitItem({ promo, article, title, price, img }) {
  return (
    <div className="item">
      <p className="ribbon">{promo}</p>
      <img src={`./img/${img}.png`} alt="Pineapple" />
      <span>Артикул: {article}</span>
      <h2>{title}</h2>
      <b>{price} <span className="italic">грн</span></b>
      <ItemBtn/>
    </div>
  );
}
export default FruitItem;
