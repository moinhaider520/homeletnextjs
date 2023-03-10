import { Component } from "react";
import Image from "next/image";
export default class PreviewForm extends Component{
continue = e =>{
    e.preventDefault();
    this.props.nextStep();
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
        <section className="style_property_preview_section__Hr5jm">
                    
        <div className="style_property_preview_content__JQ3uC">
        <div className="style_property_score_section__N3J41 undefined">
            <div className="style_property_score_content__XwDtQ">
                <h2>Property Scorecard</h2>
                <p className="gray-color">
                    To improve your property score, add more features
                </p>
            </div>
            <div className="style_property_score_chart__cMk_t style_chart_55__63huQ">
            <span />
            <span className="style_label__EkiwW"></span>
            </div>
        </div>

          <div className="style_preview_media_wrapper__rDEzW">
            <Image width="100" height="100"
              src="../../images/upload_image_placeholder.svg"
              alt="Property Name for Rent/Sale"
              className="style_image_placeholder__rpvze"
            />
          </div>
          <div className="style_preview_content_wrapper__YYVrK">
            <section className="style_price_wrapper__PQ2nn">
              <span className="style_currency__u1xtN"></span>
            </section>
            <section className="style_title_wrapper__iSnOM">
              <div className="style_title_wrapper_without_location__Oc1Zb">
                <div>
                  <h3>&lt;                        {values.bathrooms}&gt;</h3>
                </div>
              </div>
              <span className="style_location__ZMD3F">&lt;Area, City&gt;</span>
            </section>
            <section className="style_amenities_wrapper___Y9bd">
              <div className="style_title_wrapper_without_location__Oc1Zb">
                <div>
                  <ul className="style_amenities_list__01vgI">
                    <li>
                      <span className="style_item_icon__WaULw">
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0
                          }}
                        >
                          <Image width="100" height="100"
                            alt="0 Beds"
                            src="../../images/beadroom.svg"
                            decoding="async"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                              objectFit: "cover"
                            }}
                          />
                        </span>
                      </span>
                      <span className="style_item_placeholder__HT3uN" />
                    </li>
                    <li>
                      <span className="style_item_icon__WaULw">

                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0
                          }}
                        >
                          
                          <Image width="100" height="100"
                            alt="0 Beds"
                            src="../../images/bathroom.svg"
                            decoding="async"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                              objectFit: "contain"
                            }}
                            sizes="100vw"
                          />
                        </span>
                      </span>
                      <span className="style_item_placeholder__HT3uN" />
                    </li>
                    <li>
                      <span className="style_item_icon__WaULw">
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0
                          }}
                        >
                          <Image width="100" height="100"
                            alt="0 Garage"
                            src="../../images/parking.svg"
                            decoding="async"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                              objectFit: "contain"
                            }}
                            sizes="100vw"
                          />
                        </span>
                      </span>
                      <span className="style_item_placeholder__HT3uN" />
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="style_default_preview_section__gENi8">
              <div className="style_about_property_title__mxeOk">
                <div>
                  <h3 className="style_section_title__PAkKK">
                    About this property
                  </h3>
                </div>
              </div>
              <div className="mt-3 style_section_placeholder__5qzN6">
                <span className="style_single_line_full__6d3PO" />
                <span className="style_single_line_full__6d3PO" />
                <span className="style_single_line_full__6d3PO" />
                <span className="style_single_line_full__6d3PO" />
                <span className="style_single_line_half__Qm3bp" />
              </div>
            </section>
            <section className="style_default_preview_section__gENi8">
              <h3 className="style_section_title__PAkKK">Features</h3>
              <div className="mt-3 style_features_placeholder__blho2">
                <span className="style_media__F8RKy" />
              </div>
            </section>
            <section className="style_default_preview_section__gENi8">
              <h3 className="style_section_title__PAkKK">The Neighbourhood</h3>
              <p />
              <div className="mt-3 style_section_placeholder__5qzN6">
                <span className="style_single_line_full__6d3PO" />
                <span className="style_single_line_full__6d3PO" />
                <span className="style_single_line_full__6d3PO" />
                <span className="style_single_line_full__6d3PO" />
                <span className="style_single_line_half__Qm3bp" />
              </div>
            </section>
            <section className="style_default_preview_section__gENi8">
              <h3 className="style_section_title__PAkKK">Location on map</h3>
              <div className="mt-3 style_section_placeholder__5qzN6">
                <span className="style_single_line_full__6d3PO" />
                <span className="style_single_line_full__6d3PO" />
                <span className="style_single_line_full__6d3PO" />
                <span className="style_single_line_full__6d3PO" />
                <span className="style_single_line_half__Qm3bp" />
              </div>
            </section>
          </div>
        </div>
      </section>
      </>
        )
    }
}