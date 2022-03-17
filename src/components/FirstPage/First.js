import React,{Fragment} from "react";
import dots from "../images/Lines.svg";
import "./First.css";
import house from "../images/House.svg";
import people from "../images/People.svg";
import retire from "../images/Retire.svg";
import career from "../images/Career.svg";
import sun from "../images/Sun.svg";
import other from "../images/Dots.svg";
import arrow from "../images/arrow.svg";
import { NavLink } from "react-router-dom";

const First=()=>{
    return(
   <Fragment>
      
       <div className="container mt-5 text-center">
       <NavLink to="/"><img className="arrow" src={arrow} /></NavLink>
           <img className="lines" src={dots} />
           <h1 className="goal mt-5 text-center">Set your goal</h1>
           <div className="container-fluid mt-4 text-start d-flex section-home">
          <img className="icons" src={house} />
          <p className="about my-auto">Buy a Home</p>
           </div>
           <div className="container-fluid mt-5 text-start d-flex section-home">
          <img className="icons" src={people} />
          <p className="about my-auto">Rising my family</p>
           </div>
           <div className="container-fluid mt-5 text-start d-flex section-home">
          <img className="icons" src={retire} />
          <p className="about my-auto">Retirement</p>
           </div>
           <div className="container-fluid mt-5 text-start d-flex section-home">
          <img className="icons" src={career} />
          <p className="about my-auto">A career change</p>
           </div>
           <div className="container-fluid mt-5 text-start d-flex section-home">
          <img className="icons" src={sun} />
          <p className="about my-auto">Rainy day found</p>
           </div>
           <div className="container-fluid mt-5 text-start d-flex section-home">
          <img className="icons" src={other} />
          <p className="about my-auto">Other</p>
           </div>
           <button className="continue">
                Continue
            </button>
       </div>
   </Fragment>
    )
}

export default First;