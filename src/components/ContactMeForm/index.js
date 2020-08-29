import React from "react";
import "../ContactMe/style.css";

function ContactMeForm(props) {
    return (
        <div className="card test">
            <div className="card-body">
            <form onSubmit={props.form}>
                <div className="form-group row">
                    <div className="col">
                        <label>Email</label>
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
                        <div className="error">
                        {props.emailErrors && props.emailTouched ? <div>{props.emailErrors}</div> : null}
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col">
                        <label>Message</label>
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
                         <div className="error">
                         {props.textErrors && props.textTouched ? <div>{props.textErrors}</div> : null}
                         </div>
                    </div>
                </div>
                <div className="row">
                <div className="col button block-inline">
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                <div className="col thanks block-inline">
                {props.success && <div>Thank you!</div>}
                </div>
                </div>
            </form>
            </div> 
        </div>
    );
};

export default ContactMeForm;