import validator from "./validator.js";

const objectdata = document.getElementById("formulario1");
 objectdata.addEventListener("submit", enmascarar); 
        //addEventListener


document.querySelector('#pantalla2').style.display = 'none';
let dd = document.querySelector('#button');
dd.addEventListener("click",vista2);

function vista2() {
    document.querySelector('#pantalla1').style.display = 'none';
    document.querySelector('#pantalla2').style.display = 'block';
}

function enmascarar(){
    const datonumero = document.getElementById("number").value;
    alert ("Su número de tarjeta es " + validator.maskify(datonumero) + "\n" + validator.isValid(datonumero))
    
}
 
/*function validar(){
    const datonumero = document.getElementById("number").value;
    alert (validator.isValid(datonumero))

}*/
///Console.log(validator.maskify(datonumero)); //variable, funcion, metodo
console.log(validator.isValid(30630138407745)) ; 