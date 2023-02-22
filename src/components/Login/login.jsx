import React from "react";
import {Formik, Form, Field, ErrorMessage, getIn} from "formik";
import {connect as connectRr} from 'react-redux'
import { loginFormSchema } from "../FormValidation/LoginFormSchema";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
function getStyles(errors, fieldName) {
    if (getIn(errors, fieldName)) {
      return {
        border: '1px solid red'
      }
    }
  }
  function CustomInput({ field, form: { errors } }) {
    return <div>
    <input {...field} style={getStyles(errors, field.name)} placeholder={field.name}/>
    {/*<ErrorMessage name={field.name}/>*/}
    </div>
  }  
const Login = (props) => {
    if (props.isAuth) return <Navigate to='/profile'/>
    return (
    <div>
        <h1>Login</h1>
        <Formik
            initialValues={{email: "", password: "", rememberMe: false}}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, actions) => {
                actions.setStatus(undefined)
                props.login(values.email,values.password,values.rememberMe, actions)
            }}
            validationSchema={loginFormSchema}>
            {(formik) => (
                <Form>
                    <div> {formik.status}


                        <Field component={CustomInput} type={'text'} name={'email'} placeholder={'e-mail'}/>
                    </div>
                    <div>
                        <Field component={CustomInput} type={'password'} name={'password'} placeholder={'password'}/>
                    </div>

                    <div>
                        <Field type={'checkbox'} name={'rememberMe'}/>
                        
                        <label htmlFor={'rememberMe'}> remember me </label>
                    </div>
                    <button type={'submit'}>Log in</button>
                </Form>
            )}
        </Formik>
    </div>
)};
let mapStateToProps=(state)=>{
    return{
        isAuth: state.auth.isAuth,
    }
}
export default connectRr(mapStateToProps, {login})(Login) 
