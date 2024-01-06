import React from "react"
import { useSelector,useDispatch } from "react-redux"
import {SupprimerReservation} from "./../Redux/actions"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Reservation.css"



export default function Reservation(){

    const reserver = useSelector((state)=>state.reserver)


    const reservationEffectue = useSelector((state)=>state.reservationEffectue)
    const ClientConnecter = useSelector((state)=>state.nameOfUserConnecter)


    const dispatch = useDispatch()
    const PrixTotal = parseInt(reservationEffectue.reduce((s,e)=>s + parseInt(e.prixPayer),0))
    
    
    const handlDelete = (idRes)=>{
        let confirmation = window.confirm("vous vouler vraiment supprimer cette reservation ?")
        if (confirmation){
            dispatch(SupprimerReservation(idRes))
        }
    }

    
    return (
        <div id="Reservation">
            <br /><br /><br />
            {
                !reserver ? (
                    <div>
                        <br /><br /><br />
                        <center><h3>Aucune Reservation Effectuer</h3></center>
                        <hr className="hr-reservation"/>
                    </div>
                ) : 
                (
                    <div className="container">
                        <br /><br /><br />
                            <center><h1>La Liste des Reservation Effectuer</h1></center>
                            <hr className="hr-reservation"/>
                            <br /><br /><br />
                            <table className="table table-bordered" id="table-reservation">
                                <tr>
                                    <th><center>Id Reservation</center></th><th><center>username</center></th><th><center>Id Car</center></th><th><center>Name Car</center></th><th><center>Prix Car/Month</center></th><th></th>
                                </tr>
                                {
                                    reservationEffectue.map((reservation)=>(
                                        <tr>
                                            <td><center>{reservation.idRes}</center></td><td><center>{ClientConnecter}</center></td><td><center>{reservation.idCar}</center></td><td><center>{reservation.nameCar}</center></td><td><center>{`${reservation.prixPayer} DH`}</center></td><td><center><button className="btn btn-danger" onClick={()=>handlDelete(reservation.idRes)}>Supprimer</button></center></td>
                                        </tr>
                                    ))
                                }
                            </table>
                            <table id="Prix-Total">
                                <tr>
                                    <td>Prix Total : </td>
                                    <td><input type="text" readOnly className="form-control" value={`${PrixTotal} DH`}/></td>
                                </tr>
                            </table>
                    </div>
                )
            }
        </div>
    )
}