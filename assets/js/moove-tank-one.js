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
          delay: 10000,
          dur: 5000,
          from: '13.540591578549146 1.1 -87.27217106987848',
          to: '35.97771511547195 1.4 -40.5852215284847'
        };
        Object.keys(animationData_two).forEach(function (attr) {
            animation_two.setAttribute(attr, animationData_two[attr]);
        });

        var animation_three = document.createElement("a-animation");
        var animationData_three = {
          attribute: 'position',
          dur: 2000,
          delay: 16000,
          from: '35.97771511547195 1.4 -40.5852215284847',
          to: '37.22949249055772 1.4 10.574351743534079'
        };
        Object.keys(animationData_three).forEach(function (attr) {
            animation_three.setAttribute(attr, animationData_three[attr]);
        });


        var animation_four = document.createElement("a-animation");
        var animationData_four = {
          attribute: 'position',
          dur: 4000,
          delay: 18000,
          from: '37.22949249055772 1.4 10.574351743534079',
          to: '3.578202597130034 1.4 -0.2350219625778212'
        };
        Object.keys(animationData_four).forEach(function (attr) {
            animation_four.setAttribute(attr, animationData_four[attr]);
        });

        var animation_five = document.createElement("a-animation");
        var animationData_five = {
            attribute: 'position',
            dur: 4000,
            delay: 18000,
            from: '15.182594378517683 1.4 2.754320290749121',
            to: '3.215706003309395 1.4 0.4845296198023628'
        };
        Object.keys(animationData_five).forEach(function (attr) {
            animation_five.setAttribute(attr, animationData_five[attr]);
        });

        mega_tank.appendChild(animation);
        mega_tank.appendChild(animation_two)
        mega_tank.appendChild(animation_three)
        mega_tank.appendChild(animation_four)
        mega_tank.appendChild(animation_five)
        setTimeout(function(){
            el.parentNode.removeChild(mega_tank)
            var real_block = document.createElement("a-collada-model");
            real_block.setAttribute("hit-handler", true);
            real_block.setAttribute('position', { x :  3.578202597130034, y:1.4, z: 0.4845296198023628})
            real_block.setAttribute('src', '#megatank')
            real_block.setAttribute('target', "healthPoints: 15");
            scene.appendChild(real_block);
            }
        , 24000)
    }
});
