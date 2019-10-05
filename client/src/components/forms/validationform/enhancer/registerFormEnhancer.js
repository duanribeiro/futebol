import {
    withFormik
} from "formik";
import * as Yup from "yup";

const formikEnhancer = withFormik({
    validationSchema: Yup.object().shape({
        firstname: Yup.string().required('This field is required'),
        lastname: Yup.string().required('This field is required'),
        phone_number: Yup.string().required('This field is required'),
        email: Yup.string().required('This Field is required'),
        password: Yup.string().required('This Field is required'),
    }),
    mapPropsToValues: props => ({
        firstname: props.data ? props.data.firstname: '',
        lastname: props.data ? props.data.lastname: '',
        phone_number: props.data ? props.data.phone_number: '',
        email:props.data ? props.data.email: '',
    }),
    handleSubmit: (values) => {},
    displayName: 'CustomValidationForm',
    enableReinitialize:true,
});

export default formikEnhancer;