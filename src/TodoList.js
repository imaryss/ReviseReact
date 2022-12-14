import React from "react";
import Todo from "./Todo";
export default function TodoList({ todos }) {
  return todos.map((todoItem) => {
    return <Todo key={todoItem.id} todo={todoItem} />;
  });
}
