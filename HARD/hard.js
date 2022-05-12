let red = document.getElementById('colorChange');
let white = document.getElementById('colorChange0');
let body = document.getElementById('body');
red.addEventListener('click',
    function colorred(){
        body.style.backgroundColor = 'red';
    });

white.addEventListener('click',
    function colorwhite(){
        body.style.backgroundColor = 'white';
    });