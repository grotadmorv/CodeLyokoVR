AFRAME.registerComponent('listener', {
    tick: function () {
        console.log(this.el.getAttribute('position'));
    }
});