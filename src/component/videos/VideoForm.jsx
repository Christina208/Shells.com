import React from "react";
import { Form, FormGroup, Label, Button } from "reactstrap";
import { Formik, Field } from "formik";
import { add, getById, update } from "../../services/videoService";
import videoValidationSchema from "../../videoValidationSchema";
import { toast } from "react-toastify";

class VideoForm extends React.Component {
  state = {
    formData: {
      title: "",
      releaseDate: "",
      type: "",
      synopsis: "",
      coverPicture: "",
      userRating: "",
    },
  };
  componentDidMount() {
    console.log(this.props);
    const { id } = this.props.match.params;
    if (id) {
      const { state } = this.props.location;
      if (state) {
        this.setFormData(state);
      } else {
        getById(id)
          .then((response) => this.setFormData(response.item))
          .catch(this.onGetByIdError);
      }
    }
  }

  setFormData = (formData) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        formData,
      };
    });
  };
  onGetByIdError = (error) => {
    console.log(error);
  };

  handleSubmit = (values, { resetForm }) => {
    console.log(values);

    if (values.id) {
      update(values).then(this.onActionSuccess).catch(this.onActionError);
    } else {
      add(values).then(this.onAddSuccess).catch(this.onActionError);
    }

    resetForm(this.state.formData);
  };

  onActionSuccess = (values) => {
    console.log(values);

    toast.success("You have successfully updated!");

    this.handleRedirect();
  };

  onAddSuccess = (values) => {
    console.log(values);

    toast.success("You have successfully added a Video!");

    this.handleRedirect();
  };
  handleRedirect = () => {
    this.props.history.push("/videolist");
  };
  onActionError = (values) => {
    console.log(values);

    toast.error("Opps, something went wrong.");
  };

  render() {
    return (
      <React.Fragment>
        <Formik
          enableReinitialize={true}
          validationSchema={videoValidationSchema}
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
                  <Form onSubmit={handleSubmit}>
                    <FormGroup>
                      <Label>Title</Label>
                      <Field
                        name="title"
                        type="text"
                        values={values.title}
                        placeholder="Title"
                        autoComplete="off"
                        className={
                          errors.title && touched.title
                            ? "form-control"
                            : "form-control"
                        }
                      />
                      {errors.title && touched.title && (
                        <span className="input-feedback alert-danger">
                          {errors.title}
                        </span>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <Label>Release Date</Label>
                      <Field
                        name="releaseDate"
                        type="text"
                        values={values.releaseDate}
                        placeholder="Release Date"
                        autoComplete="off"
                        className={
                          errors.releaseDate && touched.releaseDate
                            ? "form-control"
                            : "form-control"
                        }
                      />
                      {errors.releaseDate && touched.releaseDate && (
                        <span className="input-feedback alert-danger">
                          {errors.releaseDate}
                        </span>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <Label>Type</Label>
                      <Field
                        name="type"
                        type="text"
                        values={values.type}
                        placeholder="Type"
                        autoComplete="off"
                        className={
                          errors.type && touched.type
                            ? "form-control"
                            : "form-control"
                        }
                      />
                      {errors.type && touched.type && (
                        <span className="input-feedback alert-danger">
                          {errors.type}
                        </span>
                      )}
                    </FormGroup>

                    <FormGroup>
                      <Label>Synopsis</Label>
                      <Field
                        name="synopsis"
                        type="text"
                        values={values.synopsis}
                        placeholder="Synopsis"
                        autoComplete="off"
                        className={
                          errors.synopsis && touched.synopsis
                            ? "form-control"
                            : "form-control"
                        }
                      />
                      {errors.synopsis && touched.synopsis && (
                        <span className="input-feedback alert-danger">
                          {errors.synopsis}
                        </span>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <Label>Cover Picture</Label>
                      <Field
                        name="coverPicture"
                        type="text"
                        values={values.coverPicture}
                        placeholder="Cover Picture"
                        autoComplete="off"
                        className={
                          errors.coverPicture && touched.coverPicture
                            ? "form-control"
                            : "form-control"
                        }
                      />
                      {errors.coverPicture && touched.coverPicture && (
                        <span className="input-feedback alert-danger">
                          {errors.coverPicture}
                        </span>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <Label>User Rating</Label>
                      <Field
                        name="userRating"
                        type="text"
                        values={values.userRating}
                        placeholder="userRating"
                        autoComplete="off"
                        className={
                          errors.userRating && touched.userRating
                            ? "form-control"
                            : "form-control"
                        }
                      />
                      {errors.userRating && touched.userRating && (
                        <span className="input-feedback alert-danger">
                          {errors.userRating}
                        </span>
                      )}
                      <div className="card-footer text-left">
                        <Button
                          type="submit"
                          disabled={!isValid || isSubmitting}
                        >
                          {values.id ? "Update" : "Submit"}
                        </Button>
                      </div>
                    </FormGroup>
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

export default VideoForm;
