import React, { useState } from "react";

export default function NewListForm({ props }) {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState(undefined);

  const handlePriceInput = (e) => {
    const int = parseInt(e.target.value, 10);
    setPrice(int >= 0 ? int : "");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (item && price) {
      const newItem = {
        item: item,
        price: price,
      };
      console.log(item);
      props(newItem);
      setItem("");
      setPrice("");
    } else {
      console.log("invalid input");
    }
  };
  return (
    <div>
      <h4>Add a new item</h4>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="item name"
          onChange={(e) => setItem(e.target.value)}
          value={item}
        />
        <input
          type="text"
          placeholder="price"
          onChange={handlePriceInput}
          value={price}
        />
        <button type="submit" onClick={() => onSubmit(item, price)}>
          Add Item
        </button>
      </form>
    </div>
  );
}
