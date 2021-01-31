import * as React from "react";
import {
    FormBuilder,
    FieldGroup,
    FieldControl,
    Validators,
    ValidatorFn,
    FormGroup
} from "react-reactive-form";
import fetchRequest from './../../utils/fetchRequest';

const TextInput = ({ handler, touched, hasError, meta }) => {
    return (
        <div className="form-group">
            <input className="form-control" placeholder={`Enter ${meta.label}`} {...handler()} />
            <span>
                {touched
                    && hasError("required")
                    && `${meta.label} is required`}
            </span>
        </div>
    )
}

const contactForm = FormBuilder.group({
    name: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
    description: [null, [Validators.required]],
});

export const ContactForm = ({ props }) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        fetchRequest('/api/submit_contact', 'POST', contactForm.value, true, props).then(result => {
            console.log(result);
            if (result && result.status && result.status != 200) {
                window.alert(result.message);
            } else {
                // setShow_modal(true);
                window.alert('Thank you.');
                contactForm.reset();
            }
        });
    }

    return (
        <FieldGroup
            control={contactForm}
            render={({ get, invalid }) => (
                <form className="contact-form" onSubmit={handleSubmit}>
                    <span>*All fields are required.</span>
                    <FieldControl
                        name="name"
                        render={TextInput}
                        meta={{ label: "Name" }}
                    />
                    <FieldControl
                        name="email"
                        render={TextInput}
                        meta={{ label: "email" }}
                    />
                    <div className="form-group">
                        <FieldControl
                            name="description"
                            render={({ handler, touched, hasError }) => (
                                <textarea className="form-control" {...handler()} required placeholder="Message"></textarea>
                            )}
                        />

                    </div>
                    <button type="submit" className="btn">Submit</button>
                </form>
            )}
        />
    );
};
