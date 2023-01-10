import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Userform from './Components/form';
import Avatar from '@mui/material/Avatar';
import { Stack } from '@mui/system';
import Userdata from './userdata.json'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Addnewuser from './Components/Addnewuser';
export default function App() {
  const [expanded, setExpanded] = useState(false);
  const [usersdata, setuserdata] = useState(Userdata)
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [open,setOpen]=useState(false)
  const addnewuserhandler=(Name)=>{
    console.log(usersdata)
    let tempuserdata=[...usersdata]
    tempuserdata.push({
      name:Name,
      email:"",
      mobile:"",
      qualification:"",
      password:"",
      pgcompletionyear:"",
      pgcollege:"",
      pgproject:""
    })
    setuserdata(tempuserdata)
    setOpen(false)
  }
  const newuserprops={
    open:open,
    setOpen:setOpen,
    addnewuserhandler:addnewuserhandler
  }
  return (
    <div>
      <Addnewuser {...newuserprops}/>
      <Typography variant="h4" sx={{ textAlign: "center", color: "dodgerblue", marginTop: "50px",fontWeight:"600" }} component="h2">
        Users Profile
      </Typography>;
      <CssBaseline />
      <Container>

        <Stack spacing={3} sx={{ marginTop: "40px" }} >
          {
            usersdata.map((userdata, idx) => {
              return (
                <Accordion key={idx} expanded={expanded === 'panel' + idx.toString()} onChange={handleChange('panel' + idx.toString())}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={'panel' + idx.toString() + 'bh-content'}
                    id={'panel' + idx.toString() + 'bh-header'}
                  >
                    <Stack width="100%" direction="row" justifyContent="flex-start" alignItems="center" spacing={2} >
                      <Avatar sx={{ bgcolor: "dodgerblue" }}>
                        {userdata.name.substring(0,1)}
                      </Avatar>
                      <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        {userdata.name}
                      </Typography>
                    </Stack>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Userform userdetails={userdata} />
                  </AccordionDetails>
                </Accordion>)
            })
          }


        </Stack>
        <div style={{position:"fixed",bottom:"100px",right:"100px"}}>
        <Fab onClick={()=>setOpen(true)} color="primary" aria-label="add" style={{position:"fixed"}}>
        <AddIcon />
      </Fab>
      </div>
      </Container>
    </div>
  );
}