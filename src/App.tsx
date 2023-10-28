import React, { useEffect, useState } from "react";
import Title from "./components/Title";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Tododb, { Todos } from "./Tododb";
import theme from "./themes/theme";

function App() {
  const url = "http://localhost:8000/"
  const [allTodos, setAllTodos] = useState<Todos[]>([]);
  const [todos, setTodos] =  useState<Todos[]>([]);

  // get Todos from backend
  const fetchTodos=()=>{
    const api = async () => {
      const data = await fetch(`${url}alltodos`, {
        method: "GET",
      });
      const jsonData = await data.json();
      setAllTodos(jsonData);
      setTodos(jsonData)
    };

    api();
  }

  useEffect(() => {
    
    fetchTodos()
  }, []);

  //Getting dropdown results
  function getProgress(p: string) {
   
    updateProgressTodo(p); 
  }

  function updateProgressTodo(progress: string, ) {
    if (progress === "Completed") {
    
      setTodos(allTodos.filter((todo) => todo.completed === true));
    } else if (progress === "Not Completed") {
     
      setTodos(allTodos.filter((todo) => todo.completed === false));
    } else {
      setTodos(allTodos);
    }
  }



  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          pt: 4,
          flexDirection: "column",
          width: "100vw",
          height: "100vh",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Title />
        <Navbar getProgress={getProgress} fetchTodos={fetchTodos}></Navbar>
        <TodoList todos={todos}  />
      </Box>
    </ThemeProvider>
  );
}

export default App;
