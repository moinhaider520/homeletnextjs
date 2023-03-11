import { isEmptyObject } from "jquery";
import { Component } from "react";

export default class UserDetails extends Component{
    continue = e =>{
        e.preventDefault();
        if (this.validate()) {
            this.props.nextStep();
        }
    }
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }

    validate = () =>{
        const firstName = this.props.values.firstName
        const lastName = this.props.values.lastName
        const gender = this.props.values.gender
        var firstnamespan = document.getElementById("firstnamespan")
        var lastnamespan = document.getElementById("lastnamespan")
        var genderspan = document.getElementById("genderspan")
        if(isEmptyObject(firstName)){
            firstnamespan.innerHTML  = "First Name is required";
            return false;
        }
        if(isEmptyObject(lastName)){
            lastnamespan.innerHTML  = "Last Name is required";
            return false;
        }
        if(isEmptyObject(gender)){
            genderspan.innerHTML  = "Select the Gender Type";
            return false;
        }
        return true;
    }

    render(){
        const {values,handleChange} = this.props;
        this.props.values;
        const usergender= this.props.modelgenderArray;
        return(
            <>
            <label>First Name <span style={{color: 'red'}}>*</span></label>
            <input type="text" placeholder="First Name" onChange={handleChange('firstName')} defaultValue={values.firstName}/>
            <span id="firstnamespan" style={{color: 'red'}}></span>
            <label>Last Name <span style={{color: 'red'}}>*</span></label>
            <input type="text" placeholder="Last Name" onChange={handleChange('lastName')} defaultValue={values.lastName}/>
            <span id="lastnamespan" style={{color: 'red'}}></span>
            <label>Gender <span style={{color: 'red'}}>*</span></label>
            <select onChange={handleChange('gender')} defaultValue={values.gender}>
                <option>--Select Gender--</option>
                {usergender.map((items, index) => (
                    <option value={items[0]} key={items.index}>{items[1]}</option>
                ))}
            </select>
            <span id="genderspan" style={{ color: 'red' }}></span>
            <button onClick={this.continue} className="button full-width border margin-top-10">Continue</button>
            <button onClick={this.back} className="button full-width border margin-top-10">Go Back</button>
            </>
        )
    }
}