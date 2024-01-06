import React,{useState} from "react";
import "./Authentification.css"
import {useDispatch,useSelector} from "react-redux"
import {AjouterUser,UserConnecter} from "./../Redux/actions"


export default function Authentification(props) {

    
    //les traitement naiseccaire pour styliser la page de login 

    //creation d'un variable qui permet de verifier si l'utilisateur veut faire un sign up (nouvelle incription)
    const [activeSignUp, setActiveSignUp] = useState(false);

    //une fonction qui permet de changer la veleur de la variable d'etat d'incription en true si l'utilisateur va faire une nouvelle inscription
    const handlClickSignUpButton = () => {
        setActiveSignUp(true);
    };

    //une fonction qui permet de changer la valeur de la variable d'etat d'inscription en false si utilisateur ne vas pas faire une nouvelle inscription
    const handlClickSignInButton = () => {
        setActiveSignUp(false);
    };


    //les traitement nessaicere pour faire la logique de la page de login

    //recuperation d'une fonction qui permet de changer l'etat de la variable exist dans le composant parent app qui permet de faire la gestion d'authentification d'un user en true(l'utilisateur est authentifier avec succes)
    const {login} = props
    
    //declaration d'un variable d'etat qui permet de stocker les username et les password des utilisateur
    //const [database,setDatabase] = useState([])

    //declaration des variable d'etat qui permet de stocker le username et le password d'un utilisateur qui est deja enregistre dans la base de donner et va faire le login
    const [username,setUsername] = useState("")
    const [pass,setPass] = useState("")

    //declaration des variable d'etat qui permet de stocker le username et email et le password d'un nouvau utilisateur qui va faire une nouvelle incription 
    const [newUsername,setNewUsername] = useState("")
    const [newEmail,setNewEmail] = useState("")
    const [newPass,setNewPass] = useState("") 
    
    const dispatch = useDispatch()
    const database = useSelector((state)=>state.database)
    
    //declaration de la fonction qui permet d'ajouter un nouveau utilisateur dans la variabale d'etat database apres la verification des condition nesswcaire
    const handlSignUp = ()=>{
        const EmailRegex = /\w+@\w+.com/
        if (newUsername !== "" && newEmail !== "" && newPass !== ""){
            if (EmailRegex.test(newEmail) === true){
                dispatch(AjouterUser(newUsername,newPass,newEmail))
                alert("ajout avec succes")
                setNewUsername("")
                setNewEmail("")
                setNewPass("")
            }else{
                alert("verifier sil vous plais la syntaxe de email")
            }
        }else{
            alert("Tous les champs sont requis")
        }
    }



    //declaration de la fonction qui permet de faire le login d'un utilisateur deja enregistrer dans la base de donner a travers la fonction handlLogin qui exist dans le composnat parent app et qui faire la modification de la variable qui fait la gestion de l'etat de login
    const handlLogin = ()=>{
        let find = database.find((e)=>(e.username === username && e.password === pass))
        if (username !== "" && pass !== ""){
                if (find !== undefined){
                    login()
                    dispatch(UserConnecter(username))
                    setUsername("")
                    setPass("")
                }else{
                    alert("username or password is incorrect")
                    setUsername("")
                    setPass("")
                }

        }else{
            alert("Tous les champs sont requis")
        }
    }


//---se commentaire pour le premiere ligne dans le return
//faire le test si utilisateur choisie le sign up (incription) on va ajouter une class (active) pour concretiser une condition css qui permet d'afficher le formulaire de l'inscription, si non on va faire une chaine vide pour afficher l'autre partie de login

  return (
    <div className="body-authentification">
    <div className={`container ${activeSignUp ? 'active' : ''}`} id="container">
            <div className="form-container sign-up">
                    <div className="form">
                        <h3>Create Account</h3>
                        <span><br/></span>
                        <input type="text" placeholder="Username" onChange={(e)=>setNewUsername(e.target.value)} value={newUsername} />
                        <input type="email" placeholder="Email" onChange={(e)=>setNewEmail(e.target.value)} value={newEmail}/>
                        <input type="password" placeholder="Password" onChange={(e)=>setNewPass(e.target.value)} value={newPass}/>
                        <button onClick={()=>handlSignUp()}>Sign Up</button>
                    </div>
            </div>

            <div className="form-container sign-in">
                    <div className="form">
                        <h2>sign In</h2>
                        
                        <input type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)} value={username} required/>
                        <input type="password" placeholder="Password" onChange={(e)=>setPass(e.target.value)} value={pass} required />
                        <button onClick={()=>handlLogin()}>sign In</button>
                    </div>
            </div>

            <div className="toggle-container">
                    <div className="toggle">
                            <div className="toggle-panel toggle-left">
                                    <h2>Welcome Back!</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Adipisci.</p>
                                    <button className="hidden" id="sign-in-button" onClick={()=>handlClickSignInButton()}>Sign In</button>
                            </div>
                            <div className="toggle-panel toggle-right">
                                    <h2>Hello, Friend!</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Adipisci.</p>
                                    <button className="hidden" id="sign-up-button" onClick={()=>handlClickSignUpButton()}>Sign Up</button>
                            </div>
                    </div>
            </div>
            
    </div>
    </div>
  )
}
