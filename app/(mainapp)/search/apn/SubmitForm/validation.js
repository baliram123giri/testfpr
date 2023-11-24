import * as Yup from "yup"

export const PropertySearchValidation = () => {
    return Yup.object().shape({
        // state_id: Yup.string().required("State is required"),
        // county_id: Yup.string().required("County is required"),
        // legal_description_type: Yup.string().required("Legal description is required"),
        apn: Yup.string().required("Apn# is required"),
        // legal_description_type: Yup.string().required("Legal description is required")
    })
}