import {
    withFormik
} from "formik";
import * as Yup from "yup";

const numberOnlyRegex=/^[0-9]*$/;
const passwordRegex= /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$])/;
const urlRegex =/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/


function equalTo(ref, msg) {
    return Yup.mixed().test({
      name: 'equalTo',
      exclusive: false,
      message: msg,
      params: {
        reference: ref.path,
      },
      test: function(value) {
        return value === this.resolve(ref);
      },
    });
  }
  Yup.addMethod(Yup.string, 'equalTo', equalTo);

const formikEnhancer = withFormik({
    validationSchema: Yup.object().shape({
        require: Yup.string().required('This field is required'),
        email: Yup.string().email('Please enter valid email').required('This field is required'),
        phone_number: Yup.string().matches(numberOnlyRegex, "Please enter valid Phone number").required('This field is required').min(10,'Please enter valid Phone number').max(10,'Please enter valid Phone number'),
        password: Yup.string().matches(passwordRegex, "Qwerty123@ format required").min(8, 'Please enter at least 8 characters').required('This field is required'),
        url: Yup.string().matches(urlRegex, "Please enter valid URL."),
        numberonly: Yup.string().matches(numberOnlyRegex, "Please enter valid number."),
        field1: Yup.string().required('This field is required'),
        field2: Yup.string().equalTo(Yup.ref('field1'), 'Both Fields are not match'),
    }),
    handleSubmit: (values) => {},
    displayName: 'CustomValidationForm',
    enableReinitialize:true,
});

export default formikEnhancer;