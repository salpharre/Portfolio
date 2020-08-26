import React from "react";
import "../ContactMe/style.css";

function ContactMeForm(props) {
    return (
        <div className="tab-pane fade" id="form" role="tabpanel" aria-labelledby="form-tab">
            <div>
                Feel free to send me a message, enter your email and a note.
            </div>
            <br></br>
            <form onSubmit={props.form}>
                <div className="form-group row">
                    <div className="col">
                        <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Email" 
                        id="email" 
                        name="email"
                        onChange={props.handleChange}
                        value={props.email}
                        ></input>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col">
                        <textarea 
                        type="text"
                         className="form-control" 
                         id="text" 
                         rows="3" 
                         placeholder="Your Message Here"
                         name="text"
                         onChange={props.handleChange}
                         value={props.text}
                         ></textarea>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default ContactMeForm;