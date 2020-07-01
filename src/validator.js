const valid = {   //Objeto de dos funciones(Isvalid y Maskify)
    
  maskify : function (dato){
    if (String(dato).length<4){
        return String(dato)

    }
    else{
    
        let enmascarado = "#".repeat(String(dato).length-4) + String(dato).slice(-4);
                            //el dato se vuelve array cuando se aplica split y deja de serlo con join
        
    return enmascarado;
    }
},

  isValid: function (dato){
  
    var sumatoria=0;

    var nrever = String(dato).split("").reverse().join("");
    console.log(nrever)
    
    for (var indice = 0; indice< nrever.length; indice++){

    if (indice % 2 == 1) {

        if (parseInt(nrever[indice])*2>=10){
            sumatoria = sumatoria + (parseInt(nrever[indice])*2)-9;
        }
    
        else{
            sumatoria = sumatoria + parseInt(nrever[indice])*2;
        }
    }
    else{
        sumatoria = sumatoria + parseInt(nrever[indice]);
        }
        //una vez ejecutdo el código, al "indice" se le aplica el incremento y valida en la segunda aconsicion del for 
  }
    if (sumatoria%10==0){
        //alert("Válida");
        return "Tarjeta valida Pago realizado"
        }
    else{
        //alert ("inválida");
        return "Tarjeta Invalida \n Vuelve a intentarlo"
    }

}
}

export default valid;
