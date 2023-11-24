import * as Yup from "yup"

export const PropertySearchValidation = () => {
    return Yup.object().shape({
        // state_id: Yup.string().required("State is required"),
        // county_id: Yup.string().required("County is required"),
        search_type_id: Yup.string().required("Search type is required"),
        document_no: Yup.string().required("document_no is required"),
    })
}