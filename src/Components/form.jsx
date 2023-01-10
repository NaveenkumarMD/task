import React, { useEffect, useState } from "react"
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import * as yup from "yup"
import { useFormik } from 'formik';
import { Stack } from "@mui/system";


const validationSchema = yup.object({
  name: yup
    .string("Enter your name"),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email'),
  mobile: yup
    .number("Enter the 10 digit mobile number")
    .required("Mobile is required"),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length'),
  pgcompletionyear:yup
    .string(),
  pgcollege:yup
    .string(),
  pgroject:yup
    .string(),

})
const Userform = ({userdetails}) => {
  const [step,setStep]=useState(1)
  const [nexttext,setnexttext]=useState("NEXT")
  const formik = useFormik({
    initialValues: {
        ...userdetails
    },
    validationSchema:validationSchema,
    onSubmit: (values) => {
      console.log(nexttext,step)
      if(nexttext=="SUBMIT" || step==2){
        alert(JSON.stringify(values))
      }
      else if(step==1 && nexttext=="NEXT"){
        setStep(2)
      }
    }
  })
  const handleprev=()=>{
    setStep(1)
  }
  useEffect(()=>{
      if(formik.values.qualification=="UG"){
        setnexttext("SUBMIT")
      }
      else{
        setnexttext("NEXT")
      }
  },[formik.values.qualification])
  return (
    <div>
      <CssBaseline />
      {
        step==1 &&
      
      <Container maxWidth="sm">
        <Box sx={{
          bgcolor: "white", height: "50vh", display: "flex", alignItems: "center", justifyContent: "center"
        }}>
          <form onSubmit={formik.handleSubmit}>
            <div style={{ textAlign: "center", fontSize: "30px", marginBottom: "30px", color: "dodgerblue", fontWeight: "700" }}>Form</div>
            <TextField
              sx={{ marginBottom: "20px", width: "400px" }}
              required
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              label="Name"
            /><br />
            <TextField
              sx={{ marginBottom: "20px", width: "400px" }}
              required
              id="email"
              name="email"
              type="text"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              label="E-mail"
            /><br />
                    <TextField
          id="qualification"
          name="qualification"
          select
          label="Highest qualification"
          defaultValue=""
          onChange={formik.handleChange}
          value={formik.values.qualification}
          sx={{ marginBottom: "20px", width: "400px" }}
        >
          
            <MenuItem  value="PG">
              Post graduate
            </MenuItem>
            <MenuItem  value="UG">
              Under graduate
            </MenuItem>
          
        </TextField><br/>
            <TextField
              sx={{ marginBottom: "20px", width: "400px" }}
              required
              id="mobile"
              name="mobile"
              value={formik.values.mobile}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.mobile)}
              label="Mobile"
              type="number"
            /><br />
            <TextField
              sx={{ marginBottom: "20px", width: "400px" }}
              required
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              label="Password"
              type="password"
            /><br />
            <div style={{ textAlign: "center" }}>
              <Button variant="outlined" type="submit" >{nexttext}</Button>
            </div>
          </form>
        </Box>
      </Container>}
      {
        step==2 && 
        
        <Container maxWidth="sm">
        <Box sx={{
          bgcolor: "white", height: "50vh", display: "flex", alignItems: "center", justifyContent: "center"
        }}>
          <form onSubmit={formik.handleSubmit}>
            <div style={{ textAlign: "center", fontSize: "30px", marginBottom: "30px", color: "dodgerblue", fontWeight: "700" }}>Form</div>
            <TextField
              sx={{ marginBottom: "20px", width: "400px" }}
              required
              id="pgcompletionyear"
              name="pgcompletionyear"
              value={formik.values.pgcompletionyear}
              onChange={formik.handleChange}
              error={formik.touched.pgcompletionyear && Boolean(formik.errors.completionyear)}
              label="PG completion year"
            /><br />
            <TextField
              sx={{ marginBottom: "20px", width: "400px" }}
              required
              id="pgcollege"
              name="pgcollege"
              type="text"
              value={formik.values.pgcollege}
              onChange={formik.handleChange}
              error={formik.touched.pgcollege && Boolean(formik.errors.pgcollege)}
              label="PG college"
            /><br />
            <TextField
              sx={{ marginBottom: "20px", width: "400px" }}
              required
              id="pgproject"
              name="pgproject"
              value={formik.values.pgproject}
              onChange={formik.pgproject}
              error={formik.touched.pgproject && Boolean(formik.errors.pgproject)}
              label="PG project"
            /><br />
            <Stack direction="row" width="100%" justifyContent="space-around" >
            <Button variant="outlined" type="button" onClick={handleprev} >Previous</Button>
            <Button variant="contained" type="submit" >Submit</Button>
            </Stack>
          </form>
        </Box>
      </Container>
      }
    </div>
  )

}
export default Userform