function anioBisiesto(anio){
    if(anio % 400 === 0){
        return "Bisiesto"
    }
    else{
        return "No bisiesto"
    }
}

export default anioBisiesto;