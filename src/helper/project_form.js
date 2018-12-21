import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

const ProjectSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),
    description: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),
    percent: Yup.number()
        .lessThan('Must be number!')
        .lessThan(101, 'Must be less then 100!')
        .moreThan(0, 'Must be more then 0!')
        .required('Required'),
    date: Yup.date()
        .required('Required'),
});

const initialValues = {
    name: 'asd',
    description: 'asd',
    percent: '10',
    date: '2018-12-21',
}

// export const ProjectForm = (project = initialValues) => {
export const ProjectForm = (props) => {
    // console.log(props, "props")
    return (
        <Formik
            // initialValues={ project.project }
            {...props}
            initialValues={ initialValues }
            validationSchema={ProjectSchema}
            onSubmit={(values, props) => {
                // same shape as initial values
                console.log(props, "props");
                props.setSubmitting(false);
            }}
        >
            {({ errors, touched, ...rest }) => {
                return (
                    <Form>
                        <div>
                            <Field name="name"  placeholder="Name" />
                            <ErrorMessage name="name" />
                        </div>
                        <div>
                            <Field name="description"  placeholder="Description" />
                            <ErrorMessage name="description" />
                            {/*<ErrorMessage name="description">*/}
                            {/*{errorMessage => <div className="error">{errorMessage}</div>}*/}
                            {/*</ErrorMessage>*/}
                        </div>
                        <div>
                            {console.log(";;;;;", props)}
                            <Field name="percent"  placeholder="Percent" />
                            <ErrorMessage name="percent" />
                        </div>
                        <div>
                            <Field name="date"  placeholder="Date" type="date" />
                            <ErrorMessage name="date" />
                        </div>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                        <pre>
                    {JSON.stringify(rest, null, 2)}
                </pre>
                    </Form>
                )}}
        </Formik>
    );
}

