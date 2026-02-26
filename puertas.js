//crea una variable para las distintas opciones posibles
var opcion = 0
var abrir = 0
var puerta = 0
var aciertos = 0
var fallos = 0
var porcentaje = 0
//al cargar la pagina se ocultan las imagenes y se elige una opcion de las 3 posibles
function cargar() {
    //oculta o muestra todas las imagenes
    document.getElementById("1-1").hidden = true;
    document.getElementById("2-1").hidden = true;
    document.getElementById("3-1").hidden = true;
    document.getElementById("1-2").hidden = true;
    document.getElementById("2-2").hidden = true;
    document.getElementById("3-2").hidden = true; 
    document.getElementById("1-3").hidden = true;
    document.getElementById("2-3").hidden = true;
    document.getElementById("3-3").hidden = true;
    document.getElementById("e1").hidden = true;
    document.getElementById("e2").hidden = true;
    document.getElementById("e3").hidden = true;
    document.getElementById("p1").hidden = false;
    document.getElementById("p2").hidden = false;
    document.getElementById("p3").hidden = false;    
    document.getElementById("cambio").hidden = true;
    document.getElementById("camb_s").hidden = true;
    document.getElementById("camb_n").hidden = true;
    document.getElementById("win").hidden = true;
    document.getElementById("lose").hidden = true;
    document.getElementById("repe").hidden = true;
    document.getElementById("p1").disabled = false;
    document.getElementById("p2").disabled = false;
    document.getElementById("p3").disabled = false;
    document.getElementById("bl").hidden = false;
    document.getElementById("victory").pause();
    document.getElementById("defeat").pause();
    document.getElementById("door").pause();
    //elige la opcion de este intento
    opcion = Math.floor(Math.random() * 3);
}
//el jugador abre la puerta 1
function cacatua1() {
    document.getElementById("p1").disabled = true;
    document.getElementById("p2").disabled = true;
    document.getElementById("p3").disabled = true;
    puerta = 1;
    document.getElementById("e1").hidden = false;
    document.getElementById("door").play();
    switch (opcion) {
        case 0:
            //el programa selecciona una de las dos puertas restantes y las abre
            abrir = Math.floor(Math.random() * 2);
            //abre la puerta 2
            if (abrir == 0) {
                document.getElementById("p2").hidden = true;
                document.getElementById("1-2").hidden = false;
            //abre la puerta 3
            } else {
                document.getElementById("p3").hidden = true;
                document.getElementById("1-3").hidden = false;
            }
            break;
        //abre la puerta 3
        case 1:
            document.getElementById("p3").hidden = true;
            document.getElementById("2-3").hidden = false;
            break;
        //abre la puerta 2
        case 2:
            document.getElementById("p2").hidden = true;
            document.getElementById("3-2").hidden = false;
            break;
    }
    cambios();
}
//el jugador abre la puerta 2
function cacatua2() {
    document.getElementById("p1").disabled = true;
    document.getElementById("p2").disabled = true;
    document.getElementById("p3").disabled = true;
    puerta = 2;
    document.getElementById("e2").hidden = false;
    document.getElementById("door").play();
    switch (opcion) {
        //el programa abre la puerta 3
        case 0:
            document.getElementById("p3").hidden = true;
            document.getElementById("1-3").hidden = false;
            break;
        case 1:
            //el programa selecciona una de las dos puertas restantes y las abre
            abrir = Math.floor(Math.random() * 2);
            //el programa abre la puerta 1
            if (abrir == 0) {
                document.getElementById("p1").hidden = true;
                document.getElementById("2-1").hidden = false;
                //el programa abre la puerta 3
            } else {
                document.getElementById("p3").hidden = true;
                document.getElementById("2-3").hidden = false;
            }
            break;
        //el programa abre la puerta 1
        case 2:
            document.getElementById("p1").hidden = true;
            document.getElementById("3-1").hidden = false;
            break;
    }
    cambios();
}
//el jugador abre la puerta 3
function cacatua3() {
    document.getElementById("p1").disabled = true;
    document.getElementById("p2").disabled = true;
    document.getElementById("p3").disabled = true;
    puerta = 3;
    document.getElementById("e3").hidden = false;
    document.getElementById("door").play();
    switch (opcion) {
        //el programa abre la puerta 2
        case 0:
            document.getElementById("p2").hidden = true;
            document.getElementById("1-2").hidden = false;
            break;
        //el programa abre la puerta 1
        case 1:
            document.getElementById("p1").hidden = true;
            document.getElementById("2-1").hidden = false;
            break;
        case 2:
            //el programa selecciona una de las dos puertas restantes y las abre
            abrir = Math.floor(Math.random() * 2);
            if (abrir == 0) {
                //el programa abre la puerta 1
                document.getElementById("p1").hidden = true;
                document.getElementById("3-1").hidden = false;
            } else {
                //el programa abre la puerta 2
                document.getElementById("p2").hidden = true;
                document.getElementById("3-2").hidden = false;
            }
            break;
    }
    cambios();
}
//en caso ce cambiar
function cambiar_s() {
    document.getElementById("door").play();
    switch (opcion) {
        case 0:
            if (puerta == 1) {
                document.getElementById("e1").hidden = true;
                perder();
                if (abrir == 0) {
                    document.getElementById("p3").hidden = true;
                    document.getElementById("1-3").hidden = false;
                    document.getElementById("e3").hidden = false;
                } else {
                    document.getElementById("p2").hidden = true;
                    document.getElementById("1-2").hidden = false;
                    document.getElementById("e2").hidden = false;
                }
            } else if (puerta == 2) {
                document.getElementById("p1").hidden = true;
                document.getElementById("e2").hidden = true;
                document.getElementById("e1").hidden = false;
                document.getElementById("1-1").hidden = false;
                ganar();
            } else if (puerta == 3) {
                document.getElementById("p2").hidden = true;
                document.getElementById("e3").hidden = true;
                document.getElementById("e2").hidden = false;
                document.getElementById("1-2").hidden = false;
                ganar();
            }
            break;
        case 1:
            if (puerta == 2) {
                document.getElementById("e2").hidden = true;
                perder();
                if (abrir == 0) {
                    document.getElementById("p3").hidden = true;
                    document.getElementById("2-3").hidden = false;
                    document.getElementById("e3").hidden = false;
                } else {
                    document.getElementById("p1").hidden = true;
                    document.getElementById("2-1").hidden = false;
                    document.getElementById("e1").hidden = false;
                }
            } else if (puerta == 1) {
                document.getElementById("p2").hidden = true;
                document.getElementById("e1").hidden = true;
                document.getElementById("e2").hidden = false;
                document.getElementById("2-2").hidden = false;
                ganar();
            } else if (puerta == 3) {
                document.getElementById("p2").hidden = true;
                document.getElementById("e3").hidden = true;
                document.getElementById("e2").hidden = false;
                document.getElementById("2-2").hidden = false;
                ganar();
            }
            break;
        case 2:
            if (puerta == 3) {
                document.getElementById("e3").hidden = true;
                perder();
                if (abrir == 0) {
                    document.getElementById("p2").hidden = true;
                    document.getElementById("3-2").hidden = false;
                    document.getElementById("e2").hidden = false;
                } else {
                    document.getElementById("p1").hidden = true;
                    document.getElementById("3-1").hidden = false;
                    document.getElementById("e1").hidden = false;
                }
            } else if (puerta == 1) {
                document.getElementById("p3").hidden = true;
                document.getElementById("e1").hidden = true;
                document.getElementById("e3").hidden = false;
                document.getElementById("3-3").hidden = false;
                ganar();
            } else if (puerta == 2) {
                document.getElementById("p3").hidden = true;
                document.getElementById("e2").hidden = true;
                document.getElementById("e3").hidden = false;
                document.getElementById("3-3").hidden = false;
                ganar();
            }
            break;
    }
}
function cambiar_n() {
    switch (opcion) {
        case 0:
            if (puerta == 1) {
                document.getElementById("1-1").hidden = false;
                document.getElementById("p1").hidden = true;
                ganar();
            } else if (puerta == 2) {
                document.getElementById("1-2").hidden = false;
                document.getElementById("p2").hidden = true;
                perder();
            } else if (puerta == 3) {
                document.getElementById("1-3").hidden = false;
                document.getElementById("p3").hidden = true;
                perder();
            }
            break;
        case 1:
            if (puerta == 1) {
                document.getElementById("2-1").hidden = false;
                document.getElementById("p1").hidden = true;
                perder();
            } else if (puerta == 2) {
                document.getElementById("2-2").hidden = false;
                document.getElementById("p2").hidden = true;
                ganar();
            } else if (puerta == 3) {
                document.getElementById("2-3").hidden = false;
                document.getElementById("p3").hidden = true;
                perder();
            }
            break;
        case 2:
            if (puerta == 1) {
                document.getElementById("3-1").hidden = false;
                document.getElementById("p1").hidden = true;
                perder();
            } else if (puerta == 2) {
                document.getElementById("3-2").hidden = false;
                document.getElementById("p2").hidden = true;
                perder();
            } else if (puerta == 3) {
                document.getElementById("3-3").hidden = false;
                document.getElementById("p3").hidden = true;
                ganar();
            }
            break;
    }
}
//muestra los controles de cambio
function cambios() {
    document.getElementById("bl").hidden = true;
    document.getElementById("cambio").hidden = false;
    document.getElementById("camb_s").hidden = false;
    document.getElementById("camb_n").hidden = false;
}
//muestra que has perdido
function perder() {
    document.getElementById("lose").hidden = false;
    document.getElementById("bl").hidden = true;
    document.getElementById("defeat").play();
    fallos = fallos + 1;
    document.getElementById("Fallos").innerHTML = fallos;
    parartodo();
}
//muestra que has ganado
function ganar() {
    document.getElementById("win").hidden = false;
    document.getElementById("bl").hidden = true;
    document.getElementById("victory").play();
    aciertos = aciertos + 1;
    document.getElementById("Aciertos").innerHTML = aciertos;
    parartodo();
}
//oculta los botones de opciones y muestra el boton de repetir
function parartodo() {
    document.getElementById("cambio").hidden = true;
    document.getElementById("camb_s").hidden = true;
    document.getElementById("camb_n").hidden = true;
    document.getElementById("repe").hidden = false;
    //calcula el porcentaje de exito tras cada ronda
    porcentajed = (aciertos/(aciertos+fallos))*100;
    porcentaje = Math.round( porcentajed* 100) / 100;
    document.getElementById("victoria").innerHTML = porcentaje + "%";
}
function easteregg() {
  window.alert("ERNEST, PUJA'NS LA NOTA porfa");
}
