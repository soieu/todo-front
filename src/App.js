import React, { useEffect, useState } from "react";
import "./App.css";
import Todo from "./component/Todo";
import AddTodo from "./component/AddTodo";
import { Container, List, Paper } from "@mui/material";
import { call } from "./service/ApiService";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    call("/todo", "GET", null).then((response) => {
      setItems(response.data);
    });
  }, []);

  const deleteItem = (item) => {
    call("/todo", "DELETE", item).then((response) => {
      setItems(response.data);
    });
  };
  const addItem = (item) => {
    call("/todo", "POST", item).then((response) => {
      setItems(response.data);
    });
  };
  const editItem = (item) => {
    call("/todo", "PUT", item).then((response) => {
      setItems(response.data);
    });
  };
  let todoItems = items.length > 0 && (
    <Paper style={{ margin: 16 }}>
      <List>
        {items.map((item) => (
          <Todo
            item={item}
            key={item.id}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        ))}
      </List>
    </Paper>
  );

  return (
    <div className="App">
      <Container maxWidth="md">
        <AddTodo addItem={addItem} />
        <div className="TodoList">{todoItems}</div>
      </Container>
    </div>
  );
}

export default App;
