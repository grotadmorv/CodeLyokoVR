/**
 * Moove block one
 */
AFRAME.registerComponent('mantra', {
    init: function () {
        var el = this.el;

        var mantra = document.getElementById("mantra_one");
        var animation = document.createElement("a-animation");
        var scene = document.querySelector("a-scene");
        var animationData = {
            attribute: 'position',
            dur: 9000,
            from: '-77.70512874010862 6 82.51980536939026',
            to: '-27.023816639706563 6 113.19771680387626'
        };
        Object.keys(animationData).forEach(function (attr) {
            animation.setAttribute(attr, animationData[attr]);
        });


        var rotation = document.createElement("a-animation");
        var rotationData = {
            attribute: 'rotation',
            dur: 2000,
            delay: 4000,
            from: '55 20 0',
            to: '55 90 0'
        };
        Object.keys(rotationData).forEach(function (attr) {
            rotation.setAttribute(attr, rotationData[attr]);
        });

        var animation_two = document.createElement("a-animation");
        var animationData_two = {
          attribute: 'position',
          delay: 9000,
          dur: 3000,
          from: '-27.023816639706563 6 113.19771680387626',
          to: '44.79001691324361 6 84.91498661927248'
        };
        Object.keys(animationData_two).forEach(function (attr) {
            animation_two.setAttribute(attr, animationData_two[attr]);
        });


        var rotation_two = document.createElement("a-animation");
        var rotationData_two = {
            attribute: 'rotation',
            dur: 2000,
            delay: 16000,
            from: '55 90 0',
            to: '55 180 0'
        };
        Object.keys(rotationData_two).forEach(function (attr) {
            rotation_two.setAttribute(attr, rotationData_two[attr]);
        });


        var animation_three = document.createElement("a-animation");
        var animationData_three = {
          attribute: 'position',
          dur: 2000,
          delay: 14000,
          from: '44.79001691324361 6 84.91498661927248',
          to: '70.25168010853139 6 24.480541321181782'
        };
        Object.keys(animationData_three).forEach(function (attr) {
            animation_three.setAttribute(attr, animationData_three[attr]);
        });

        var animation_four = document.createElement("a-animation");
        var animationData_four = {
          attribute: 'position',
          dur: 4000,
          delay: 18000,
          from: '70.25168010853139 6 24.480541321181782',
          to: '3.2516788070048697 6 -9.173143928410871'
        };
        Object.keys(animationData_four).forEach(function (attr) {
            animation_four.setAttribute(attr, animationData_four[attr]);
        });

        var animation_five = document.createElement("a-animation");
        var animationData_five = {
            attribute: 'position',
            dur: 4000,
            delay: 20000,
            from: '15.182594378517683 6 2.754320290749121',
            to: '3.215706003309395 6 0.4845296198023628'
        };
        Object.keys(animationData_five).forEach(function (attr) {
            animation_five.setAttribute(attr, animationData_five[attr]);
        });

        mantra.appendChild(animation);
        mantra.appendChild(rotation)
        mantra.appendChild(animation_two)

        mantra.appendChild(rotation_two)
        mantra.appendChild(animation_three)
        mantra.appendChild(animation_four)
        mantra.appendChild(animation_five)
        setTimeout(function(){
            el.parentNode.removeChild(mantra)
            var real_block = document.createElement("a-obj-model");
            real_block.setAttribute("hit-handler", true);
            real_block.setAttribute('position', { x :  3.2516788070048697, y:6, z: -9.173143928410871})
            real_block.setAttribute('src', '#mantra-obj')
            real_block.setAttribute('mtl', '#manta-mtl')
            real_block.setAttribute('target', "healthPoints: 15");
            scene.appendChild(real_block);
            }
        , 24000)
    }
});
