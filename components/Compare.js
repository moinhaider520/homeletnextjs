export default function Compare(){
    return(
        <>
        <div className="utf-compare-slidebar-area">
      <div className="utf-smt-trigger-item" />
      <div className="utf-smt-content">
        <h4>
          Compare Property
          <span className="utf-smt-mobile-trigger-item" />
        </h4>
        <div className="utf-smt-property-item">
          {/* Property */}
          <div className="utf-listing-item compact">
            <a
              href="single-property-page-2.html"
              className="utf-smt-listing-img-container"
            >
              <div className="utf-remove-compare-item">
                <i className="icon-line-awesome-close" />
              </div>
              <div className="utf-listing-badges-item">
                <span className="for-sale">For Sale</span>
              </div>
              <div className="utf-listing-img-content-item">
                {" "}
                <span className="utf-listing-compact-title-item">
                  Renovated Luxury Apartment <i>$420,000</i>
                </span>{" "}
              </div>
              <img src="images/listing-01.jpg" alt="" />{" "}
            </a>
          </div>
          {/* Property */}
          <div className="utf-listing-item compact">
            <a
              href="single-property-page-2.html"
              className="utf-smt-listing-img-container"
            >
              <div className="utf-remove-compare-item">
                <i className="icon-line-awesome-close" />
              </div>
              <div className="utf-listing-badges-item">
                <span className="for-sale">For Sale</span>
              </div>
              <div className="utf-listing-img-content-item">
                {" "}
                <span className="utf-listing-compact-title-item">
                  Renovated Luxury Apartment <i>$420,000</i>
                </span>{" "}
              </div>
              <img src="images/listing-02.jpg" alt="" />{" "}
            </a>
          </div>
        </div>
        <div className="utf-smt-buttons">
          <a href="compare-properties.html" className="button">
            Compare Property
          </a>
        </div>
      </div>
    </div>
        </>
    )
}