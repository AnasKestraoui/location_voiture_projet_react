import React from "react"
import {useDispatch,useSelector} from "react-redux"
import {AjouterReservation,EtatReservation} from "./../Redux/actions"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Services.css"



export default function Services(){

        const carsExists = [
                {id:1,name:"Honda 1",img:"car1.jpg",prix:"1000"},
                {id:2,name:"Honda 2",img:"car2.jpg",prix:"500"},
                {id:3,name:"Honda 3",img:"car4.jpg",prix:"900"},
                {id:4,name:"Honda 4",img:"car4.jpg",prix:"200"},
                {id:5,name:"Honda 5",img:"car5.jpg",prix:"350"},
                {id:6,name:"Honda 6",img:"car6.jpg",prix:"350"}
        ]


        const reservationEffectue = useSelector((state)=>state.reservationEffectue)
        const dispatch = useDispatch()


        const handlClickReserver = (idCar)=>{
                let car = carsExists.find((e)=>e.id === idCar)
                let idRes = reservationEffectue.length +1
                let find = reservationEffectue.find((e)=>e.idRes === idRes)
                //faire un check si la reservation precedant est supprimer, alors en va pas augmenter l'id, else, en augment la valeur exists de l'id a 1+
                if (find === undefined){
                        dispatch(AjouterReservation(idRes,car.id,car.name,car.prix))
                        dispatch(EtatReservation())
                }else{
                        idRes = idRes + 1
                        dispatch(AjouterReservation(idRes,car.id,car.name,car.prix))
                        dispatch(EtatReservation())
                }
        }


        return (
                <div id="Services">
                        <main className="container">
                                <br /><br /><br />
                                <center>
                                <h4>BEST SERVICES</h4>
                                <h1>Explore Out Top Deals</h1>
                                <h1>From Top Rated Dealers</h1>
                                </center>
                                <div className="row">
                                        {
                                                carsExists.map((car)=>{
                                                        return (
                                                                <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4" key={car.id}>
                                                                        <div className="card" style={{width: "18rem" }} id="card">
                                                                                <img src={`/imagesServices/${car.img}`} alt="car1" className="card-img-top"/>
                                                                                <div className="card-body">
                                                                                        <h5 className="card-title"  >{car.name}</h5>
                                                                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                                                        <div className="btn btn-secondary" onClick={()=>handlClickReserver(car.id)}>Rent Now</div><span className="prix">{car.prix}</span><span className="DH">DH</span><span className="Month">/Month</span>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        )
                                                })
                                        }
                                </div>
                        </main>
                </div>
        )
        }