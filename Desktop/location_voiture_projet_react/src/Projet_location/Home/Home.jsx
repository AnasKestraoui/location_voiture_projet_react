import React from "react"
import Navbar from "../Navbar/Navbar"
import Ride from "../Ride/Ride"
import Services from "../Services/Services"
import Reservation from "../Reservation/Reservation"
import Footer from "../Footer/Footer"
import "./Home.css"



export default function Home(props){
        
    const {logout} = props


    return (

            <div id="body-home">

                    <header id="header-home">
                            <Navbar logout={logout}/><br /><br />
                            <p  id="Title">Looking to rent a car ! </p>
                    </header>

                    <main>
                            <Ride/>
                            <Services/>
                            <Reservation/>
                    </main>

                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    
                    <footer>
                            <Footer/>
                    </footer>

            </div>

    )
}