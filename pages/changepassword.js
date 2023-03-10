import Footer from "components/Footer";
import Header from "components/Header";
import Link from "next/link";
export default function ChangePassword(){
    return(
        <>
        <Header/>
        <div className="margin-top-65" />
        {/* MAIN CONTENT */}
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
              <input type="file" className="upload tooltip top" />
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix" />
      <div className="sidebar margin-top-20">
        <div className="user-smt-account-menu-container">
          <ul className="user-account-nav-menu">
            <li>
              <Link href="/userprofile">
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
                <Link href="/changepassword" className="current">
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
          <a href="#">
            <img src="images/banner-add-2.jpg" alt="banner-add-2" />
          </a>
        </div>
      </div>
    </div>
    <div className="col-md-9">
      <div className="utf-user-profile-item">
        <div className="utf-submit-page-inner-box">
          <h3>Change Password</h3>
          <div className="content with-padding">
            <div className="col-md-4">
              <label>Current Password</label>
              <input type="password" placeholder="*********" />
            </div>
            <div className="col-md-4">
              <label>New Password</label>
              <input type="password" placeholder="*********" />
            </div>
            <div className="col-md-4">
              <label>Confirm New Password</label>
              <input type="password" placeholder="*********" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <a href="#" className="utf-centered-button button">
              Save Changes
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        {/* MAIN CONTENT */}
        <div className="margin-top-65" />
        <Footer/>
        </>
    )
}