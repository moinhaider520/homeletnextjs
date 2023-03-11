import { isEmptyObject } from "jquery";
import { Component } from "react";

import React, { useState } from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default class ContactDetails extends Component{
    
    continue = e =>{
        e.preventDefault();
        if (this.validate()) {
            this.submit().then(submitResult => {
                if (submitResult) {
                  this.props.nextStep();
                }
              });
        }
    }
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }

    submit = async () => {
        var contactnumberpan = document.getElementById("contactnumberpan")
        var passwordpan = document.getElementById("passwordpan")
        var emailspan = document.getElementById("emailspan")
        const response = await fetch("https://homelet.pk/homelet/web/next-register/register", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },

            body: JSON.stringify({ user_contact: this.props.values.contactnumber, user_password: this.props.values.password, user_email: this.props.values.email })
        })
        const result = await response.json()
        //console.log(result.message)
        if (result.message != 'success') {
            if (result.message['ContactNo']) {
                contactnumberpan.innerHTML = result.message['ContactNo']
            }
            if (result.message['Password']) {
                passwordpan.innerHTML = result.message['Password']
            }
            if (result.message['E_mail']) {
                emailspan.innerHTML = result.message['E_mail']
            }
            return false;
        }

        return true;
    } 

    validate = () =>{
        const contactnumber = this.props.values.contactnumber
        const password = this.props.values.password
        var contactnumberpan = document.getElementById("contactnumberpan")
        var passwordpan = document.getElementById("passwordpan")
      
        if(isEmptyObject(contactnumber)){
            contactnumberpan.innerHTML  = "Contact Number is required";
            return false;
        }
        if(isEmptyObject(password)){
            passwordpan.innerHTML  = "Password is required";
            return false;
        }
        
        return true;
    }
    render(){
        const {values,handleChange} = this.props;
        this.props.values;
        return(
            <>
            <label>Contact Number <span style={{color: 'red'}}>*</span></label>
            <input type='hidden' onChange={handleChange('contactnumber')} defaultValue={values.contactnumber} />
            <PhoneInput country={'pk'} value={values.phone} onChange={(phone) => handleChange('phone')(phone)}/>
            
            <span id="contactnumberpan" style={{color: 'red'}}></span>
            <label>Email (Optional)</label>
            <input type="text" placeholder="homelet@gmail.com" onChange={handleChange('email')} defaultValue={values.email}/>
            <span id="emailspan" style={{color: 'red'}}></span>
            <label>Password <span style={{color: 'red'}}>*</span></label>
            <input type='password' onChange={handleChange('password')} defaultValue={values.password}/>
            <span id="passwordpan" style={{color: 'red'}}></span>
            <button onClick={this.continue} className="button full-width border margin-top-10">Continue</button>
            <button onClick={this.back} className="button full-width border margin-top-10">Go Back</button>
            </>
        )
    }
}