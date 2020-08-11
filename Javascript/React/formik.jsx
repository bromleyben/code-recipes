import React from 'react';
import { Formik, Form, Field } from 'formik';

function SimplestForm(props) {
    return <Formik initialValues={{name: 'Ben Bromley'}}>
        {formik => (
            <Form>
                <label htmlFor="name">Name</label>
                <Field name="name"/>
            </Form>
        )}
    </Formik>
}