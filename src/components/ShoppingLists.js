import React, { useEffect } from "react";
import { useState } from "react";
import List from "./List";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ShoppingLists = () => {
  const [shoppingLists, setShoppingLists] = useState([]);

  const shoppingListApi =
    "https://64092d096ecd4f9e18aa1900.mockapi.io/ShoppingList/";

  useEffect(() => {
    getShoppingLists().then((data) => setShoppingLists(data));
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
      await getShoppingLists().then((data) => setShoppingLists(data));
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  //   fetch(`${endpoint}/${id}`, {
  //     method: 'DELETE',
  // }).then(res => {
  //     res.json()
  //     .then((resp) => {
  //         console.log(resp);
  //     getShoppingLists();
  //     })
  // })
  // }
  // const updateLists = async (list) => {
  //   try {
  //     fetch(`${shoppingListApi}/${list.id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(list),
  //     });
  //   } catch (error) {
  //     console.log("Error updating API:", error);
  //   }
  // };

  async function postList(newList) {
    try {
      fetch(shoppingListApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newList),
      });
      await getShoppingLists().then((newList) => setShoppingLists(newList));
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <article className="shopping-list">
      <h1>Shopping Lists</h1>

      <form>
        <input
          type="text"
          placeholder="New List"
          onChange={(e) => setShoppingLists(e.target.value)}
          value={""}
        />
      </form>
      <button onClick={(e) => postList(e.target.value)}>Add New List</button>

      <Container>
        <Row>
          <Col className="d-flex flex-wrap justify-content-center">
            {shoppingLists.map((list, index) => (
              <div key={index}>
                <List listData={list} />
                <button onClick={() => deleteList(list.id)}>
                  Delete List
                </button>{" "}
                <hr />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </article>
  );
};

export default ShoppingLists;
