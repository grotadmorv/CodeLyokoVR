/**
 * hit and die
 */
AFRAME.registerComponent('hit-handler', {
    dependencies: ['material'],
    init: function () {
        var el = this.el;

        el.addEventListener('hit', () => {
            //el.components.material.material.color.copy(color);
            //put song here
        });
        el.addEventListener('die', () => {
            el.parentNode.removeChild(el);
        });
    }
});