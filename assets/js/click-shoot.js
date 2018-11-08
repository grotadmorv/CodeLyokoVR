/**
 * Click mouse to shoot.
 */
AFRAME.registerComponent('click-to-shoot', {
    init: function () {
        document.body.addEventListener('mousedown', () => { this.el.emit('shoot'); });
    }
});