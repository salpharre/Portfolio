import React from "react";
import Header from "../components/Header";
import ContactMe from "../components/ContactMe";
import API from "../../utils";
import { Formik } from "formik";
//import formik

//add a form component if have time
function Contact() {
    //set up formik


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
            />
        </div>
    );
};

export default Contact;