import * as React from "react";

export const ContactForm = () => {

    return (
        <form class="contact-form">
            <span>*All fields are required.</span>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Name" />
            </div>
            <div class="form-group">
                <input type="email" class="form-control" placeholder="Email" />
            </div>
            <div class="form-group">
                <textarea class="form-control" placeholder="Message"></textarea>
            </div>
            <button type="submit" class="btn">Submit</button>
        </form>
    );
};
