// arreglo que contiene las respuestad correctas

let correctas = [3,1,3,1,2] ;


//arreglo donde se guardan las respuestas del usuario

let opcion_elegida=[];

let cantidad_correctas=0;

// funcion que toma el num de pregunta y el input elegido de esa pregunta

function respuesta (num_pregunta, seleccionada){
    //guardo esta respuesta elegida}
    opcion_elegida[num_pregunta] = seleccionada.value;

    // armo el id para seleccionar el section correspondiente
    id="p" + num_pregunta;

   labels = document.getElementById(id).childNodes;
    labels[3].style.backgroundColor = "white";
    labels[5].style.backgroundColor = "white";
    labels[7].style.backgroundColor = "white";

    // doy el color a label seleccionado
    seleccionada.parentNode.style.backgroundColor = "grey"; 
}

    // funcion que compara los arreglos para saber cuantas estuvieran correctas 
function corregir(){
        cantidad_correctas = 0;
        for(i=0; i < correctas.length; i++){
            if(correctas[i]==opcion_elegida[i]){
                cantidad_correctas++;
            }
        }

        document.getElementById("resultado").innerHTML = cantidad_correctas;
    }

    
