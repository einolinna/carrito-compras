//VARIABLES
const carrito = document.querySelector("#carrito");
const cursos = document.querySelector("#lista-cursos");
const listaCursos = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn= document.querySelector("#vaciar-carrito");

//LISTENERS
cargarEventListeners();


function cargarEventListeners(){

//AGREGAR CARRITO

cursos.addEventListener("click",comprarCurso);
//BORRAR CURSOS

carrito.addEventListener("click",quitarCurso);

//VACIAR CARRITO
vaciarCarritoBtn.addEventListener("click",vaciarCarrito);

}


//FUNCIONES


//Funcion que añade el curso al carrito
function comprarCurso(e){
    e.preventDefault();
    //Delegation para agregar carrito
   if(e.target.classList.contains("agregar-carrito")){
       //Lee curso seleccionado para tomar datos
        const curso = e.target.parentElement.parentElement;
        leerDatosCurso(curso);
}
}

function quitarCurso(e){
    e.preventDefault();


    let curso;
    //Delegation para quitar curso

    if(e.target.classList.contains("borrar-curso")){

        e.target.parentElement.parentElement.remove();


           

    }



}

function vaciarCarrito(){
    
while(listaCursos.firstChild){

    listaCursos.removeChild(listaCursos.firstChild);

}
   

return false;
}

//Lee curso seleccionado para tomar datos


function leerDatosCurso(curso){
    const infoCurso = {
            imagen: curso.querySelector("img").src,
            texto: curso.querySelector("h4").textContent,
            precio: curso.querySelector(".precio span").textContent,
            id: curso.querySelector("a").getAttribute("data-id")



    }


insertarCarrito(infoCurso);

}


//INSERTAR EN CARRITO EL CURSO
function insertarCarrito(curso){


//CREO EL ROW PARA AÑADIR LOS ELEMENTOS QUE QUIERO AL CARRITO
const row = document.createElement("tr");

    row.innerHTML=`
            <td>

            <img src="${curso.imagen}" width=100>
            </td>
            <td>
            ${curso.texto}
            
            </td>
            <td>

            ${curso.precio}
            </td>
            <td>

            <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
            </td>
    `;


    
//FINALIZO AÑADIR CARRITO 


listaCursos.appendChild(row);

}
