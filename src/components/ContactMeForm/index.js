import React from "react";
import "../ContactMe/style.css";

function ContactMeForm(props) {
    return (
        <div className="card">
            <form onSubmit={props.form}>
                <div className="form-group row">
                    <div className="col-6">
                        <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Email" 
                        id="email" 
                        name="email"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.email}
                        ></input>
                        {props.emailErrors && props.emailTouched ? <div>{props.emailErrors}</div> : null}
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-6">
                        <textarea 
                        type="text"
                         className="form-control" 
                         id="text" 
                         rows="3" 
                         placeholder="Your Message Here"
                         name="text"
                         onChange={props.handleChange}
                         onBlur={props.handleBlur}
                         value={props.text}
                         ></textarea>
                         {props.textErrors && props.textTouched ? <div>{props.textErrors}</div> : null}
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default ContactMeForm;