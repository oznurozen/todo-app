import * as Yup from "yup";

const validation = Yup.object().shape({
    text: Yup.string().required('Burayı doldurmak zorunludur!')
})

export default validation;