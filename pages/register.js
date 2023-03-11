import Heads from "components/Head"
import IndividualDetails from "components/RegistrationForm/IndividualDetails"
import RegistrationForm from "components/RegistrationForm/RegistrationForm"
import Head from "next/head"
import Link from "next/link"
import { Component } from "react"
export default function Register( {data} ){

  const modeldataArray = Object.entries(data.type_userss);
  const modelgenderArray = Object.entries(data.genders);

    return(
        <>
        <div class="margin-top-65"></div>
        
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="my-account">
                <div className="tabs-container">
                  {/* Register */}
                    <div className="utf-welcome-text-item">
                      <h3>Create Your New Account!</h3>
                        <span>
                        Do not Have an Account? <Link href="/login">Log In!</Link>
                        </span>
                    </div>
                    <RegistrationForm
                    modeldataArray = {modeldataArray}
                    modelgenderArray = {modelgenderArray}
                    />
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div class="margin-top-65"></div>
        </>
    )
}


export async function getStaticProps() {
  const res = await fetch('https://www.homelet.pk/homelet/web/next-register',{mode: 'no-cors'});
  const data = await res.json();

  return {
    props: {
      data
    },
  };
}

