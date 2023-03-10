import Footer from "components/Footer";
import Header from "components/Header";
import Link from "next/link";
export default function MyProperty(){
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
                <Link href="/myproperty" className="current">
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
          <a href="#">
            <img src="images/banner-add-2.jpg" alt="banner-add-2" />
          </a>
        </div>
      </div>
    </div>
    <div className="col-md-9">
      <table className="manage-table responsive-table">
        <tbody>
          <tr>
            <th>Property</th>
            <th>Date</th>
            <th style={{ textAlign: "right" }}>Action</th>
          </tr>
          {/* Item #1 */}
          <tr>
            <td className="utf-title-container">
              <img src="images/listing-02.jpg" alt="" />
              <div className="title">
                <h4>
                  <a href="#">Renovated Luxury Apartment</a>
                </h4>
                <span>2021 San Pedro, Los Angeles</span>{" "}
                <span className="table-property-price">$20,000/mo</span>
              </div>
            </td>
            <td className="utf-expire-date">12 Jan, 2021</td>
            <td className="action">
              <a href="#" className="view tooltip left">
                <i className="icon-feather-eye" />
              </a>
              <a href="#" className="edit tooltip left">
                <i className="icon-feather-edit" />
              </a>
              <a href="#" className="delete tooltip left">
                <i className="icon-feather-trash-2" />
              </a>
            </td>
          </tr>
          {/* Item #2 */}
          <tr>
            <td className="utf-title-container">
              <img src="images/listing-05.jpg" alt="" />
              <div className="title">
                <h4>
                  <a href="#">Renovated Luxury Apartment</a>
                </h4>
                <span>2021 San Pedro, Los Angeles</span>{" "}
                <span className="table-property-price">$20,000/mo</span>
              </div>
            </td>
            <td className="utf-expire-date">12 Jan, 2021</td>
            <td className="action">
              <a href="#" className="view tooltip left">
                <i className="icon-feather-eye" />
              </a>
              <a href="#" className="edit tooltip left">
                <i className="icon-feather-edit" />
              </a>
              <a href="#" className="delete tooltip left">
                <i className="icon-feather-trash-2" />
              </a>
            </td>
          </tr>
          {/* Item #3 */}
          <tr>
            <td className="utf-title-container">
              <img src="images/listing-04.jpg" alt="" />
              <div className="title">
                <h4>
                  <a href="#">Renovated Luxury Apartment</a>
                </h4>
                <span>2021 San Pedro, Los Angeles</span>{" "}
                <span className="table-property-price">$20,000/mo</span>
              </div>
            </td>
            <td className="utf-expire-date">12 Jan, 2021</td>
            <td className="action">
              <a href="#" className="view tooltip left">
                <i className="icon-feather-eye" />
              </a>
              <a href="#" className="edit tooltip left">
                <i className="icon-feather-edit" />
              </a>
              <a href="#" className="delete tooltip left">
                <i className="icon-feather-trash-2" />
              </a>
            </td>
          </tr>
          {/* Item #4 */}
          <tr>
            <td className="utf-title-container">
              <img src="images/listing-06.jpg" alt="" />
              <div className="title">
                <h4>
                  <a href="#">Renovated Luxury Apartment</a>
                </h4>
                <span>2021 San Pedro, Los Angeles</span>{" "}
                <span className="table-property-price">$20,000/mo</span>
              </div>
            </td>
            <td className="utf-expire-date">12 Jan, 2021</td>
            <td className="action">
              <a href="#" className="view tooltip left">
                <i className="icon-feather-eye" />
              </a>
              <a href="#" className="edit tooltip left">
                <i className="icon-feather-edit" />
              </a>
              <a href="#" className="delete tooltip left">
                <i className="icon-feather-trash-2" />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <a
        href="add-new-property.html"
        className="utf-centered-button margin-top-30 button"
      >
        Submit New Property
      </a>
    </div>
  </div>
</div>

        {/* MAIN CONTENT */}
        <div className="margin-top-65" />
        <Footer/>
        </>
    )
}