import CartItem from "./CartItem";

export default function CartList({ food, handleAdd }) {
  console.log(food);
  return (
    <div style={{ height: "80%", margin: "1rem" }}>
      {food.map((el) => (
        <CartItem
          key={el.id}
          id={el.id}
          foodname={el.FoodName}
          url={el.url}
          amount={el.Amount}
          quantity={el.Quantity}
          handleAdd={handleAdd}
        />
      ))}
    </div>
  );
}
