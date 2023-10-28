import List from "@mui/material/List";
import TodoItem from "./TodoItem";
import Tododb from "../Tododb";
import { Todos } from "../Tododb";
import { Box } from "@mui/material";
import theme from "../themes/theme";
import TodoListProps from "../interfaces/TodoListprops";

export default function TodoList({ todos, fetchTodos }: TodoListProps) {
  const deleteTodo = async (id: number) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}todos/${id}/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        console.log("deleted todo");
      } else {
        console.log("error deleting todo");
      }
    } catch (err) {
      console.log("Error", err);
    }
  };

  const handleDeleteTodo = async (id: number) => {
    await deleteTodo(id);
    fetchTodos();
  };

  return (
    <List
      sx={{
        ...theme.flexCenter,
        width: "50vw",
        bgcolor: theme.palette.background.paper,
        p: 4,
        color: theme.palette.text.primary,
        flexDirection: "column",
      }}
    >
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          handleDeleteTodo={() => handleDeleteTodo(todo.id)}
          fetchTodos={fetchTodos}
        />
      ))}
    </List>
  );
};

