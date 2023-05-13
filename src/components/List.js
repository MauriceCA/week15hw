import React from "react";
import NewListForm from "./NewListForm";
import { Card } from "react-bootstrap";
import { useState } from "react";
import Row from "react-bootstrap/Row";

export default function List({ listData }) {
  const [allItems, setAllItems] = useState(listData.listOfAllItems);
  const [newListName, setNewListName] = useState("");
  // console.log(listData.listOfAllItems);
  // console.log(allItems);
  const updateLists = async (list) => {
    list.listName = prompt("Enter New Store Name");
    try {
      await fetch(
        "https://64092d096ecd4f9e18aa1900.mockapi.io/ShoppingList/" + list.id,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(list),
        }
      );
    } catch (error) {
      console.log("Error updating API:", error);
    }
  };
  return (
    <article>
      <Card style={{ width: "20rem" }} className="m-5">
        <Card.Body>
          <Card.Title>
            <h2>{listData.listName}</h2>
            <button onClick={() => updateLists(listData)}>✎ List Name</button>
          </Card.Title>
          <Card.Text>
            {/* Item:{" "} */}
            {allItems.map((item, index) => (
              <div>
                <Row className="d-flex">
                  {item.item} {item.price}
                </Row>
                <div key={index}>{console.log(allItems)}</div>
              </div>
            ))}
          </Card.Text>
        </Card.Body>
      </Card>
      <NewListForm />
    </article>
  );
}

//item={item.item} price={item.price}
