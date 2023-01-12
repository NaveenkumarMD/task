import React, { useEffect, useState } from 'react';
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

import Navbar from './Components/Navbar';
export default function Main() {
  const [expanded, setExpanded] = useState(false);
  const [usersdata, setuserdata] = useState(
    !(localStorage.getItem("userdata")===null) ? JSON.parse(localStorage.getItem("userdata")) : Userdata
    )
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [open,setOpen]=useState(false)
  useEffect(()=>{
    const localuserdata=JSON.parse(localStorage.getItem("userdata"))
    if(localuserdata===null){
        localStorage.setItem("userdata",JSON.stringify(Userdata))
    }
    console.log(localuserdata)
  },[])


  return (
    <div>
        <Navbar/>

      <Typography variant="h4" sx={{ textAlign: "center", color: "dodgerblue", marginTop: "15vh",fontWeight:"600" }} component="h2">
        Users Profile
      </Typography>;
      <CssBaseline />
      <Container>

        <Stack spacing={3} sx={{ marginTop: "40px" }} data-test="users-list" >
          {
            usersdata.map((userdata, idx) => {
              return (
                <Accordion className="user-container" key={idx} expanded={expanded === 'panel' + idx.toString()} onChange={handleChange('panel' + idx.toString())}>
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



      </Container>
    </div>
  );
}