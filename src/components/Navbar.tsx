import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Box from "@mui/material/Box";
import theme from "../themes/theme";
import { useState } from "react";
import  Modal from "./Modal"
interface NavbarProps{
  getProgress: (p:string)=>void
  fetchTodos:()=>void
}


function Navbar( {getProgress,fetchTodos} :NavbarProps) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };




  const handleProgressChange=(event:SelectChangeEvent)=>{
    const progress =event.target.value as string
    getProgress(progress)
    
    
  }
  return (
    <Box
      sx={{
        height: 100,
        width: "50vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: 4,
      }}
    >
      <Modal open={open} handleClose={handleClose} fetchTodos={fetchTodos}/>
      <Button variant="contained" color="success" sx={{ fontSize: 30 }} onClick={handleClickOpen}>
        + Add Task
      </Button>
      <FormControl sx={{ minWidth: "200px", backgroundColor: "transparent" }}>
        <InputLabel
          id="Progress"
          sx={{
            fontSize: 20,
            color: "#22D3EE",
          }}
        >
          Progress
        </InputLabel>
        <Select
          MenuProps={{}}
          labelId="Progress"
          label="Progress"
          sx={{
            fontSize: 20,
            color: theme.palette.primary.main,
            border: 1,
            borderColor: theme.palette.primary.main,
          }}
          
          onChange={handleProgressChange}
        >
          <MenuItem
          value={'All'}
            sx={{
              fontSize: 20,
              color: theme.palette.primary.main,
              borderColor: theme.palette.primary.main,
            }}
          >
            All
          </MenuItem>
          <MenuItem
          value={'Completed'}
            sx={{
              fontSize: 20,
              color: theme.palette.primary.main,
              borderColor: theme.palette.primary.main,
            }}
          >
            Completed
          </MenuItem>
          <MenuItem
          value={'Not Completed'}
            sx={{
              fontSize: 20,
              color: theme.palette.primary.main,
              borderColor: theme.palette.primary.main,
            }}
          >
            Not Completed
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default Navbar;
