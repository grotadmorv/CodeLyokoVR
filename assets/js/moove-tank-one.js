/**
 * Moove block one
 */
AFRAME.registerComponent('tank', {
    init: function () {
        var el = this.el;

        var mega_tank = document.getElementById("mega_tank");
        var animation = document.createElement("a-animation");
        var scene = document.querySelector("a-scene");
        var animationData = {
            attribute: 'position',
            dur: 9000,
            from: '43.500556057763575 1.1 -77.20177416561422',
            to: '13.540591578549146 1.1 -87.27217106987848'
        };
        Object.keys(animationData).forEach(function (attr) {
            animation.setAttribute(attr, animationData[attr]);
        });

        var animation_two = document.createElement("a-animation");
        var animationData_two = {
          attribute: 'position',
          delay: 9000,
          dur: 5000,
          from: '13.540591578549146 1.1 -87.27217106987848',
          to: '35.97771511547195 1.4 -40.5852215284847'
        };
        Object.keys(animationData_two).forEach(function (attr) {
            animation_two.setAttribute(attr, animationData_two[attr]);
        });

        var rotation = document.createElement("a-animation");
        var animationDataRotation = {
            attribute: 'rotation',
            dur: 1000,
            delay: 9000,
            from: '0 180 0',
            to: '0 250 0'
        };
        Object.keys(animationDataRotation).forEach(function (attr) {
            rotation.setAttribute(attr, animationDataRotation[attr]);
        });

        var animation_three = document.createElement("a-animation");
        var animationData_three = {
          attribute: 'position',
          dur: 2000,
          delay: 14000,
          from: '35.97771511547195 1.4 -40.5852215284847',
          to: '37.22949249055772 1.4 10.574351743534079'
        };
        Object.keys(animationData_three).forEach(function (attr) {
            animation_three.setAttribute(attr, animationData_three[attr]);
        });

        var rotation_two = document.createElement("a-animation");
        var animationDataRotation_two = {
            attribute: 'rotation',
            dur: 1000,
            delay: 16000,
            from: '0 250 0',
            to: '0 180 0'
        };
        Object.keys(animationDataRotation_two).forEach(function (attr) {
            rotation_two.setAttribute(attr, animationDataRotation_two[attr]);
        });

        var animation_four = document.createElement("a-animation");
        var animationData_four = {
          attribute: 'position',
          dur: 4000,
          delay: 16000,
          from: '37.22949249055772 1.4 10.574351743534079',
          to: '15.31 1.4 2.03'
        };
        Object.keys(animationData_four).forEach(function (attr) {
            animation_four.setAttribute(attr, animationData_four[attr]);
        });



        mega_tank.appendChild(animation);
        mega_tank.appendChild(animation_two)
        mega_tank.appendChild(rotation);
        mega_tank.appendChild(animation_three)
        mega_tank.appendChild(rotation_two);
        mega_tank.appendChild(animation_four)
        setTimeout(function(){
            el.parentNode.removeChild(mega_tank)
            var real_block = document.createElement("a-collada-model");
            real_block.setAttribute("hit-handler", true);
            real_block.setAttribute('rotation', {x: 0 , y: 180 , z: 0})
            real_block.setAttribute('scale', {x: 3 , y: 3, z: 3})
            real_block.setAttribute('position', { x :  15.31, y:1.4, z: 2.03})
            real_block.setAttribute('src', '#megatank')
            real_block.setAttribute('target', "healthPoints: 15");
            scene.appendChild(real_block);
            }
        , 20000)
    }
});
