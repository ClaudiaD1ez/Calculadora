let propiedad ={
    teclas: document.querySelectorAll("#calculadora ul li"),
    accion: null,
    digito: null,
    numSignos: 0,
    decimal: false,
    resultado :false,
    result: document.querySelector("#result")
}

let metodos ={

    inicio: function(){

        for(let i=0; propiedad.teclas.length; i++){
            propiedad.teclas[i].addEventListener("click",metodos.pulsar)
        }
    },

    pulsar: function(teclas){

        propiedad.accion = teclas.target.getAttribute("class")
        propiedad.digito = teclas.target.innerHTML;

        metodos.calculadora(propiedad.accion, propiedad.digito)
    },

    calculadora: function(accion, digito){

        switch(accion){

            case "numero" :

                propiedad.numSignos = 0;                  //si es cero se sustituye, si es otro numero se añade

                if( propiedad.result.innerHTML == 0 || propiedad.resultado == true){
                    propiedad.result.innerHTML = digito  // <- digito lo recivimos por parametro en la funcion
                    propiedad.resultado = false;
                }else{
                    propiedad.result.innerHTML += digito
                }

            break;

            case "signo":

                propiedad.decimal = false;

                if(propiedad.numSignos==0){

                    if(propiedad.result.innerHTML == 0){  //si no hay nongun numero, no se añade el signo(se deja como esta)
                        propiedad.result.innerHTML = 0
                    }else{                                //si hay algun numero, se añade el signo
                        propiedad.result.innerHTML += digito;
                        propiedad.numSignos++;
                        propiedad.resultado = false;
                    }
                }


            break;

            case "punto":
                if(propiedad.decimal == false || propiedad.resultado == false){
                    propiedad.result.innerHTML += digito;
                    propiedad.decimal = true;
                }else{

                }
            break;
            case "igual":
                propiedad.result.innerHTML = eval(propiedad.result.innerHTML);
                propiedad.resultado = true;
            break;
        }
    },

    borrar: function(){
        propiedad.result.innerHTML = 0;
    }
}

metodos.inicio()