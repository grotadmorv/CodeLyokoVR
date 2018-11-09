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
            dur: 2000,
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
            from: '55 20 0',
            to: '55 90 0'
        };
        Object.keys(rotationData).forEach(function (attr) {
            rotation.setAttribute(attr, rotationData[attr]);
        });

        var animation_two = document.createElement("a-animation");
        var animationData_two = {
          attribute: 'position',
          delay: 2000,
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
            dur: 1000,
            delay: 3000,
            from: '55 90 0',
            to: '55 185 0'
        };
        Object.keys(rotationData_two).forEach(function (attr) {
            rotation_two.setAttribute(attr, rotationData_two[attr]);
        });


        var animation_three = document.createElement("a-animation");
        var animationData_three = {
          attribute: 'position',
          dur: 2000,
          delay: 5000,
          from: '44.79001691324361 6 84.91498661927248',
          to: '70.25168010853139 6 24.480541321181782'
        };
        Object.keys(animationData_three).forEach(function (attr) {
            animation_three.setAttribute(attr, animationData_three[attr]);
        });

        var rotation_three = document.createElement("a-animation");
        var rotationData_three = {
            attribute: 'rotation',
            dur: 1000,
            delay: 6000,
            from: '55 185 0',
            to: '55 250 0'
        };
        Object.keys(rotationData_three).forEach(function (attr) {
            rotation_three.setAttribute(attr, rotationData_three[attr]);
        });

        var animation_four = document.createElement("a-animation");
        var animationData_four = {
          attribute: 'position',
          dur: 3000,
          delay: 7000,
          from: '70.25168010853139 6 24.480541321181782',
          to: '3.2516788070048697 6 -9.173143928410871'
        };
        Object.keys(animationData_four).forEach(function (attr) {
            animation_four.setAttribute(attr, animationData_four[attr]);
        });


        mantra.appendChild(animation);
        mantra.appendChild(rotation)
        mantra.appendChild(animation_two)
        mantra.appendChild(rotation_two)


        mantra.appendChild(animation_three)
        mantra.appendChild(rotation_three);


        mantra.appendChild(animation_four)


        setTimeout(function(){
            el.parentNode.removeChild(mantra)
            var real_block = document.createElement("a-obj-model");
            real_block.setAttribute("hit-handler", true);
            real_block.setAttribute('position', { x :  3.2516788070048697, y:6, z: -9.173143928410871})
            real_block.setAttribute('rotation', {x: 55 , y: 250 , z: 0 })
            real_block.setAttribute('src', '#manta-obj')
            real_block.setAttribute('mtl', '#manta-mtl')
            real_block.setAttribute('target', "healthPoints: 5");
            real_block.setAttribute('id', 'new_manta');
            scene.appendChild(real_block);

            setInterval(function(){ 
                var new_manta_display = document.getElementById("new_manta");
                if(new_manta_display !== null){
                    shoot_the_tower({ x : 3.2516788070048697, y: 6, z: -9.173143928410871}, "manta"); 
                }
            }, 3000);
            }
        , 10000)
    }
});
