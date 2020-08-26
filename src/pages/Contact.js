import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ContactMe from "../components/ContactMe";
// import API from "../../utils";
import { useFormik } from "formik";

////////style the error messages!!!!

function Contact() {

    const validate = values => {
        const errors = {};
        if (!values.email) {
            errors.email = "Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Did you miss a character?";
        }

        if (!values.text) {
            errors.text = "Required";
        } else if (values.text.length < 15) {
            errors.text = "A little bit longer, make it really robust!"
        }
        return errors;
    };

    //set up formik
    const formik = useFormik({
        initialValues: {
            email: "",
            text: ""
        },
        validate,
        onSubmit: (values, {resetForm} ) => {
            //form is valid
            console.log(values);
            //in the .then after sendingform reset values
            resetForm({ values: "" });
        }
    });
    //if successful a thank you message shows
    const [success, setSuccess] = useState(false);

    //onSubmit seperate function here is called in formik state (onSubmit={onSubmit})
    //API.sendForm(values).then(res => {console.log(res); setSuccess(true);})


    return (
        <div>
            <Header />
            <ContactMe 
            form={formik.handleSubmit}
            handleChange={formik.handleChange}
            email={formik.values.email}
            text={formik.values.text}
            emailErrors={formik.errors.email}
            emailTouched={formik.touched.email}
            textErrors={formik.errors.text}
            textTouched={formik.touched.text}
            handleBlur={formik.handleBlur}
            />
        </div>
    );
};

export default Contact;