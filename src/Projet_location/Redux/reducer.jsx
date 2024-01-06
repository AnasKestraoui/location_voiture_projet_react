const initState = {
    database:[
        {username:"kestraoui",password:"pass1",email:"kestraoui@gmail.com"}
    ] , nameOfUserConnecter:"",
        reserver:false,
        reservationEffectue : []
}


const reducer = (state=initState,action)=>{
    switch (action.type){
        case "ADD_USER" :
            return {...state,database:[...state.database,action.payload]}
        

        case "ADD_NAME_USER" : 
            return {...state,nameOfUserConnecter:action.payload}

            
        case "UPDATE_ETAT_RESERVATION" :
            return {...state,reserver:true}

            
        case "ADD_RESERVATION" : 
            return {...state,reservationEffectue:[...state.reservationEffectue,action.payload]}


        case "DELETE_RESERVATION" :
            return {...state,reservationEffectue:state.reservationEffectue.filter((e)=>e.idRes !== action.payload)}
        

        default : 
            return state
    }
}

export default reducer