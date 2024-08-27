function anioBisiesto(anio){
    if(anio % 400 === 0 || (anio % 4 === 0 && anio % 100 !== 0)){
        return "Bisiesto"
    }
    return "No bisiesto"
}

export default anioBisiesto;