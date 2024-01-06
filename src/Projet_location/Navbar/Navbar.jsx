import React from "react"
import {Link} from "react-scroll"
import "./Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css'



export default function Navbar(props){

    const {logout} = props


    return (
            <nav id="nav-navbar">
                    <h3>CAR RENTAL</h3>
                    <div id="links-navbar">
                            <Link to="body-home" className="link-navbar" spy={true} smooth={true}>Home</Link>
                            <Link to="Ride" className="link-navbar" spy={true} smooth={true}>Ride</Link>
                            <Link to="Services" className="link-navbar" spy={true} smooth={true}>Services</Link>
                            <Link to="Reservation" className="link-navbar" spy={true} smooth={true}>Reservation</Link>
                    </div>
                    <button className="btn btn-danger">
                            <Link to="#" onClick={()=>logout()}>Log out</Link>
                    </button>
            </nav>
    )
}