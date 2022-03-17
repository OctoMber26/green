import React,{Fragment} from "react";
import "./Main.css";
import circle from "../images/Circle@2x.png";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Main=()=>{
    return(
        <Fragment>
            <img className=" circle" src={circle} />
        <div className="container-fluid text-center">
            <h1 className="title">Light Up Your Future</h1>
            <p className="paragraph">A smart investment in a smart tool</p>
            <NavLink to="/first"><button className="register mt-5">
                Get Started
            </button></NavLink>
        </div>
        </Fragment>
    )
}

export default Main;