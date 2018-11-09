/**
 * Moove block one
 */
AFRAME.registerComponent('moove-block-one', {
    init: function () {
        var el = this.el;

        var block_one = document.getElementById("block_one");
        var animation = document.createElement("a-animation");
        var scene = document.querySelector("a-scene");
        var animationData = {
            attribute: 'position',
            dur: 10000,
            from: '126.4202886389323 0 -36.15065118105115',
            to: '110.58353408752447 0 6.594503240760893'
        };
        Object.keys(animationData).forEach(function (attr) {
            animation.setAttribute(attr, animationData[attr]);
        });

        var animation_two = document.createElement("a-animation");
        var animationData_two = {
            attribute: 'rotation',
            dur: 1000,
            delay: 9000,
            from: '0 -360 0',
            to: '0 0 0'
        };
        Object.keys(animationData_two).forEach(function (attr) {
            animation_two.setAttribute(attr, animationData_two[attr]);
        });

        var animation_three = document.createElement("a-animation");
        var animationData_three = {
            attribute: 'position',
            delay: 10000,
            dur: 5000,
            from: '110.58353408752447 0 6.594503240760893',
            to: '43.29047182809649 0 -2.626120859614865'
        };
        Object.keys(animationData_three).forEach(function (attr) {
            animation_three.setAttribute(attr, animationData_three[attr]);
        });


        var animation_four = document.createElement("a-animation");
        var animationData_four = {
            attribute: 'position',
            dur: 2000,
            delay: 16000,
            from: '43.29047182809649 0 -2.626120859614865',
            to: '34.04181603907202 0 10.733877518938284'
        };
        Object.keys(animationData_four).forEach(function (attr) {
            animation_four.setAttribute(attr, animationData_four[attr]);
        });

        var animation_five = document.createElement("a-animation");
        var animationData_five = {
            attribute: 'position',
            dur: 4000,
            delay: 18000,
            from: '34.04181603907202 0 10.733877518938284',
            to: '-4.967891677320051 0 1.8993933252997939'
        };
        Object.keys(animationData_five).forEach(function (attr) {
            animation_five.setAttribute(attr, animationData_five[attr]);
        });

        var animation_six = document.createElement("a-animation");
        var animationData_six = {
            attribute: 'rotation',
            dur: 1000,
            delay: 20000,
            from: '0 -360 0',
            to: '0 -380 0'
        };
        Object.keys(animationData_six).forEach(function (attr) {
            animation_six.setAttribute(attr, animationData_six[attr]);
        });

        block_one.appendChild(animation);
        block_one.appendChild(animation_two)
        block_one.appendChild(animation_three)
        block_one.appendChild(animation_four)
        block_one.appendChild(animation_five)
        block_one.appendChild(animation_six)
        setTimeout(function(){
            el.parentNode.removeChild(block_one)
            var real_block = document.createElement("a-collada-model");
            real_block.setAttribute("hit-handler", true);
            real_block.setAttribute('position', { x :-4.967891677320051, y:0, z: 1.8993933252997939}) 
            real_block.setAttribute('src', '#block')
            real_block.setAttribute('target', "healthPoints: 15");
            real_block.setAttribute('rotation', {x: 0 , y: -380 , z: 0})
            real_block.setAttribute("id", "new_block");
            scene.appendChild(real_block);

            setInterval(function(){ 
                var new_block = document.getElementById("new_block");
                if(new_block !== null){
                    shoot_the_tower({ x :-4.967891677320051, y:0, z: 1.8993933252997939}, "block"); 
                }
            }, 1000);

            }
        , 24500)
    }
});
