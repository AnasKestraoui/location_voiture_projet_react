export const AjouterUser = (p_username,p_password,p_email)=>{
    return {
        type:"ADD_USER",
        payload:{username:p_username,password:p_password,email:p_email}
    }
}


export const UserConnecter = (p_name) =>{
    return {
        type:"ADD_NAME_USER",
        payload:p_name
    }
}


export const EtatReservation = ()=>{
    return {
        type:"UPDATE_ETAT_RESERVATION"
    }
}


export const AjouterReservation = (p_idReservation,p_idCar,p_nameCar,p_prixPayer)=>{
    return {
        type:"ADD_RESERVATION",
        payload:{idRes:p_idReservation,idCar:p_idCar,nameCar:p_nameCar,prixPayer:p_prixPayer}
    }
}


export const SupprimerReservation = (p_idReservation)=>{
    return {
        type:"DELETE_RESERVATION",
        payload:p_idReservation
    }
}

