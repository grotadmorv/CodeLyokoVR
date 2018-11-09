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
            to: '-21.504237350142635 1.4 120.39147833524531'
        };
        Object.keys(animationData).forEach(function (attr) {
            animation.setAttribute(attr, animationData[attr]);
        });

        var animation_two = document.createElement("a-animation");
        var animationData_two = {
          attribute: 'position',
          delay: 10000,
          dur: 5000,
          from: '-21.504237350142635 1.4 120.39147833524531',
          to: '58.295686628200514 1.4 58.35066976539171'
        };
        Object.keys(animationData_two).forEach(function (attr) {
            animation_two.setAttribute(attr, animationData_two[attr]);
        });

        var animation_three = document.createElement("a-animation");
        var animationData_three = {
          attribute: 'position',
          dur: 2000,
          delay: 16000,
          from: '43.29047182809649 0 -2.626120859614865',
          to: '33.80820371042774 0 10.77897504312363'
        };
        Object.keys(animationData_three).forEach(function (attr) {
            animation_three.setAttribute(attr, animationData_three[attr]);
        });


        var animation_four = document.createElement("a-animation");
        var animationData_four = {
          attribute: 'position',
          dur: 4000,
          delay: 18000,
          from: '33.80820371042774 0 10.77897504312363',
          to: '15.182594378517683 0 2.754320290749121'
        };
        Object.keys(animationData_four).forEach(function (attr) {
            animation_four.setAttribute(attr, animationData_four[attr]);
        });

        var animation_five = document.createElement("a-animation");
        var animationData_five = {
            attribute: 'position',
            dur: 4000,
            delay: 18000,
            from: '15.182594378517683 0 2.754320290749121',
            to: '3.215706003309395 0 0.4845296198023628'
        };
        Object.keys(animationData_five).forEach(function (attr) {
            animation_five.setAttribute(attr, animationData_five[attr]);
        });

        mantra.appendChild(animation);
        mantra.appendChild(animation_two)
        mantra.appendChild(animation_three)
        mantra.appendChild(animation_four)
        mantra.appendChild(animation_five)
        setTimeout(function(){
            el.parentNode.removeChild(mantra)
            var real_block = document.createElement("a-collada-model");
            real_block.setAttribute("hit-handler", true);
            real_block.setAttribute('position', { x :3.215706003309395, y:0, z: 0.4845296198023628})
            real_block.setAttribute('src', '#mantra')
            real_block.setAttribute('target', "healthPoints: 15");
            scene.appendChild(real_block);
            }
        , 24000)
    }
});
