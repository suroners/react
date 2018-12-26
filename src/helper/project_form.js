import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
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

// export const ProjectForm = (project = initialValues) => {
export const ProjectForm = (props) => {
    const parent_props = props,
        initialValues = parent_props.project,
        project_id = props.match.params.project_id;

    return (<Formik
            {...props}
            enableReinitialize
            initialValues={initialValues}
            validationSchema={ProjectSchema}
            onSubmit={async (values, props) => {
                let res = '';
                if(project_id) {
                    res = await parent_props.update_project(values, project_id);
                } else {
                    res = await parent_props.add_project(values);
                }

                if(res.status === 201 || res.status === 200){
                    props.setSubmitting(false);
                    parent_props.history.push("/projects");
                } else {
                    props.setStatus({
                        name: 'Is too long.',
                        description: 'Is wrong.',
                    });
                }
            }}
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

