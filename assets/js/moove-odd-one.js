/**
 * Moove odd
 */
AFRAME.registerComponent('moove-odd-one', {
    init: function () {
        var animation = document.createElement("a-animation");
        var animationData = {
            attribute: 'position',
            dur: 3000,
            from: '-39 1.4 -15',
            to: '-39 1.4 -14'
        };
        Object.keys(animationData).forEach(function (attr) {
            animation.setAttribute(attr, animationData[attr]);
        });

        el.appendChild(animation);
    }
});