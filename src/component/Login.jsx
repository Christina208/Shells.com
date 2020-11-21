import React from "react";
import logInValidationSchema from "./../logInValidationSchema";
import { Formik, Field } from "formik";
import { Form, FormGroup, Label, Button } from "reactstrap";
import * as userService from "./../services/userService";
//import "./../login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: { email: "", password: "" },
    };
  }
  handleSubmit = (formValues, { resetForm }) => {
    const payload = { email: formValues.email, password: formValues.password };

    userService
      .logIn(payload)
      .then(userService.currentUser)
      .then(this.onSuccessGetUser)
      .catch(this.onLogInError);

    resetForm(this.state.formData);
  };

  onSuccessGetUser = () => {
    this.props.history.push(`/videolist`);
  };
  onLogInError = (error) => {
    console.log(error);
  };
  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <Formik
          enableReinitialize={true}
          validationSchema={logInValidationSchema}
          initialValues={this.state.formData}
          onSubmit={this.handleSubmit}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              handleSubmit,
              isValid,
              isSubmitting,
            } = props;
            return (
              <div className="row">
                <div className="col-md-6 card pt-4">
                  {" "}
                  <Form onSubmit={handleSubmit} className={"theme-form"}>
                    <FormGroup>
                      <Label>Email</Label>
                      <Field
                        name="email"
                        type="text"
                        values={values.email}
                        autoComplete="off"
                        className={
                          errors.email && touched.email
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      />
                      {errors.email && touched.email && (
                        <span className="input-feedback alert-danger">
                          {errors.email}
                        </span>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <Label>Password</Label>
                      <Field
                        name="password"
                        type="password"
                        values={values.password}
                        autoComplete="off"
                        className={
                          errors.password && touched.password
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      />
                      {errors.password && touched.password && (
                        <span className="input-feedback alert-danger">
                          {errors.password}
                        </span>
                      )}
                    </FormGroup>

                    <Button type="submit" disabled={!isValid || isSubmitting}>
                      Login
                    </Button>
                  </Form>
                </div>
              </div>
            );
          }}
        </Formik>
      </React.Fragment>
    );
  }
}
export default Login;
