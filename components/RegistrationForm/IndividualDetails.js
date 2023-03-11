import { isEmptyObject } from "jquery";
import { Component, useState } from "react";
import Swal from "sweetalert2";
export default class IndividualDetails extends Component {

    continue = e => {
        
        e.preventDefault();
       
        if (this.validate()) {
            this.submit().then(submitResult => {
                if (submitResult) {
                  this.props.nextStep();
                }
              });
        }

    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    submit = async () => {
        var usererror = document.getElementById("originalnamespan")
        var companyspan = document.getElementById("companyspan")
        const response = await fetch("https://homelet.pk/homelet/web/next-register/register", {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            
            body: JSON.stringify({ user_name: this.props.values.userName, company_name: this.props.values.companyName})
        })
        const result = await response.json()
        //console.log(result.message)
        if(result.message != 'success'){
            if(result.message['OriginalUserName']){
                usererror.innerHTML = result.message['OriginalUserName']
            }
            if(result.message['UserName']){
                companyspan.innerHTML = result.message['UserName']
            }
            return false;
        }
        
       return true;
      }    

    validate = () => {
        const username = this.props.values.userName
        const companyname = this.props.values.companyName
        const usertype = this.props.values.type
        var companyspan = document.getElementById("companyspan")
        var usererror = document.getElementById("originalnamespan")
        var usertypespan = document.getElementById("usertypespan")
        // usertypespan.innerHTML = " ";
        // usererror.innerHTML = " ";
        // companyspan.innerHTML = " ";
        if (isEmptyObject(usertype)) {
            usertypespan.innerHTML = "Select the Type";
            return false;
        }
        if (isEmptyObject(username)) {
            usererror.innerHTML = "User Name is required";
            return false;
        }
        if (this.props.values.type == 3) {
            if (isEmptyObject(companyname)) {
                companyspan.innerHTML = "Company Name is required";
                return false;
            }
        }

        return true;
    }

    render() {
        const { values, handleChange } = this.props;
        this.props.values;
        const usertype = this.props.modeldataUsertpye;
        // console.log(usertype);
        return (
            <>
                <label>Register as a <span style={{ color: 'red' }}>*</span></label>
                <select onChange={handleChange('type')} >
                    <option>--select type--</option>
                    {usertype.map((items, index) => (
                        <option value={items[0]} key={items.index}>{items[1]}</option>
                    ))}
                </select>
                <span id="usertypespan" style={{ color: 'red' }}></span>
                <label>Username <span style={{ color: 'red' }}>*</span></label>
                <input type="text" onChange={handleChange('userName')} defaultValue={values.userName} />
                <span id="originalnamespan" style={{ color: 'red' }}></span>
                {
                    (values.type == 3) ?
                        (
                            <>
                                <label>Company Name <span style={{ color: 'red' }}>*</span></label>
                                <input type="text" onChange={handleChange('companyName')} defaultValue={values.companyName} />
                                <span id="companyspan" style={{ color: 'red' }}></span>
                            </>
                        )
                        : ('')
                }


                <button onClick={this.continue} className="button full-width border margin-top-10">Continue</button>
                {/* <button onClick={this.back}>Go Back</button> */}
            </>
        )
    }
}