const canv = document.getElementById('canvas');
const ctx = canv.getContext('2d');
let isMouseDown = false;

canv.width = window.innerWidth;
canv.height = window.innerHeight;

canv.addEventListener('mousedown', function() {
    isMouseDown = true;
});

canv.addEventListener('mouseup', function() {
    isMouseDown = false;
    ctx.beginPath();
});

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