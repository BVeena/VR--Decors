import React from 'react';
import {Formik} from 'formik' ;
import * as EmailValidator from 'email-validator';
import './Login.css';

const ValidatedLoginForm =() => {
return(
   <Formik
        initialValues = {{email:"", password:""}}
        onSubmit={(values, {setSubmitting}) =>{
            console.log("submitting");
        }}
        validate={
            values=>{
                let errors={};
                debugger;

                if(!values.email){
                    errors.email="Required";
                }
                else if (!EmailValidator.validate(values.email)){
                    errors.email = "Invalid Email Address"
                }
                const passwordRegex = /(?=.*[0-9])/;

                if(!values.password){
                    errors.password="Required";
                }
                else if(values.password.length < 8){
                    errors.password ="password must be 8 charecters long"
                }
                else if(!passwordRegex.test(values.password)){
                    errors.password ="Invalid password must contain one number"
                }
                return errors;
            }
        }
    >
        {
            ({
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit
            }) => (
            
            <form onSubmit ={handleSubmit}>
             <div className="mail">
             <label htmlFor ="email"><h4> Email:</h4></label>
              
              <input
                name="email"
                type="text"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                {errors.email && <div>Email {errors.email}</div> }
             </div> 
             <div className="pwd">
             <label htmlFor ="email"><h4>Password :</h4></label> 
                <input
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.password && <div> Password {errors.password}</div> }

             </div>
               
                 <div className="label checkbox">
                    <input type="checkbox" id="chkb" name="remember"/>  
                    <label for="chkb">I am not a Robot</label>
                </div>
                <div className = "action_btn">
                <button className ="button1" type = "submit">Log-in</button>
                <button className="button2" type = "submit">Sign-up</button>
               
                </div>
               
            <div className="footer">
            <span className="psw">Forgot <a href="password">password?</a></span>
            </div>
            </form>
            )
        }
</Formik> );  
}
export default ValidatedLoginForm ;