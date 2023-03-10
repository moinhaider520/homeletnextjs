import Heads from "components/Head"
import IndividualDetails from "./IndividualDetails"
import Head from "next/head"
import Link from "next/link"
import { Component } from "react"
import UserDetails from "./UserDetails"
import ContactDetails from "./ContactDetails"
import OTPVerification from "./OTPVerification"

export default class RegistrationForm extends Component{
  state={
    step:1,
    type:'',
    userName:'',
    firstName: '',
    lastName:'',
    gender:'',
    contactnumber:'',
    email:'',
    password:'',
    otp:'',
}

nextStep = ()=>{
    const { step } = this.state;
    this.setState({
        step: step + 1
    });
}

prevStep = ()=>{
    const { step } = this.state;
    this.setState({
        step: step - 1
    });
}

handleChange = input => e =>{
    this.setState({[input]: e.target.value});
}
  render(){
    const {step} = this.state;
    const {type, userName, firstName, lastName, gender, contactnumber, email, password,otp} = this.state;
    const values = {type, userName, firstName, lastName, gender, contactnumber, email, password,otp};
    
    switch(step){
      case 1:
        return(
          <>
          <IndividualDetails
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}
          />
          </>
        )
      case 2:
        return(
          <>
          <UserDetails
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
          />
          </>
        )
    case 3:
        return(
            <>
            
            <ContactDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            />
            </>
        )
    case 4:
        return(
            <>
            <OTPVerification
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}/>
            </>
        )
    }
    
  }
}