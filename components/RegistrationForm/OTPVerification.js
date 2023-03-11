import { Component } from "react";
import ReactDOM from "react-dom";
import Swal from "sweetalert2";
export default class OTPVerification extends Component {

    constructor(props) {
        super(props);

        this.state = {
            otp: null,
            data: null,
        };
    }
    componentDidMount() {
        alert('ss');
        const otp = Math.floor(100000 + Math.random() * 900000);
        this.setState({ otp });
        const contactNo = this.props.values.contactnumber;
        fetch(`https://pk.eocean.us/API/RequestAPI?user=homelet&pwd=AM866885mV6psAXK7X4Scq5S4UB1no3HTiZIXDclLLc9ojmjz1jJL92xAiqLIp04sQ%3d%3d&sender=HomeLet&reciever=${contactNo}&msg-data=OTP=${otp}&response=string`, {
            mode: 'no-cors'
        });
    }
    continue = e => {
        e.preventDefault();
        
        if (this.validate()) {
           // FORM SUBMISSION          
            this.submit().then(submitResult => {
                if (submitResult) {
                    
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Congratulations',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setTimeout(()=>{
                        window.location = '/userprofile';
                    }, 1700)
                    
                }
            });
        }
        // this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    submit = async () => {
        const response = await fetch("https://homelet.pk/homelet/web/next-register/signup", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },

            body: JSON.stringify({ data: this.props.values })
        })
        const result = await response.json()
        
        if (result.message != 'success') {
            console.log(result.message)
            return false;
        }

        return true;
    } 

    validate = () =>{
        const otpvalue = this.props.values.otp
        var otpspan = document.getElementById("otpspan")
        if(otpvalue != this.state.otp){
            otpspan.innerHTML  = "Inavalid Otp";
            return false;
        }
        return true;
    }

    render() {
        const { values, handleChange } = this.props;
        this.props.values;
        return (
            <>
                <h3>Enter OTP Verification Code <span style={{color: 'red'}}>*</span></h3>
                <input type='text' onChange={handleChange('otp')} defaultValue={values.otp} />
                <span id="otpspan" style={{color: 'red'}}></span>
                <button onClick={this.continue} className="button full-width border margin-top-10">Verify</button>
                <button onClick={this.back} className="button full-width border margin-top-10">Go Back</button>
            </>
        )
    }
}