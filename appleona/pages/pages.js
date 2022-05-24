let button = document.getElementById('btn-enviar');

function validarDatos() {
    var inputcurp = document.getElementById("curp").value;
    var inputidp = document.getElementById("idp").value;
    let pMensaje = document.getElementById('p-mensaje-error');
    if (inputcurp.value == "") {
        pMensaje.innerHTML = "Error: El CURP esta vacio"
    }

    else if (inputidp.value == "") {
        pMensaje.innerHTML = "Error: El IDP esta vacio"
    }

    else {
        //console.log(local);
        url='http://localhost:3000/login?curp=';
        fetch(url+inputcurp+'&idp='+inputidp).then((res) => 
        res.json()).then((query) => {
            console.log("Query OK: ", query[0].curp, query[0].idp);
            console.log(inputcurp === query[0].curp && inputidp == query[0].idp)
            if (inputcurp === query[0].curp && inputidp == query[0].idp ){
                alert("Inicio de sesión exitoso!!!");
                window.location.assign("../pages/Menu.html");
            }
            // else console.log(e);
         
        });
            
           
    }

}


// // console.log("Query OK, resultado: ",res);
// const query = res;
// console.log(query.curp);





//Ejemplo implementando el metodo POST:
// async function postData(url = '', data = {}) {
//     // Opciones por defecto estan marcadas con un *
//     const response = await fetch(url, {
//       method: 'POST', // *GET, POST, PUT, DELETE, etc.
//       mode: 'cors', // no-cors, *cors, same-origin
//       cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: 'same-origin', // include, *same-origin, omit
//       headers: {
//         'Content-Type': 'application/json'
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: 'follow', // manual, *follow, error
//       referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//       body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
//   }

//   postData('https://example.com/answer', { answer: 42 })
//     .then(data => {
//       console.log(data); // JSON data parsed by `data.json()` call
//     });








/////////////////// NAV BAR /////////////////////////
let navbar = document.querySelector(".navbar");
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
    navLinks.style.left = "0";
}
menuCloseBtn.onclick = function () {
    navLinks.style.left = "-100%";
}

/////TABBAR////
