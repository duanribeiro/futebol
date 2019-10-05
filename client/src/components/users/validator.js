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
    }),
    mapPropsToValues: props => ({
        firstname: props.editedData ? props.editedData.firstname : '',
        lastname: props.editedData ? props.editedData.lastname : '',
        phone_number: props.editedData ? props.editedData.phone_number : '',
        email: props.editedData ? props.editedData.email : '',
    }),
    handleSubmit: (values) => { },
    displayName: 'CustomValidationForm',
    enableReinitialize: true,
});

export default formikEnhancer;