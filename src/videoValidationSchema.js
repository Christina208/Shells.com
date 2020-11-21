import * as Yup from "yup";

const videoValidationSchema = Yup.object().shape({
  title: Yup.string(),
  releeaseDate: Yup.string(),
  type: Yup.string(),
  synopsis: Yup.string(),
  coverPicture: Yup.string(),
  userRating: Yup.string(),
});

export default videoValidationSchema;
