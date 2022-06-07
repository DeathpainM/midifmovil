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

document.addEventListener("DOMContentLoaded", function (event) {
  let submitButton = document.querySelector("button");
  let textField = document.querySelector("input");

  submitButton.addEventListener("click", validarInfo);

  function validarInfo() {

    //   let newItem = textField.value;
        var inputap = document.getElementById("AP").value;
        var inputnb = document.getElementById("NB").value;
        var campoidp= document.getElementById("CIDP").value;
        var fechaact = document.getElementById("fecha_act").value;
        var selac = document.getElementById("AC").value;
        var foto = document.getElementById("File").value;

      let todo = {
          
        nombre: inputnb,
        apellido: inputap,
        idp: campoidp,
        fecha: fechaact,
        alcaldia: selac,
        archivo: foto
          
      };

      console.log(todo);

      url='http://localhost:3000/renovacion?nombre=';
      fetch(url + inputnb + '&apellido=' + inputap + '&fecha=' + fechaact + '&alcaldia='+ selac + '&idp=' + campoidp + '&file=' + foto , {
              method: 'POST', 
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(todo)
          }).then((res) => res.text())
          .then((text) => console.log(text))
          .catch((err) => console.log(err))
  }
  
});


// var http = require('http').createServer(webServer),
// form = require('fs').readFileSync('/renovacion'),
// querystring = require ('querystring'),
// util = require ('util'),
// dataString = ''

// function webServer (req, res) {

//   if(req.method == 'POST') {

//     req
//         .on('data', function (data) {
//             dataString += data
//         })
//         .on('end', function (){
//           var templateString = `Los datos que enviaste por post como string son ${dataString}`
//           console.log(templateString)
//           res.end(templateString)
//         })
        

//   }
// }





// function validarInfo(){
//     var inputap = document.getElementById("AP").value;
//     var inputnb = document.getElementById("NB").value;
//     var campoidp = document.getElementById("CIDP").value;
//     if (inputap.value == "") {
//         pMensaje.innerHTML = "Error: El campo esta vacio"
//     }
//     else if (inputnb.value == "") {
//         pMensaje.innerHTML = "Error: El campo esta vacio"
//     }
//     else {
//         url='http://localhost:3000/renovacion?nombre='
//         .then(url+inputnb+'&apellido='+inputap+'&idp='+campoidp).then((req) => 
//             req.json()).then((query) => {
//                 console.log("Captura datos: " , query[0].inputnb, query[0].inputap, query[0].campoidp);
//                 alert("Registro exitoso!!!");
//             })

//     }

// }


// // console.log("Query OK, resultado: ",res);
// const query = res;
// console.log(query.curp);





//Ejemplo implementando el metodo POST:
// async function postData(url = 'http://localhost:3000/renovacion?nombre=', data = {}) {
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

//   postData('http://localhost:3000/renovacion', { answer: `` })
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
