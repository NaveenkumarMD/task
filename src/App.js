import * as React from 'react';
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
export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
            <Typography variant="h3" sx={{textAlign:"center",color:"dodgerblue",marginTop:"50px"}} component="h2">
  Users Profile
</Typography>;
      <CssBaseline />
      <Container>

        <Stack spacing={3} sx={{marginTop:"40px"}} >
          
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Stack width="100%" direction="row" justifyContent="flex-start" alignItems="center" spacing={2} >
                  <Avatar sx={{ bgcolor: "dodgerblue" }}>NK</Avatar>
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    Naveenkumar
                  </Typography>
                </Stack>
              </AccordionSummary>
              <AccordionDetails>
                <Userform userdetails={{
                  name:"Naveenkumar",
                  email:"naveen9715568487@gmail.com",
                  mobile:8870499146,
                  qualification:"UG",
                  password:"Naveen@1",
                  pgcompletionyear:"2022",
                  pgcollege:"CIT",
                  pgproject:"NONE"
                }} />
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel1bh-header"
              >
                <Stack width="100%" direction="row" justifyContent="flex-start" alignItems="center" spacing={2} >
                  <Avatar sx={{ bgcolor: "dodgerblue" }}>N</Avatar>
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    Naveen
                  </Typography>
                </Stack>
              </AccordionSummary>
              <AccordionDetails>
                <Userform  userdetails={{
                  name:"Naveen",
                  email:"naveen@gmail.com",
                  mobile:8870499146,
                  qualification:"PG",
                  password:"Naveen@1",
                  pgcompletionyear:"2022",
                  pgcollege:"CIT",
                  pgproject:"NONE"
                }}/>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel1bh-header"
              >
                <Stack width="100%" direction="row" justifyContent="flex-start" alignItems="center" spacing={2} >
                  <Avatar sx={{ bgcolor: "dodgerblue" }}>K</Avatar>
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    kumar
                  </Typography>
                </Stack>
              </AccordionSummary>
              <AccordionDetails>
                <Userform userdetails={{
                  name:"kumar",
                  email:"kumar@gmail.com",
                  mobile:8870499146,
                  qualification:"UG",
                  password:"Naveen@1",
                  pgcompletionyear:"2022",
                  pgcollege:"CIT",
                  pgproject:"NONE"
                }} />
              </AccordionDetails>
            </Accordion>

          
        </Stack>
      </Container>
    </div>
  );
}