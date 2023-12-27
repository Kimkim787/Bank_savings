
window.addEventListener("wheel", event => {
    const delta = Math.sign(event.deltaY);
    let navbar = document.getElementById('navbar');
    if (delta == 1){
        navbar.style.visibility = 'hidden';
    } else {
        navbar.style.visibility = 'visible';
    }
    });