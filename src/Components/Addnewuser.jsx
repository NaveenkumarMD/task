import React,{useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Addnewuser({open,setOpen,addnewuserhandler}) {
    const [Name,setName]=useState("")

  const handleClose = () => {
    setOpen(false)
  }
  const handleadduser=()=>{
    if(Name===""){
        alert("Please enter the name")
    }
    addnewuserhandler(Name)
  }


  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add new User</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add a new user by entering the name of the user and the ither details can be adde din the upcoming ecntries
          </DialogContentText>
          <TextField sx={{marginTop:"10px"}}
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="email"
            fullWidth
            variant="outlined"
            onChange={(e)=>setName(e.target.value)}
            value={Name}
            error={Name.length<2}
            helperText="Please Enter the user name"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleadduser}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}