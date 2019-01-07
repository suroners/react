import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from "yup";
import {date, description, name, percent} from "./validation";
import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";

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
            {({values, errors, touched, setFieldValue, ...rest}) => {
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
                            <DatePicker name="date" onChange={(_) => setFieldValue('date', _)} selected={values.date} dateFormat="MM/DD/YYYY" />
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

