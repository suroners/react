import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from "yup";
import {date, description, name, percent} from "./validation";

const ProjectSchema = Yup.object().shape({
    name,
    description,
    percent,
    date,
});

export const ProjectForm = (props) => {
    const parentProps = props,
        initialValues = parentProps.project,
        submit = parentProps.handleSubmit;

    return (<Formik
        {...props}
        enableReinitialize
        initialValues={initialValues}
        validationSchema={ProjectSchema}
        onSubmit={ submit }
        >
            {({errors, touched, ...rest}) => {
                return (
                    <Form>
                        <div>
                            <Field name="name" placeholder="Name"/>
                            <ErrorMessage name="name"/>
                        </div>
                        <div>
                            <Field name="description" placeholder="Description"/>
                            <ErrorMessage name="description"/>
                        </div>
                        <div>
                            <Field name="percent" placeholder="Percent"/>
                            <ErrorMessage name="percent"/>
                        </div>
                        <div>
                            <Field name="date" placeholder="Date" type="date"/>
                            <ErrorMessage name="date"/>
                        </div>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                        <pre>
                    {JSON.stringify(rest, null, 2)}
                </pre>
                    </Form>
                )
            }}
        </Formik>
    );
};

