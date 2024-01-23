import * as yup from 'yup'

export const schema = yup.object().shape({
    firstName: yup.string().required('Please fill first name'),
    lastName: yup.string().required('Please fill last name'),
})