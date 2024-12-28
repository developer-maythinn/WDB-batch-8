import React, { useState } from "react";

function CRUD() {
  const [items, setItems] = useState([]); // ['apple', 'orange']
  const [newItem, setNewItem] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const addItem = () => {
    if (newItem) {
      // when user typing in input, add value in items
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const deleteItem = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  const updateItem = (index) => {
    const updateItems = items.map((item, i) => (i === index ? editText : item));
    console.log("updateItems", updateItems);
    setItems(updateItems)
    setEditIndex(null)
  };
  
  return (
    <>
      <h1>CRUD (Create, Read, Update, Delete)</h1>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addItem}>Add</button>
      <br />

      {
        // items && items.length > 0 &&
        items?.length > 0 &&
          items.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {editIndex === index ? (
                    <>
                      <input
                        type="text"
                        onChange={(e) => setEditText(e.target.value)}
                      />
                      <button onClick={() => updateItem(index)}>Update</button>
                    </>
                  ) : (
                    <>
                      <p>{item}</p>
                      <button onClick={() => setEditIndex(index)}>Edit</button>
                      <button onClick={() => deleteItem(index)}>Delete</button>
                    </>
                  )}
                </div>
              </React.Fragment>
            );
          })
      }
    </>
  );
}

export default CRUD;
