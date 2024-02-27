import * as yup from "yup";
export const schema = yup.object().shape({
    title: yup.string()
        .required('Title must be filled'),
    content: yup.string()
        .required('Content must be filled'),
    status: yup.string()
        .required('Status must be filled'),
})