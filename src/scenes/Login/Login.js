import { Box, Button, TextField, Card } from "@mui/material";
import { Form, Formik } from "formik";
import * as yup from "yup";
import "./Login.css";
import { Link } from "react-router-dom";
import { login } from "../../services/service_calls/User_Api";
export default function Login() {
  const checkoutSchema = yup.object().shape({
    email: yup.string().required("Field is required."),
    password: yup.string().min(6).required("Field is required."),
  });
  const initialValues = {
    email: "",
    password: "",
  };
  const handleFormSubmit = (values) => {
    console.log(values);
    login(values.email, values.password).then((res) => {
      if (res.success && res.data) {
        console.log(res.data);
      } else {
        console.log(res.error);
      }
    });
  };
  return (
    <Card className="login_wrapper">
      <div className="login_header">
        <p>Login</p>
      </div>
      <div className="login_input_container">
        <Formik
          onSubmit={(values) => {
            handleFormSubmit(values);
          }}
          initialValues={initialValues}
          validationSchema={checkoutSchema}
        >
          {({ values, errors, touched, handleBlur, handleChange }) => (
            <Form>
              <Box
                width="300px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                gap="30px"
                margin="auto"
              >
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  type="text"
                  label="Email Or Phone Number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                />

                <TextField
                  variant="outlined"
                  size="small"
                  fullWidth
                  type="password"
                  label="Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  name="password"
                  error={!!touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                />

                <Button className="black_btn" type="submit" variant="contained">
                  submit
                </Button>
                <Button className="black_btn" type="submit" variant="contained">
                  Register
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
        <Link className="forget_pass">
          <p>Did you forget Your password</p>
        </Link>
      </div>
    </Card>
  );
}
