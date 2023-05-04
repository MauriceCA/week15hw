import React from "react";
import NewListForm from "./NewListForm";
import { Card } from "react-bootstrap";
import { useState } from "react";

export default function List({ listData }) {
  const [allItems, setAllItems] = useState(listData.listOfAllItems);
  console.log(listData);
  return (
    <Card style={{ width: "18rem" }} className="m-3">
      <Card.Body>
        <Card.Title>{listData.listName}</Card.Title>
        <Card.Text>
          Item:{" "}
          {allItems.map((item, index) => (
            <div key={index}>
              <NewListForm item={item} />
            </div>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
