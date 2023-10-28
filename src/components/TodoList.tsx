import List from "@mui/material/List";
import TodoItem from "./TodoItem";
import Tododb from "../Tododb";
import { Todos } from "../Tododb";
import { Box } from "@mui/material";
import theme from "../themes/theme";
import TodoListProps from "../interfaces/TodoListprops";

export default function TodoList({ todos }: TodoListProps) {
  const deleteTodo = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${id}/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      if (response.ok) {
        console.log("deleted todo", result);
      } else {
        console.log("error deleting todo ", result);
      }
    } catch (err) {
      console.log("Error", err);
    }
  };
  const handleDeleteTodo=(id:number)=>{
    deleteTodo(id)
  }
//Popover functions


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
         
          handleDeleteTodo={()=>handleDeleteTodo(todo.id)}

        />
      ))}
    </List>
  );
}
