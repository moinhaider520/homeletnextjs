import Footer from "components/Footer";
import Header from "components/Header";
import Link from "next/link";
import { Component } from "react";
import { Progress } from "antd";

export default class UserProfile extends Component{

  constructor(props){
    super(props)
    this.state={
      photo:'',
      name:'',
      title:'',
      phone:'',
      email:'',
      description:'',
      facebook:'',
      twitter:'',
      linkedin:'',
      google:'',
      pinterest:'',
      instagram:'',
      progress:0
    }
  }
  ProgressChange=(e)=>{
    let progress = 0;
    if(this.state.photo !==""){
      progress +=8
    }
    if(this.state.name !==""){
      progress +=8
    }
    if(this.state.email !==""){
      progress +=8
    }
    if(this.state.title !==""){
      progress +=8
    }
    if(this.state.phone !==""){
      progress +=8
    }
    if(this.state.description !==""){
      progress +=8
    }
    if(this.state.facebook !==""){
      progress +=8
    }
    if(this.state.twitter !==""){
      progress +=8
    }
    if(this.state.linkedin !==""){
      progress +=8
    }
    if(this.state.google !==""){
      progress +=8
    }
    if(this.state.pinterest !==""){
      progress +=8
    }
    if(this.state.instagram !==""){
      progress +=8
    }
    this.setState({progress: progress})
  }
  handleChange = (e) =>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render(){
    return(
        <>
        <Header/>
        <div className="margin-top-65" />

        <div className="container">
  <div className="row">
    {/* Widget */}
    <div className="col-md-3">
      <div className="margin-bottom-20">
        <div className="utf-edit-profile-photo-area">
          {" "}
          <img src="images/agent-02.jpg" alt="" />
          <div className="utf-change-photo-btn-item">
            <div className="utf-user-photo-upload">
              {" "}
              <span>
                <i className="fa fa-upload" /> Upload Photo
              </span>
              <input type="file" className="upload tooltip top" id="photo" onBlur={this.ProgressChange} onChange={this.handleChange}/>
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix" />
      <div className="sidebar margin-top-20">
        <div className="user-smt-account-menu-container">
          <ul className="user-account-nav-menu">
            <li>
              <Link href="/userprofile" className="current">
                <i className="fa fa-user" /> My Profile
              </Link>
            </li>
            <li>
                <Link href="/bookmarklisting">
                <i className="fa fa-bookmark-o" /> Bookmark Listing
                </Link>
            </li>
            <li>
                <Link href="/myproperty">
                <i className="fa fa-home" /> My Property
                </Link>
            </li>
            <li>
                <Link href="/addproperty">
                <i className="fa fa-plus-square" /> New Property
                </Link>
            </li>
            <li>
                <Link href="/changepassword">
                <i className="fa fa-unlock-alt" /> Change Password
                </Link>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-sign-out" /> Log Out
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="widget utf-sidebar-widget-item">
        <div className="utf-detail-banner-add-section">
          <h4>Profile Completness</h4>
          <Progress
          strokeColor={
{            from:'#108ee9',
            to:'#87d068',}
          }
          percent={this.state.progress}
          status="active"/>
        </div>
      </div>
      <div className="widget utf-sidebar-widget-item">
        <div className="utf-detail-banner-add-section">
          <a href="#">
            <img src="images/banner-add-2.jpg" alt="banner-add-2" />
          </a>
        </div>
      </div>
      
    </div>
    <div className="col-md-9">
      <div className="utf-user-profile-item">
        <div className="utf-submit-page-inner-box">
          <h3>My Account</h3>
          <div className="content with-padding">
            <div className="col-md-6">
              <label>Your Name</label>
              <input placeholder="Your Name" type="text" id="name" onBlur={this.ProgressChange} onChange={this.handleChange}/>
            </div>
            <div className="col-md-6">
              <label>Your Title</label>
              <input placeholder="Your Title" type="text" id="title" onBlur={this.ProgressChange} onChange={this.handleChange}/>
            </div>
            <div className="col-md-6">
              <label>Phone Number</label>
              <input placeholder="Your Phone Number" type="text" id="phone" onBlur={this.ProgressChange} onChange={this.handleChange}/>
            </div>
            <div className="col-md-6">
              <label>Email Address</label>
              <input placeholder="info@example.com" type="text" id="email" onBlur={this.ProgressChange} onChange={this.handleChange}/>
            </div>
            <div className="col-md-12 margin-bottom-0">
              <label>Write About Yourself</label>
              <textarea
                name="description"
                id="description"
                cols={20}
                rows={5}
                placeholder="Write A Brief Description About Yourself."
                onBlur={this.ProgressChange} onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
        <div className="utf-submit-page-inner-box">
          <h3>Social Accounts</h3>
          <div className="content with-padding">
            <div className="col-md-6">
              <label>
                <i className="fa fa-facebook" style={{color:'blue'}} /> Facebook
              </label>
              <input placeholder="Facebook Link" type="text" id="facebook" onBlur={this.ProgressChange} onChange={this.handleChange}/>
            </div>
            <div className="col-md-6">
              <label>
                <i className="fa fa-twitter" style={{color:'blue'}}/> Twitter
              </label>
              <input placeholder="Twitter Link" type="text" id="twitter" onBlur={this.ProgressChange} onChange={this.handleChange}/>
            </div>
            <div className="col-md-6">
              <label>
                <i className="fa fa-linkedin" style={{color:'blue'}} /> Linkedin
              </label>
              <input placeholder="Linkedin Link" type="text"id="linkedin" onBlur={this.ProgressChange} onChange={this.handleChange} />
            </div>
            <div className="col-md-6">
              <label>
                <i className="fa fa-google" style={{color:'red'}} /> Google
              </label>
              <input placeholder="Google Link" type="text" id="google" onBlur={this.ProgressChange} onChange={this.handleChange}/>
            </div>
            <div className="col-md-6">
              <label>
                <i className="fa fa-pinterest" style={{color:'red'}}/> Pinterest
              </label>
              <input placeholder="Pinterest Link" type="text" id="pinterest" onBlur={this.ProgressChange} onChange={this.handleChange}/>
            </div>
            <div className="col-md-6">
              <label>
                <i className="fa fa-instagram" style={{color:'red'}}/> Instagram
              </label>
              <input placeholder="Instagram Link" type="text" id="instagram" onBlur={this.ProgressChange} onChange={this.handleChange}/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <button className="utf-centered-button button margin-top-0 margin-bottom-20">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>

        <Footer/>

        </>
    )
  }
}