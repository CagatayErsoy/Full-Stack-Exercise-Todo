import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";
interface ModalProps {
  open:boolean,
  handleClose: () => void;
  fetchTodos:()=>void
}
function Modal({open, handleClose,fetchTodos}: ModalProps) {
    const[ task,setTask]=useState("")
    const[ completed,setCompleted]=useState(false)
    const[ notes,setNotes]=useState("")
  const  addTodos=async()=>{
    try {
      const response =await fetch("http://localhost:8000/todos", {
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        }, body:JSON.stringify({
           task:task,
          completed:completed,
          notes:notes
        })
       
      })
      const result=await response.json()
      if(response.ok){
        console.log("todo added", result)
        fetchTodos()
      }
      else{
        console.log("error adding todo", result)
      }
      handleClose()
    }
    catch(err){
      console.log("Error", err)
    }
    
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Task</DialogTitle>
        <DialogContent>
         
          <TextField
            autoFocus
            margin="dense"
            id="task"
            label="New Task"
            type="text"
            fullWidth
            variant="standard"
            onChange={e=>setTask(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="notes"
            label="Notes"
            type="text"
            fullWidth
            variant="standard"
            onChange={e=>setNotes(e.target.value)}
          />
          <FormControlLabel
        label="Completed"
        control={
          <Checkbox
           checked={completed}
           onChange={e=>setCompleted(e.target.checked)}
            
            // onChange={handleChange}
          />
        }
      />
        </DialogContent>
        <DialogActions>
          <Button onClick={addTodos}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Modal;
