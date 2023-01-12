import React from 'react'
import Navbar from '../Components/Navbar'
import { Box,Container } from '@mui/system'
import { Button, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import * as yup from "yup"
const validationSchema=yup.object({
    name: yup
    .string("Enter your name")
    .min(5,'Name should be atleast 4 letters')
    .required("Please Enter the name"),
})

function Adduserscreen() {
    const formik=useFormik({
        initialValues:{
            name:""
        },
        validationSchema:validationSchema,
        onSubmit:(values)=>{
            const currentdata=JSON.parse(localStorage.getItem("userdata"))
            for (var idx in currentdata){
                if (currentdata[idx].name==values.name){
                    return alert("Name already found")
                }
            }
            currentdata.push({
                id:Math.floor(Math.random()*1000),
                name:values.name,
            email:"",
            mobile:"",
            qualification:"",
            password:"",
            pgcompletionyear:"",
            pgcollege:"",
            pgproject:""
            })  
            localStorage.setItem("userdata",JSON.stringify(currentdata))
            alert("new user added successfully")          
        } 
        
    })
  return (
    <>
    <Navbar/>
    <Container maxWidth="sm">
        <Box sx={{
          bgcolor: "white", height: "60vh", display: "flex", alignItems: "center", justifyContent: "center"
        }}>
<form  onSubmit={formik.handleSubmit}>
            <div style={{ textAlign: "center", fontSize: "30px", marginBottom: "30px", color: "dodgerblue", fontWeight: "700" }}>Add new user</div>
            <TextField
              sx={{ marginBottom: "40px",marginTop:"40px", width: "400px" }}
              required
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              helperText={formik.errors.name}
              error={Boolean(formik.errors.name)}
              label="Name"
            /><br />
            <div style={{ textAlign: "center" }}>
              <Button variant="outlined" type="submit">SUBMIT</Button>
            </div>
            </form>

        </Box>
        </Container>
    </>

  )
}

export default Adduserscreen