import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import Typography from "@mui/material/Typography";
import { Button, Box } from "@mui/material";
import theme from "../themes/theme";
import { Todos } from "../Tododb";

interface TodoItemProps {
  todo: Todos;

  handleDeleteTodo: (id: number) => void;
  fetchTodos:()=>void
}

function TodoItem({ todo, handleDeleteTodo,fetchTodos }: TodoItemProps) {
  
  const updateChecked = async (isChecked: boolean) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}todos/${todo.id}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          completed: isChecked,
        }),
      });
      const result = await response.json();
      if (response.ok) {
        console.log("updated todo", result);
      } else {
        console.log("error updating todo ", result);
      }
    } catch (err) {
      console.log("Error", err);
    }
  };
  const handleCheckboxChange = async () => {
    
    await updateChecked(!todo.completed);
    fetchTodos()
  };
  return (
    <ListItem
      disablePadding
      sx={{ borderBottom: 1, borderColor: theme.palette.background.default }}
    >
      
          <ListItemIcon>
            <Checkbox
              edge="start"
              tabIndex={-1}
              disableRipple
              checked={todo.completed}
              onChange={handleCheckboxChange}
            />
          </ListItemIcon>
          <Accordion sx={{ width: "100%" }}>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <ListItemText
            id={todo.task}
            primary={todo.task}
            sx={{ flexGrow: 1 }}
          />
             </AccordionSummary>
        <AccordionDetails>
          <Typography>{todo.notes || "No notes for this task."}</Typography>
        </AccordionDetails>
      </Accordion>
          <Box sx={{ ml: 2 }}>
            <Button
              variant="outlined"
              color="error"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              Delete
            </Button>
          </Box>
     
    </ListItem>
  );
}

export default TodoItem;
