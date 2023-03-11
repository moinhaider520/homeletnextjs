import Heads from "components/Head"
import IndividualDetails from "./IndividualDetails"
import Head from "next/head"
import Link from "next/link"
import { Component } from "react"
import UserDetails from "./UserDetails"
import ContactDetails from "./ContactDetails"
import OTPVerification from "./OTPVerification"
import { data } from "jquery"


export default class RegistrationForm extends Component {

  state = {
    step: 1,
    type: '',
    userName: '',
    companyName: '',
    firstName: '',
    lastName: '',
    gender: '',
    contactnumber: '',
    email: '',
    password: '',
    otp: '',
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  prevStep = () => {
    const { step } = this.state;
    if (this.state.type == 3) {
      this.setState({
        step: step - 2
      });
    } else {
      this.setState({
        step: step - 1
      });
    }
  }

  handleChange = input => e => {
    if (input === 'phone') {
      this.setState({[input]: e});
      this.setState({contactnumber: e});
    } else {
      this.setState({ [input]: e.target.value });
    }

    //this.setState({ [input]: e.target.value });
  }
  render() {
    const { step } = this.state;
    const { type, userName, companyName, firstName, lastName, gender, contactnumber, email, password, otp } = this.state;
    const values = { type, userName, companyName, firstName, lastName, gender, contactnumber, email, password, otp };
     

    switch (step) {
      case 1:
        return (
          <>
          
            <IndividualDetails
              nextStep={this.nextStep}
              handleChange={this.handleChange} 
              values={values}
              modeldataUsertpye = {this.props.modeldataArray}
            />
          </>
        )


      case 2:
        return (
          <>

            {
              (values.type == 3) ?
                (
                  <>
                    {this.nextStep()}
                  </>
                )
                : (<UserDetails
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  values={values}
                  modelgenderArray = {this.props.modelgenderArray}
                />)
            }

          </>
        )


      case 3:
        return (
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
        return (
          <>
            <OTPVerification
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values} />
          </>
        )
    }

  }

  
}
