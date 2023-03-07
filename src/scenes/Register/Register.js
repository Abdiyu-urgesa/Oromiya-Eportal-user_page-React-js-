import {
  Box,
  Button,
  TextField,
  Card,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { Form, Formik } from "formik";
import * as yup from "yup";
import "./register.css";
import { Link } from "react-router-dom";

export default function Register() {
  const checkoutSchema = yup.object().shape({
    account_type: yup.string().required("Field is required."),
    fname: yup.string().required("Field is required."),
    Mname: yup.string().required("Field is required."),
    Lname: yup.string().required("Field is required."),
    mobile: yup.string().required("Field is required."),
    password: yup.string().required("Field is required."),
    repassword: yup.string().required("Field is required."),
  });
  const initialValues = {
    account_type: "",
    fname: "",
    Mname: "",
    Lname: "",
    mobile: "",
    password: "",
    repassword: "",
  };
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <Card className="register_wrapper">
      <div className="register_header">
        <p>Account Registeration</p>
      </div>
      <Formik
        onSubmit={(values) => {
          handleFormSubmit(values);
        }}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({ values, errors, touched, handleBlur, handleChange }) => (
          <Form>
            <Box className="register_input_container">
              <FormControl>
                <InputLabel id="account_type">Account Type</InputLabel>
                <Select
                  labelId={"account_type"}
                  label="Account Type"
                  value={values.account_type}
                  size="small"
                  name="account_type"
                  onBlur={handleBlur}
                  error={!!touched.account_type && !!errors.account_type}
                >
                  <MenuItem value="personal">Personal</MenuItem>
                  <MenuItem value="organization">Organization</MenuItem>
                </Select>
              </FormControl>
              <TextField
                variant="outlined"
                size="small"
                type="text"
                label="Your Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fname}
                name="fname"
                error={!!touched.fname && !!errors.fname}
                helperText={touched.fname && errors.fname}
              />

              <TextField
                variant="outlined"
                size="small"
                type="text"
                label="Your Father Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Mname}
                name="Mname"
                error={!!touched.Mname && !!errors.Mname}
                helperText={touched.Mname && errors.Mname}
              />
              <TextField
                variant="outlined"
                size="small"
                type="text"
                label="Grand Father Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Lname}
                name="Lname"
                error={!!touched.Lname && !!errors.Lname}
                helperText={touched.Lname && errors.Lname}
              />
              <TextField
                variant="outlined"
                size="small"
                type="text"
                label="Mobile"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.mobile}
                name="mobile"
                error={!!touched.mobile && !!errors.mobile}
                helperText={touched.mobile && errors.mobile}
              />
              <TextField
                variant="outlined"
                size="small"
                type="password"
                label="Enter new Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
              />
              <TextField
                variant="outlined"
                size="small"
                type="password"
                label="Re-enter Your Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.repassword}
                name="repassword"
                error={!!touched.repassword && !!errors.repassword}
                helperText={touched.repassword && errors.repassword}
              />
            </Box>
            <Button
              fullWidth
              style={{ width: "50%", marginBottom: "20px" }}
              className="black_btn"
              type="submit"
              variant="contained"
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Card>
  );
}
