import React, { useState, useEffect } from "react";
import ContactMe from "../components/ContactMe";
import { useFormik } from "formik";
import axios from "axios";

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
            
            axios.post("https://submit-form.com/zOzOvv4P3ONxvD6E2pK4n", values).then(() => {
                console.log("success!")
                setSuccess(true);
            }).catch((err) => {
                console.log(err);
            });
            
            resetForm({ values: "" });
            //sets success back to false after 12 seconds
            setTimeout(() => {
                setSuccess(false);
            }, 1200);
        }
    });
    //if successful a thank you message shows/////////////
    const [success, setSuccess] = useState(false);


    return (
        <div>
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
            success={success}
            />
        </div>
    );
};

export default Contact;