window.addEventListener('keydown', keydown);
window.addEventListener('keyup', keyup);
var imlost = 25;
function keydown(event) {
     
    if (event.keyCode == 68) {
        ilikedick();
        setTimeout(ilikedick, imlost);
        setTimeout(ilikedick, imlost*2);
    }
}
