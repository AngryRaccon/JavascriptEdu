renderer.render();
window.addEventListener('keydown', function(event) {
    mover.makeStep(event);
    console.log(event);
});