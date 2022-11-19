import CartList from "./CartList";
import React, { useEffect } from "react";
import lays from "../image/lay.jpg"
import noodle from "../image/noodle.jpg"
import Biryani from "../image/bryn.jpg"
import Kurkure from "../image/kurkure.jpg"

const Food = [
  {
    FoodName: "Noodles",
    url:noodle,
    id: 1,
    Amount: 30,
    Quantity: 0
  },
  {
    id: 2,
    FoodName: "Biryani",
    url:Biryani,
    Amount: 90,
    Quantity: 0
  },
  {
    id: 3,
    FoodName: "Chips",
    url:lays,
    Amount: 10,
    Quantity: 0
  },
  {
    id: 4,
    FoodName: "Kurkure",
    url:Kurkure,
    Amount: 10,
    Quantity: 0
  }
];
export default function CartComp() {
  // const [count, setCount] = React.useState(0);
  const [food, setFood] = React.useState([...Food]);

  const [total, setTotal] = React.useState(0);
  // console.log(count)
  const handleAdd = (id, value) => {
    let items = food.map((el) =>
      el.id === id
        ? {
            ...el,
            Quantity: el.Quantity + value
          }
        : el
    );
    setFood(items);
  };
  useEffect(() => {
    setTotal(food.reduce((s, el) => s + el.Amount * el.Quantity, 0));
  }, [food]);

  return (
    <div style={{ padding:"1rem", height: "auto",width:"50%",margin:"auto" ,boxShadow: "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"}}>
      <CartList food={food} handleAdd={handleAdd} />

      <h3 style={{fontSize:"40px"}}>Total Amount: {total}</h3>
    </div>
  );
}
