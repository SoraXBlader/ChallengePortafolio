//Funcion que me aplica el estilo a la opción seleccionada
//en el menú y quita lo previamente seleccionado
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu despues de seleccionar 
    //una opción en el responsive
    var x = document.getElementById("nav");
    x.className = "";
}
//funcion que muestra el menu responsive
function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className==""){
        x.className = "responsive";
    } else{
        x.className = "";
    }
}

//Efecto Scrolling en la barra de Skills
window.onscroll = function(){
    efectoHabilidades()
},

//funcion que aplica la animación a la barra de Skills
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >=300){
        document.getElementById("mg").classList.add("barra-progreso1");
        document.getElementById("ed").classList.add("barra-progreso2");
        document.getElementById("vfx").classList.add("barra-progreso3");
        document.getElementById("web").classList.add("barra-progreso4");
    
    
    }


}