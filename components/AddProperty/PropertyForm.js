import { Component } from "react";
import PreviewForm from "./PreviewForm";
import Step1 from "./Step1";
import Step10 from "./Step10";
import Step11 from "./Step11";
import Step12 from "./Step12";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import Step9 from "./Step9";

export default class PropertyForm extends Component{
    state={
        step:1,
        purpose:'',
        propertytype:'',
        propertysubtype: '',
        size:'',
        unit:'',
        price:'',
        title:'',
        description:'',
        location:'',
        yearbuilt:'',
        bedrooms:'',
        bathrooms:'',
        parking:'',
        image:'',
        details:'',
        features:'',
        services:'',
        floors:'',
        floorunit:'',
        propertyfacing:'',
        bedroomincrement:'',
    }
    nextStep = ()=>{
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }
    
    prevStep = ()=>{
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e =>{
        this.setState({[input]: e.target.value});
    }
    
    

    render(){
        const {step} = this.state;
        const {purpose, propertytype, propertysubtype, size, unit, price, title, description,location,yearbuilt,bedrooms,bathrooms,parking,image,details,features,services,floors,floorunit,propertyfacing,bedroomincrement} = this.state;
        const values = {purpose, propertytype, propertysubtype, size, unit, price, title, description,location,yearbuilt,bedrooms,bathrooms,parking,image,details,features,services,floors,floorunit,propertyfacing}
        
        switch(step){
            case 1:
              return(
                <>
                <section className="style_add_property_page_wrapper___HPy2">
                    <div className="style_add_property_page_content__6vkug">
                     <div className="style_add_property_container__qkUWI container">
                        <section className="style_property_content_section__ZLslk">
                            <div className="false style_page_title_section__D42UD">
                                <div className="false style_page_title_section__D42UD">
                                    <h1 className="style_title__CFuHg">Add Property</h1>
                                </div>
                            </div>

                        <Step1
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        />

                        </section>
                    
                        <PreviewForm
                        handleChange={this.handleChange}
                        values={values}
                        />

                    </div>
                    </div>
                </section>
                </>
              )
            case 2:
              return(
                <>
                <section className="style_add_property_page_wrapper___HPy2">
                    <div className="style_add_property_page_content__6vkug">
                     <div className="style_add_property_container__qkUWI container">
                        <section className="style_property_content_section__ZLslk">
                            <div className="false style_page_title_section__D42UD">
                                <div className="false style_page_title_section__D42UD">
                                    <h1 className="style_title__CFuHg">Add Property</h1>
                                </div>
                            </div>

                        <Step2
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        />

                        </section>
                    
                        <PreviewForm
                        handleChange={this.handleChange}
                        values={values}
                        />
                        
                    </div>
                    </div>
                </section>
                </>
              )
          case 3:
              return(
                  <>
                <section className="style_add_property_page_wrapper___HPy2">
                    <div className="style_add_property_page_content__6vkug">
                     <div className="style_add_property_container__qkUWI container">
                        <section className="style_property_content_section__ZLslk">
                            <div className="false style_page_title_section__D42UD">
                                <div className="false style_page_title_section__D42UD">
                                    <h1 className="style_title__CFuHg">Add Property</h1>
                                </div>
                            </div>

                  <Step3
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  values={values}
                  />

                        </section>
                    
                        <PreviewForm
                        handleChange={this.handleChange}
                        values={values}
                        />
                        
                    </div>
                    </div>
                </section>
                  </>
              )
          case 4:
              return(
                  <>
                <section className="style_add_property_page_wrapper___HPy2">
                    <div className="style_add_property_page_content__6vkug">
                     <div className="style_add_property_container__qkUWI container">
                        <section className="style_property_content_section__ZLslk">
                            <div className="false style_page_title_section__D42UD">
                                <div className="false style_page_title_section__D42UD">
                                    <h1 className="style_title__CFuHg">Add Property</h1>
                                </div>
                            </div>

                            <Step4
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}/>

                        </section>
                    
                        <PreviewForm
                        handleChange={this.handleChange}
                        values={values}
                        />
                        
                    </div>
                    </div>
                </section>

                  </>
              )
        case 5:
            return(
                <>
                <section className="style_add_property_page_wrapper___HPy2">
                    <div className="style_add_property_page_content__6vkug">
                     <div className="style_add_property_container__qkUWI container">
                        <section className="style_property_content_section__ZLslk">
                            <div className="false style_page_title_section__D42UD">
                                <div className="false style_page_title_section__D42UD">
                                    <h1 className="style_title__CFuHg">Add Property</h1>
                                </div>
                            </div>
                            
                            <Step5
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}/>
                        </section>
                    
                        <PreviewForm
                        handleChange={this.handleChange}
                        values={values}
                        />
                        
                    </div>
                    </div>
                </section>
                </>
            )
            case 6:
            return(
                <>
                <section className="style_add_property_page_wrapper___HPy2">
                    <div className="style_add_property_page_content__6vkug">
                     <div className="style_add_property_container__qkUWI container">
                        <section className="style_property_content_section__ZLslk">
                            <div className="false style_page_title_section__D42UD">
                                <div className="false style_page_title_section__D42UD">
                                    <h1 className="style_title__CFuHg">Add Property</h1>
                                </div>
                            </div>
                            
                            <Step6
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}/>

                        </section>
                    
                        <PreviewForm
                        handleChange={this.handleChange}
                        values={values}
                        />
                        
                    </div>
                    </div>
                </section>
                </>
            )
            case 7:
            return(
                <>
                <section className="style_add_property_page_wrapper___HPy2">
                    <div className="style_add_property_page_content__6vkug">
                     <div className="style_add_property_container__qkUWI container">
                        <section className="style_property_content_section__ZLslk">
                            <div className="false style_page_title_section__D42UD">
                                <div className="false style_page_title_section__D42UD">
                                    <h1 className="style_title__CFuHg">Add Property</h1>
                                </div>
                            </div>
                            
                            <Step7
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}/>

                        </section>
                    
                        <PreviewForm
                        handleChange={this.handleChange}
                        values={values}
                        />
                        
                    </div>
                    </div>
                </section>
                </>
            )
            case 8:
            return(
                <>
                <section className="style_add_property_page_wrapper___HPy2">
                    <div className="style_add_property_page_content__6vkug">
                     <div className="style_add_property_container__qkUWI container">
                        <section className="style_property_content_section__ZLslk">
                            <div className="false style_page_title_section__D42UD">
                                <div className="false style_page_title_section__D42UD">
                                    <h1 className="style_title__CFuHg">Add Property</h1>
                                </div>
                            </div>
                            
                            <Step8
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}/>

                        </section>
                    
                        <PreviewForm
                        handleChange={this.handleChange}
                        values={values}
                        />
                        
                    </div>
                    </div>
                </section>
                </>
            )
            case 9:
            return(
                <>
                <section className="style_add_property_page_wrapper___HPy2">
                    <div className="style_add_property_page_content__6vkug">
                     <div className="style_add_property_container__qkUWI container">
                        <section className="style_property_content_section__ZLslk">
                            <div className="false style_page_title_section__D42UD">
                                <div className="false style_page_title_section__D42UD">
                                    <h1 className="style_title__CFuHg">Add Property</h1>
                                </div>
                            </div>
                            
                            <Step9
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}/>

                        </section>
                    
                        <PreviewForm
                        handleChange={this.handleChange}
                        values={values}
                        />
                        
                    </div>
                    </div>
                </section>
                </>
            )
            case 10:
            return(
                <>
                <section className="style_add_property_page_wrapper___HPy2">
                    <div className="style_add_property_page_content__6vkug">
                     <div className="style_add_property_container__qkUWI container">
                        <section className="style_property_content_section__ZLslk">
                            <div className="false style_page_title_section__D42UD">
                                <div className="false style_page_title_section__D42UD">
                                    <h1 className="style_title__CFuHg">Add Property</h1>
                                </div>
                            </div>
                            
                            <Step10
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}/>

                        </section>
                    
                        <PreviewForm
                        handleChange={this.handleChange}
                        values={values}
                        />
                        
                    </div>
                    </div>
                </section>
                </>
            )
            case 11:
            return(
                <>
                <section className="style_add_property_page_wrapper___HPy2">
                    <div className="style_add_property_page_content__6vkug">
                     <div className="style_add_property_container__qkUWI container">
                        <section className="style_property_content_section__ZLslk">
                            <div className="false style_page_title_section__D42UD">
                                <div className="false style_page_title_section__D42UD">
                                    <h1 className="style_title__CFuHg">Add Property</h1>
                                </div>
                            </div>
                            
                            <Step11
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}/>

                        </section>
                    
                        <PreviewForm
                        handleChange={this.handleChange}
                        values={values}
                        />
                        
                    </div>
                    </div>
                </section>
                </>
            )
            case 12:
            return(
                <>
                <section className="style_add_property_page_wrapper___HPy2">
                    <div className="style_add_property_page_content__6vkug">
                     <div className="style_add_property_container__qkUWI container">
                        <section className="style_property_content_section__ZLslk">
                            <div className="false style_page_title_section__D42UD">
                                <div className="false style_page_title_section__D42UD">
                                    <h1 className="style_title__CFuHg">Add Property</h1>
                                </div>
                            </div>
                            
                            <Step12
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}/>

                        </section>
                    
                        <PreviewForm
                        handleChange={this.handleChange}
                        values={values}
                        />
                        
                    </div>
                    </div>
                </section>
                </>
            )
          }
    }
}