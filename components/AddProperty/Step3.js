import { Component } from "react";
import Image from "next/image";
export default class Step3 extends Component{
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
<div className="style_steper_wrapper__3YtEK">
  <div className="style_steper_navbar__Kmagi has-swiper-slider">
    <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events undefined has-stepper-items">
      <div className="swiper-wrapper">
        <div
        className="swiper-slide swiper-slide-active"
        data-swiper-slide-index={1}
        >
        <span className="style_steper_item_wrapper__TwBbW">
          <span
          id={1}
          className="stepper_tooltip style_steper_item__66e3e"
          aria-label="Select the purpose"
          >
          <span>1</span>
        </span>
        </span>
        </div>
                    
        <div
        className="swiper-slide swiper-slide-next"
        data-swiper-slide-index={2}
        >
        <span className="style_steper_item_wrapper__TwBbW">
          <span
          id={2}
          className="stepper_tooltip style_steper_item__66e3e "
          aria-label="Select the property type"
          >
          <span>2</span>
        </span>
        </span>
          </div>

          <div className="swiper-slide" data-swiper-slide-index={3}>
            <span className="style_steper_item_wrapper__TwBbW">
              <span
                id={3}
                className="style_steper_item__66e3e style_focus__PX6k7 "
                aria-label="Select the property sub-type"
              >
              <span>3</span>
              </span>
            </span>
            </div>
                    
            <div className="swiper-slide" data-swiper-slide-index={4}>
              <span className="style_steper_item_wrapper__TwBbW">
                <span
                  id={4}
                  data-tooltip="Add size and price"
                  className="style_steper_item__66e3e "
                  aria-label="Add size and price"
                >
                <span>4</span>
              </span>
              </span>
            </div>
                    
            <div className="swiper-slide" data-swiper-slide-index={5}>
              <span className="style_steper_item_wrapper__TwBbW">
                <span
                  id={5}
                  className="style_steper_item__66e3e "
                  aria-label="Add title and description"
                  >
                  <span>5</span>
                </span>
                </span>
            </div>

            <div className="swiper-slide" data-swiper-slide-index={6}>
              <span className="style_steper_item_wrapper__TwBbW">
                <span
                  id={6}
                  className="style_steper_item__66e3e "
                  aria-label="Specify the location"
                  >
                  <span>6</span>
                </span>
              </span>
            </div>
                    
            <div className="swiper-slide" data-swiper-slide-index={7}>
              <span className="style_steper_item_wrapper__TwBbW">
                <span
                  id={7}
                  className="style_steper_item__66e3e "
                  aria-label="Year built and additional info"
                >
                <span>7</span>
                </span>
                </span>
            </div>
                    
              <div className="swiper-slide" data-swiper-slide-index={8}>
                <span className="style_steper_item_wrapper__TwBbW">
                  <span
                    id={8}
                    className="style_steper_item__66e3e "
                    aria-label="Add photos"
                    >
                    <span>8</span>
                    </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      
<section className="style_property_detail_section__LE1g_">
  <h3 className="style_inner_title__pzjcU">Select the property subtype</h3>
  <ul className="style_property_subtype_action__RR7G4">
    <li>
      <label className="style_type_btn__zofvl">
        <input id="house" type="radio" name="wantedBtn" onChange={handleChange('propertysubtype')} defaultValue={'House'} />
        <span className="style_content__FhYfn">
          <span className="style_img_wrapper__tI0fk">
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
                inset: 0
              }}
            >
              <Image width="100" height="100"
                alt="icon"
                src="/images/house.svg"
                decoding="async"
                data-nimg="fill"
                style={{
                  position: "absolute",
                  inset: 0,
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
          <span className="style_label__EkiwW">House</span>
        </span>
      </label>
    </li>
    <li>
      <label className="style_type_btn__zofvl">
        <input
          id="guest house"
          type="radio"
          name="wantedBtn"
          onChange={handleChange('propertysubtype')} defaultValue={'Guest House'}
        />
        <span className="style_content__FhYfn">
          <span className="style_img_wrapper__tI0fk">
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
                inset: 0
              }}
            >
              <Image width="100" height="100"
                alt="icon"
                src="/images/guesthouse.svg"
                decoding="async"
                data-nimg="fill"
                style={{
                  position: "absolute",
                  inset: 0,
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
          <span className="style_label__EkiwW">Guest house</span>
        </span>
      </label>
    </li>
    <li>
      <label className="style_type_btn__zofvl">
        <input id="flat" type="radio" name="wantedBtn" defaultValue="flat" />
        <span className="style_content__FhYfn">
          <span className="style_img_wrapper__tI0fk">
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
                inset: 0
              }}
            >
              <Image width="100" height="100"
                alt="icon"
                src="/images/flat.svg"
                decoding="async"
                data-nimg="fill"
                style={{
                  position: "absolute",
                  inset: 0,
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
          <span className="style_label__EkiwW">Flat</span>
        </span>
      </label>
    </li>
    <li>
      <label className="style_type_btn__zofvl">
        <input
          id="hostel"
          type="radio"
          name="wantedBtn"
          defaultValue="hostel"
        />
        <span className="style_content__FhYfn">
          <span className="style_img_wrapper__tI0fk">
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
                inset: 0
              }}
            >
              <Image width="100" height="100"
                alt="icon"
                src="/images/hostel.svg"
                decoding="async"
                data-nimg="fill"
                style={{
                  position: "absolute",
                  inset: 0,
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
          <span className="style_label__EkiwW">Hostel</span>
        </span>
      </label>
    </li>
    <li>
      <label className="style_type_btn__zofvl">
        <input
          id="upper portion"
          type="radio"
          name="wantedBtn"
          defaultValue="upper_portion"
        />
        <span className="style_content__FhYfn">
          <span className="style_img_wrapper__tI0fk">
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
                inset: 0
              }}
            >
              <Image width="100" height="100"
                alt="icon"
                src="/images/upperportion.svg"
                decoding="async"
                data-nimg="fill"
                style={{
                  position: "absolute",
                  inset: 0,
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
          <span className="style_label__EkiwW">Upper portion</span>
        </span>
      </label>
    </li>
    <li>
      <label className="style_type_btn__zofvl">
        <input
          id="lower portion"
          type="radio"
          name="wantedBtn"
          defaultValue="lower_portion"
        />
        <span className="style_content__FhYfn">
          <span className="style_img_wrapper__tI0fk">
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
                inset: 0
              }}
            >
              <Image width="100" height="100"
                alt="icon"
                src="/images/lowerportion.svg"
                decoding="async"
                data-nimg="fill"
                style={{
                  position: "absolute",
                  inset: 0,
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
          <span className="style_label__EkiwW">Lower portion</span>
        </span>
      </label>
    </li>
    <li>
      <label className="style_type_btn__zofvl">
        <input id="room" type="radio" name="wantedBtn" defaultValue="room" />
        <span className="style_content__FhYfn">
          <span className="style_img_wrapper__tI0fk">
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
                inset: 0
              }}
            >
              <Image width="100" height="100"
                alt="icon"
                src="/images/room.svg"
                decoding="async"
                data-nimg="fill"
                style={{
                  position: "absolute",
                  inset: 0,
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
          <span className="style_label__EkiwW">Room</span>
        </span>
      </label>
    </li>
    <li>
      <label className="style_type_btn__zofvl">
        <input
          id="farm house"
          type="radio"
          name="wantedBtn"
          defaultValue="farm_house"
        />
        <span className="style_content__FhYfn">
          <span className="style_img_wrapper__tI0fk">
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
                inset: 0
              }}
            >
              <Image width="100" height="100"
                alt="icon"
                src="/images/farmhouse.svg"
                decoding="async"
                data-nimg="fill"
                style={{
                  position: "absolute",
                  inset: 0,
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
          <span className="style_label__EkiwW">Farm house</span>
        </span>
      </label>
    </li>
    <li>
      <label className="style_type_btn__zofvl">
        <input
          id="penthouse"
          type="radio"
          name="wantedBtn"
          defaultValue="penthouse"
        />
        <span className="style_content__FhYfn">
          <span className="style_img_wrapper__tI0fk">
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
                inset: 0
              }}
            >
              <Image width="100" height="100"
                alt="icon"
                src="/images/penthouse.svg"
                decoding="async"
                data-nimg="fill"
                style={{
                  position: "absolute",
                  inset: 0,
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
          <span className="style_label__EkiwW">Penthouse</span>
        </span>
      </label>
    </li>
    <li>
      <label className="style_type_btn__zofvl">
        <input
          id="hotel suites"
          type="radio"
          name="wantedBtn"
          defaultValue="hotel_suites"
        />
        <span className="style_content__FhYfn">
          <span className="style_img_wrapper__tI0fk">
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
                inset: 0
              }}
            >
              <Image width="100" height="100"
                alt="icon"
                src="/images/hotel_suites.svg"
                decoding="async"
                data-nimg="fill"
                style={{
                  position: "absolute",
                  inset: 0,
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
          <span className="style_label__EkiwW">Hotel suites</span>
        </span>
      </label>
    </li>
    <li>
      <label className="style_type_btn__zofvl">
        <input
          id="basement"
          type="radio"
          name="wantedBtn"
          defaultValue="basement"
        />
        <span className="style_content__FhYfn">
          <span className="style_img_wrapper__tI0fk">
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
                inset: 0
              }}
            >
              <Image width="100" height="100"
                alt="icon"
                src="/images/basement.svg"
                decoding="async"
                data-nimg="fill"
                style={{
                  position: "absolute",
                  inset: 0,
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
          <span className="style_label__EkiwW">Basement</span>
        </span>
      </label>
    </li>
    <li>
      <label className="style_type_btn__zofvl">
        <input
          id="annexe"
          type="radio"
          name="wantedBtn"
          defaultValue="annexe"
        />
        <span className="style_content__FhYfn">
          <span className="style_img_wrapper__tI0fk">
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
                inset: 0
              }}
            >
              <Image width="100" height="100"
                alt="icon"
                src="/images/annexe.svg"
                decoding="async"
                data-nimg="fill"
                style={{
                  position: "absolute",
                  inset: 0,
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
          <span className="style_label__EkiwW">Annexe</span>
        </span>
      </label>
    </li>
  </ul>
</section>
<div className="style_page_content_footer__mfW3X">
              <div className="style_footer_container__Ffeyr container">
                <div className="style_footer_action_content__yGMSn">
                  <span className="style_empty_action__Q2bot" />
                  <button className="style_footer_action__Auaw1 btn btn-lg btn-light " onClick={this.back}>
                  Back
                  </button>
                  {/* <button
                  className="style_footer_action__Auaw1 style_submit_action_2__o_85S  style_submit_action_desktop__sLdbK
                  style_process_action_outline__lckCk outline-accent-btn
                  btn btn-lg"
                  >
                  Submit
                  </button> */}
                  <button
                    disabled=""
                    className="style_footer_action__Auaw1  btn btn-lg style_process_action__EvzS_ btn-accent"
                    onClick={this.continue}
                    >
                    Next
                  </button>
                </div>
              </div>
              </div>
</>
        )
    }
}