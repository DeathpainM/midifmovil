// var url = window.location.href;
// var swLocation = '/midifmovil/sw.js';


if(navigator.serviceWorker) {

    // if(url.includes('rene-mayett')){
    //     swLocation = '/sw.js';
    // }


    navigator.serviceWorker.register('/sw.js');
}