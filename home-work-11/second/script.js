const one = document.querySelectorAll('.one');
console.log(one);
let active = 0;

setInterval(() => {
    changeLight();
}, 1500);

function changeLight () {
    one[active].className = "one";
    active++;

    if (active > 2) {
        active = 0;
    }

    const oneObj = one[active];
    oneObj.classList.add(oneObj.getAttribute("color"))
}