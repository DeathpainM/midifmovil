let button = document.getElementById('btn-enviar');

button.addEventListener('click', function() {
    // alert('Mensaje de alerta');

    let inputCurp = document.getElementById('input-curp');
    let inputIdp = document.getElementById('input-idp');
    let pMensaje = document.getElementById('p-mensaje-error');
    let pMensajeConfirmacion = document.getElementById("p-mensaje-confirmacion");


    if(inputCurp.value == ""){
        // alert("Error: El nombre esta vacio.");
        pMensaje.innerHTML = "Error: El CURP esta vacio"
    }

    else if(inputIdp.value == ""){
        // alert("Error: El correo esta vacio.");
        pMensaje.innerHTML = "Error: El IDP esta vacio"
    }

    else if (inputIdp.value.length > 5){
        pMensaje.innerHTML = "Error: El idp es muy largo."
    }
    
    // else if (inputCurp.value.length > 18){
    //     pMensaje.innerHTML = "Error: El CURP excede la longitud permitida."
    // }

});

let navbar = document.querySelector(".navbar");
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}

// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}

