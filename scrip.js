//logica de la calculadora
function calculaResultado(expresion)
{
    if(expresion.includes("+"))//si la expresion incluye el simbolo
    {
        const suma = expresion.split("+");//separamos los operandos
        if(suma.length > 2)//no puede ser mayor a dos
        {
            return "Solo puedes sumar dos operandos";
        }
        else
        {
            return parseFloat(suma[0]) + parseFloat(suma[1]);//los hacemos floats y los sumamos
        } 
    }
    if(expresion.includes("−"))
    {
        const resta = expresion.split("−");
        if(resta.length > 2)
        {
            return "Solo puedes restar dos operandos";
        }
        else
        { 
            return parseFloat(resta[0]) - parseFloat(resta[1]);
        }
    }
    if(expresion.includes("×"))
    {
        const multiplicacion = expresion.split("×");
        if(multiplicacion.length > 2)
        {
            return "Solo puedes multiplicar dos operandos";
        }
        else
        {
            return parseFloat(multiplicacion[0]) * parseFloat(multiplicacion[1]);
        }
    }
    if(expresion.includes("÷"))
    {
        const divide = expresion.split("÷");
        if(divide.length > 2)
        {
            return "Solo puedes dividir dos operandos";
        }
        else if(divide[1] === "0")
        {
            return "No se puede dividir entre 0";
        }
        else
        {
            return parseFloat(divide[0]) / parseFloat(divide[1]);
        }
    }
    if(expresion.includes("↑"))
    {
        const exponente = expresion.split("↑");
        if(exponente.length > 2)
        {
            return "Solo puedes elevar dos operandos";
        }
        else
        {
            return Math.pow(parseFloat(exponente[0]), parseFloat(exponente[1]));
        }
    } 
}

//dos variables constantes para los botones y la pantalla
const botones = document.querySelectorAll("button");
let pantalla = document.getElementById("result");
let historial = document.getElementById("His");
//incializa la pantalla en 0
pantalla.textContent = 0;

botones.forEach(boton => //recorremos todos los botones
{
    boton.addEventListener("click", () =>{//para cada boton
        const valor = boton.textContent;//obtenemos el valor del boton
        
        if(valor==="←")//si el usuario presiona el boton de borrar
        {
            pantalla.textContent="0";//limpia la pantalla y pone un 0
        }
        else if(valor==="C-H")//borramos el historial
        {
            historial.textContent="";
        }
        else if(pantalla.textContent==="0" )//sin embargo si ahi un 0 en la patalla
        {
            pantalla.textContent=valor;//borra el 0 y pone el contenido del boton
        }
        
        else if(valor==="=")//y finalmente el igual
        {
            const resultado=calculaResultado(pantalla.textContent);//llamamos a la funcion calcula resultado y le pasamos como parametro el contenido de la pantalla
            pantalla.textContent=resultado;//mostramos en pantalla el resultado
            if(!isNaN(resultado) && typeof resultado !== "undefined")//si el resultado no es un numero
            {
                historial.textContent+=`${resultado} ,`;//mostramos en historial el resultados 
            }
            else
            {
                pantalla.textContent="ERROR";
            }
        }
        else
        {
            pantalla.textContent+=valor;//agregamos el valor del boton   
        }
    })
});

//modo de blaco a oscuro
const miCheck=document.getElementById("cambio");//creamos una variable para el checkbox
miCheck.addEventListener('change',function(){// Código que se ejecutará cuando el evento 'change' ocurra
    const cuerpo=document.body;//variable del body de la pag
    const principal = document.querySelector('main');//el main de la pag
    const cabeza= document.getElementById('title');//titulo
    if(miCheck.checked)//condicional si el checkbox esta presionado
    {
        //cambiamos el estilo y color del body main botones...
        cuerpo.style.backgroundColor='black';
        principal.style.backgroundColor='white';
        cabeza.style.color='white';
        pantalla.style.backgroundColor='black';
        pantalla.style.color='white'
        historial.style.backgroundColor='black';
        historial.style.color='white'

        for(const boton of botones)//un ciclo for of para cada uno de los botones
        {
            boton.style.backgroundColor='black';
            boton.style.color='white';
            boton.style.hover
            boton.addEventListener('mouseover', function() {//este evento sirve para que cuando el cursor este sobre el mouse cambie de color
                boton.style.backgroundColor = 'orange';
            });
            boton.addEventListener('mouseout', function() {//evnto para que cuando el cursor deje el mouse cambie de color al original
                boton.style.backgroundColor = 'black';
            });
        }  
    }
    else//condicional para que cuando el checkbox este desactivado los colores vuelvan a su color original
    {
        cuerpo.style.backgroundColor='';
        principal.style.backgroundColor='';
        cabeza.style.color='';
        pantalla.style.backgroundColor='';
        pantalla.style.color=''
        historial.style.backgroundColor='';
        historial.style.color=''
        for( const boton of botones)
        {
            boton.style.backgroundColor='';
            boton.style.color='';
            boton.addEventListener('mouseover', function() {
                boton.style.backgroundColor = '';
            });
            boton.addEventListener('mouseout', function() {
                boton.style.backgroundColor = '';
            });
        }   
    }
});



