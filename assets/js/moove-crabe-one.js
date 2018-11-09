/**
 * Moove block one
 */
AFRAME.registerComponent('crabe', {
    init: function () {
        var el = this.el;

        var crabe = document.getElementById("crabe_one");
        var animation = document.createElement("a-animation");
        var scene = document.querySelector("a-scene");
        var animationData = {
            attribute: 'position',
            dur: 20000,
            from: '127.51253047644536 0 55.02762217530418',
            to: '110.58353408752447 0 6.594503240760893'
        };
        Object.keys(animationData).forEach(function (attr) {
            animation.setAttribute(attr, animationData[attr]);
        });

        var animation_two = document.createElement("a-animation");
        var animationData_two = {
          attribute: 'position',
          delay: 20000,
          dur: 5000,
          from: '110.58353408752447 0 6.594503240760893',
          to: '43.29047182809649 0 -2.626120859614865'
        };
        Object.keys(animationData_two).forEach(function (attr) {
            animation_two.setAttribute(attr, animationData_two[attr]);
        });

        var animation_three = document.createElement("a-animation");
        var animationData_three = {
          attribute: 'position',
          dur: 2000,
          delay: 25000,
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
          delay: 27000,
          from: '33.80820371042774 0 10.77897504312363',
          to: '15.182594378517683 0 2.754320290749121'
        };
        Object.keys(animationData_four).forEach(function (attr) {
            animation_four.setAttribute(attr, animationData_four[attr]);
        });

        var animation_five = document.createElement("a-animation");
        var animationData_five = {
            attribute: 'position',
            dur: 2000,
            delay: 31000,
            from: '15.182594378517683 0 2.754320290749121',
            to: '-8.59 0 27.10'
        };
        Object.keys(animationData_five).forEach(function (attr) {
            animation_five.setAttribute(attr, animationData_five[attr]);
        });

        var rotation = document.createElement("a-animation");
        var animationDataRotation = {
            attribute: 'rotation',
            dur: 2000,
            delay: 31000,
            from: '0 0 0',
            to: '0 -90 0'
        };
        Object.keys(animationDataRotation).forEach(function (attr) {
            rotation.setAttribute(attr, animationDataRotation[attr]);
        });


        crabe.appendChild(animation);
        crabe.appendChild(animation_two)
        crabe.appendChild(animation_three)
        crabe.appendChild(animation_four)
        crabe.appendChild(animation_five)
        crabe.appendChild(rotation)
        setTimeout(function(){
            el.parentNode.removeChild(crabe)
            var real_block = document.createElement("a-collada-model");
            real_block.setAttribute("hit-handler", true);
            real_block.setAttribute('position', { x :-8.59, y:0, z: 27.10})
            real_block.setAttribute('rotation', {x: 0 ,y: -90, z: 0})
            real_block.setAttribute('src', '#crabe')
            real_block.setAttribute('target', "healthPoints: 2");
            scene.appendChild(real_block);
            }
        , 35000)
    }
});
