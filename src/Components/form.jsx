import React from "react"
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as yup from "yup"
import { useFormik } from 'formik';

const validationSchema = yup.object({
  name: yup
    .string("Enter your name")
    .required("Name is required"),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  mobile: yup
    .number("Enter the 10 digit mobile number")
    .required("Mobile is required")
    .min(10, "Mobile should be 10 digits")
  ,
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
})
const Userform = ({userdetails}) => {
    console.log(userdetails)
  const formik = useFormik({
    initialValues: {
        ...userdetails
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values))
    }
  })
  return (
    <div>
      <CssBaseline />
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
              <Button variant="outlined" type="submit" >Submit</Button>
            </div>
          </form>
        </Box>
      </Container>
    </div>
  )

}
export default Userform