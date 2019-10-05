import {
    withFormik
} from "formik";
import * as Yup from "yup";

const formikEnhancer = withFormik({
    validationSchema: Yup.object().shape({
        firstname: Yup.string().required('This field is required'),
        lastname: Yup.string().required('This field is required'),
        email: Yup.string().required('This Field is required'),
        password: Yup.string().required('This Field is required'),
    }),
    handleSubmit: (values) => {},
    displayName: 'CustomValidationForm',
    enableReinitialize:true,
});

export default formikEnhancer;