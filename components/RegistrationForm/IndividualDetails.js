import { Component } from "react";

export default class IndividualDetails extends Component{
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
        this.props.values;
    }
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const {values,handleChange} = this.props;
        this.props.values;
        return(
            <>
            <label>Register as a:</label>
            <select onChange={handleChange('type')} defaultValue={values.type}>
                <option>Agency</option>
                <option>Individual (Owner)</option>
                <option>Corporate</option>
            </select>
            <label>Username</label>
            <input type="text" placeholder="homelet520" onChange={handleChange('userName')} defaultValue={values.userName}/>
            <button onClick={this.continue} className="button full-width border margin-top-10">Continue</button>
            {/* <button onClick={this.back}>Go Back</button> */}
            </>
        )
    }
}