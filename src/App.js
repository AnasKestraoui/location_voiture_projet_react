import React,{useState} from "react"
import {HashRouter as Router,Routes,Route} from "react-router-dom"
import Authentification from "./Projet_location/Authentification/Authentification"
import Home from "./Projet_location/Home/Home"
import 'bootstrap/dist/css/bootstrap.min.css'



export default function App(){
    //declaration d'un variable d'etat qui fait la gestion d'etat de login 
    const [authentifier,setAuthentifier] = useState(false)
    

    //modification de la valeur apres le login
    const handlLogin = ()=>{
        setAuthentifier(true)
    }

    
    //modification de la valeur apres le logout
    const handlLogout = ()=>{
        setAuthentifier(false)
    }


    return (
        <div>
            {
                //faire un test si l'utilisateur na fait pas le login, alors en afficherons la page de login a travers appelle du composant Authentification
                !authentifier ? (
                        <Authentification login={handlLogin}/>
                ) :  // si l'utilisateur fait le login avec succes on fait les traitement neccessaire
                (
                        <Router>
                            <Routes>
                                {/*on fait sauf "/" dans le path pour acceder directement a la page home apres le login */}
                                <Route path="/" element={<Home logout={handlLogout}/>}/>
                            </Routes>
                        </Router>

                )
            }
        </div>
    )
}