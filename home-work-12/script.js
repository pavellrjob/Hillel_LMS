const canv = document.getElementById('canvas');
const ctx = canv.getContext('2d');
let isMouseDown = false;
const col = document.querySelector('#col');


col.addEventListener('click', function(event) {
    console.log(event);
    event.target.style.color === event.target.innerHTML;
    if(event.target.innerHTML === 'green') {
        ctx.fillStyle = 'green';
        ctx.strokeStyle = 'green';
    }
    if(event.target.innerHTML === 'blue') {
        ctx.fillStyle = 'blue';
        ctx.strokeStyle = 'blue';
    }
    if(event.target.innerHTML === 'red') {
        ctx.fillStyle = 'red';
        ctx.strokeStyle = 'red';
    }
})



canv.width = window.innerWidth;
canv.height = window.innerHeight;

canv.addEventListener('mousedown', function() {
    isMouseDown = true;
});

canv.addEventListener('mouseup', function() {
    isMouseDown = false;
    ctx.beginPath();
});

// ctx.fillStyle = 'red';
// ctx.strokeStyle = 'red';
ctx.lineWidth = 10 * 2;
canv.addEventListener('mousemove', function(e) {

    if ( isMouseDown ) {
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, 10, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }
});