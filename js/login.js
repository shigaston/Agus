//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

function usersession() {
    var usuario = document.getElementById("correo").value;
    localStorage.setItem("login", usuario);
}
function closeSession(){
    localStorage.removeItem('login');
}

document.addEventListener("DOMContentLoaded", function(e){

});
 
