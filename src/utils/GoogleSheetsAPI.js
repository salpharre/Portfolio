import axios from "react";

export default {
    sendForm: function(form) {
        const scriptURL = "";
        return axios.post(scriptURL, { body: new FormData(form)} )
    }
}