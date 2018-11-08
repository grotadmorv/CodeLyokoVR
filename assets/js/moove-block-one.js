/**
 * Moove odd
 */
AFRAME.registerComponent('moove-block-one', {
    init: function () {
        var block_one = document.getElementById("block_one");
        var animation = document.createElement("a-animation");
        var animationData = {
            attribute: 'position',
            dur: 20000,
            from: '126.4202886389323 0 -36.15065118105115',
            to: '100 0 -36'
        };
        Object.keys(animationData).forEach(function (attr) {
            animation.setAttribute(attr, animationData[attr]);
        });

        block_one.appendChild(animation);
    }
});