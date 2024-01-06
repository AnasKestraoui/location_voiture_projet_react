import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'




export default function Ride(){

    const Ride = [
        {img:"location.png",title:"Choose A Location",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio reiciendis atque consectetur impedit in dignissimos vel earum mollitia quos saepe qui, totam incidunt animi expedita labore nobis, voluptatum, facere veniam."},
        {img:"event.png",title:"Pick-Up Date",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio reiciendis atque consectetur impedit in dignissimos vel earum mollitia quos saepe qui, totam incidunt animi expedita labore nobis, voluptatum, facere veniam."},
        {img:"book.png",title:"Book A Car",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio reiciendis atque consectetur impedit in dignissimos vel earum mollitia quos saepe qui, totam incidunt animi expedita labore nobis, voluptatum, facere veniam."}
    ]


    return (
        <div id="Ride">
                <main className="container" id="main-ride">
                        <br /><br /><br />
                        <center>
                                <h4>HOW ITS WORK </h4>
                                <h1>Rent With 3 Easy Steps</h1><br />
                        </center>
                    <div className="row">
                        {
                            Ride.map((ride)=>(
                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                    <center><img src={`/imagesRide/${ride.img}`} alt="location" /></center>
                                    <center><h4>{ride.title}</h4></center>
                                    <center><p>{ride.description}</p></center>
                                </div>
                            ))
                        }
                    </div>
                </main>
        </div>
    )
}