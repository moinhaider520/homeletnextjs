import { Component } from "react";
import { useState } from "react";
export default class Step7 extends Component{

  continue = e =>{
    e.preventDefault();
    this.props.nextStep();
}
back = e =>{
    e.preventDefault();
    this.props.prevStep();
}  

state = { counter: this.props.min , counter2: this.props.min, counter3: this.props.min};
handleDecrement = () => {
  let value = this.validateValue(this.state.counter - this.props.step);
  this.setState({counter: value});
}
handleIncrement = () => {
  let value = this.validateValue(this.state.counter + this.props.step);
  this.setState({counter: value});
}
handleChangeCounter = (e) => {
  let value = (e.target.value ? parseInt(e.target.value) : 0);
  value = this.validateValue(value);
  this.setState({counter: value});
}


handleDecrement2 = () => {
  let value = this.validateValue(this.state.counter2 - this.props.step);
  this.setState({counter2: value});
}
handleIncrement2 = () => {
  let value = this.validateValue(this.state.counter2 + this.props.step);
  this.setState({counter2: value});
}
handleChange2 = (e) => {
  let value = (e.target.value ? parseInt(e.target.value) : 0);
  value = this.validateValue(value);
  this.setState({counter2: value});
}

handleDecrement3 = () => {
  let value = this.validateValue(this.state.counter3 - this.props.step);
  this.setState({counter3: value});
}
handleIncrement3 = () => {
  let value = this.validateValue(this.state.counter3 + this.props.step);
  this.setState({counter3: value});
}
handleChange3 = (e) => {
  let value = (e.target.value ? parseInt(e.target.value) : 0);
  value = this.validateValue(value);
}

validateValue(value) {
  if(value < this.props.min) {
      value = this.props.min;
  }
  if(value > this.props.max) {
      value = this.props.max;
  }
  return value;
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
                className="style_steper_item__66e3e "
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
                  className="style_steper_item__66e3e"
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
                  className="style_steper_item__66e3e"
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
                  className="style_steper_item__66e3e style_focus__PX6k7"
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
  <h3 className="style_inner_title__pzjcU">Year Built:</h3>
  <div className="mb-3 input_wrapper">
    <input
      type="text"
      placeholder="E.g 1996"
      className="form-control"
      required=""
      defaultValue=""
    />
    <span className="form-text">The year in which your house was built</span>
  </div>
  <div className="style_property_incremented_filters__Nxmba">
    <div className="style_incremented_filter_item__msLoh">
      <label>Bedrooms</label>
      <div className="style_item_buttons__nt3Df">
        <button className="style_minus_button__VcM6n" disabled="" onClick={this.handleDecrement} />
        <span className="style_value__ApUjN" onChange={handleChange('bedrooms')}>{this.state.counter}</span>
        <button className="style_plus_button__WFFNw" onClick={this.handleIncrement}/>
      </div>
    </div>
    <div className="style_incremented_filter_item__msLoh">
      <label>Bathrooms</label>
      <div className="style_item_buttons__nt3Df">
      <button className="style_minus_button__VcM6n" disabled="" onClick={this.handleDecrement2} />
        <span className="style_value__ApUjN" contentEditable="true" onChange={handleChange('bathrooms')}>{this.state.counter2}</span>
        <button className="style_plus_button__WFFNw" onClick={this.handleIncrement2}/>
      </div>
    </div>
    <div className="style_incremented_filter_item__msLoh">
      <label>Car Parkings</label>
      <div className="style_item_buttons__nt3Df">
      <button className="style_minus_button__VcM6n" disabled="" onClick={this.handleDecrement3} />
        <span className="style_value__ApUjN" onChange={handleChange('parkings')}>{this.state.counter3}</span>
        <button className="style_plus_button__WFFNw" onClick={this.handleIncrement3}/>
      </div>
    </div>
  </div>
</section>
<div className="style_page_content_footer__mfW3X">
              <div className="style_footer_container__Ffeyr container">
                <div className="style_footer_action_content__yGMSn">
                  <span className="style_empty_action__Q2bot" />
                  <button className="style_footer_action__Auaw1 btn btn-lg btn-light " onClick={this.back}>
                  Back
                  </button>
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
Step7.defaultProps = {
  min: 0,
  max: 10,
  step: 1
};