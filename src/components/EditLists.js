const [allLists, setAllLists] = useState();

export const updateLists = async (list) => {
  try {
    fetch(`${shoppingListApi}/${list.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(list),
    });
  } catch (error) {
    console.log("Error updating API:", error);
  }
};

export async function postList(newList) {
  try {
    fetch(shoppingListApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newList),
    });
  } catch (error) {
    console.log(error);
  }
}
// const deleteItem = (itemId) => {
//   updateLists() = {
//     ...listOfAllItems,
//     items: listOfAllItems.items.filter((x) => x.id !== itemId),
//   };
//   updateLists(updateLists);
// };

// const addNewItem = (item) =>
//   updateLists({ ...listOfAllItems, items: [...listOfAllItems.items, item] });

// const items = () => {
//   <ul>
//     {listOfAllItems.items.map((item, index) => (
//       <li key={index}>
//         <label> {`${item.name} Price: ${item.price}`}</label>
//         <button onClick={(e) => deleteItem(item.id)}>Delete</button>
//       </li>
//     ))}
//   </ul>;
// };
