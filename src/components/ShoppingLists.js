import React, { useEffect } from "react";
import { useState } from "react";
import List from "./List";
import { Container } from "react-bootstrap";

const ShoppingLists = () => {
  const [shoppingLists, setShoppingLists] = useState([]);

  const shoppingListApi =
    "https://64092d096ecd4f9e18aa1900.mockapi.io/ShoppingList/";

  useEffect(() => {
    getShoppingLists();
  }, []);

  const getShoppingLists = async () => {
    try {
      const response = await fetch(shoppingListApi);
      const data = await response.json();
      // console.log(data);
      return data;
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const deleteList = async (id) => {
    try {
      const response = await fetch(shoppingListApi + `${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log(data, "Its working");
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <article className="shopping-list">
      <h1>Shopping Lists</h1>
      <Container>
        {shoppingLists.map((list) => (
          <ul>
            <li>
              {" "}
              {list.listName}
              <button onClick={() => deleteList(list.id)}>Delete </button>{" "}
            </li>
          </ul>
        ))}
      </Container>
    </article>
  );
};

export default ShoppingLists;
