import valid from "./validator.js";

const objectdata = document.getElementById("formulario1");
 objectdata.addEventListener("submit", metodo); 
        //addEventListener


document.querySelector('#pantalla2').style.display = 'none';
let dd = document.querySelector('#button');
dd.addEventListener("click",vista2);

function vista2() {
    document.querySelector('#pantalla1').style.display = 'none';
    document.querySelector('#pantalla2').style.display = 'block';
}

function metodo(){
    const datonumero = document.getElementById("number").value;
    alert ("Su número de tarjeta es " + valid.maskify(datonumero) + "\n" + valid.isValid(datonumero))
    
}
 
/*function validar(){
    const datonumero = document.getElementById("number").value;
    alert (validator.isValid(datonumero))

}*/

console.log(valid.isValid(30630138407745)) ; 