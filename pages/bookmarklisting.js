import Footer from "components/Footer";
import Header from "components/Header";
import Link from "next/link";
export default function BookmarkListing(){
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
                <Link href="/bookmarklisting" className="current">
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
          <a href="#">
            <img src="images/banner-add-2.jpg" alt="banner-add-2" />
          </a>
        </div>
      </div>
    </div>
    <div className="col-md-9">
      <table className="manage-table bookmarks-table responsive-table">
        <tbody>
          <tr>
            <th>Bookmark Property Listing</th>
            <th />
          </tr>
          {/* Item #1 */}
          <tr>
            <td className="utf-title-container">
              <img src="images/listing-05.jpg" alt="" />
              <div className="title">
                <h4>
                  <a href="#">Renovated Luxury Apartment</a>
                </h4>
                <span>2021 San Pedro, Los Angeles 90015</span>{" "}
                <span className="table-property-price">$22,000/mo</span>
              </div>
            </td>
            <td className="action">
              <a href="#" className="delete tooltip left">
                <i className="icon-feather-trash-2" />
              </a>
            </td>
          </tr>
          {/* Item #2 */}
          <tr>
            <td className="utf-title-container">
              <img src="images/listing-06.jpg" alt="" />
              <div className="title">
                <h4>
                  <a href="#">Renovated Luxury Apartment</a>
                </h4>
                <span>2021 San Pedro, Los Angeles 90015</span>{" "}
                <span className="table-property-price">$20,000/mo</span>
              </div>
            </td>
            <td className="action">
              <a href="#" className="delete tooltip left">
                <i className="icon-feather-trash-2" />
              </a>
            </td>
          </tr>
          {/* Item #3 */}
          <tr>
            <td className="utf-title-container">
              <img src="images/listing-02.jpg" alt="" />
              <div className="title">
                <h4>
                  <a href="#">Renovated Luxury Apartment</a>
                </h4>
                <span>2021 San Pedro, Los Angeles 90015</span>{" "}
                <span className="table-property-price">$15,000/mo</span>
              </div>
            </td>
            <td className="action">
              <a href="#" className="delete tooltip left">
                <i className="icon-feather-trash-2" />
              </a>
            </td>
          </tr>
          {/* Item #4 */}
          <tr>
            <td className="utf-title-container">
              <img src="images/listing-04.jpg" alt="" />
              <div className="title">
                <h4>
                  <a href="#">Renovated Luxury Apartment</a>
                </h4>
                <span>2021 San Pedro, Los Angeles 90015</span>{" "}
                <span className="table-property-price">$18,000/mo</span>
              </div>
            </td>
            <td className="action">
              <a href="#" className="delete tooltip left">
                <i className="icon-feather-trash-2" />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

        {/* MAIN CONTENT */}
        <div className="margin-top-65" />
        <Footer/>
        </>
    )
}