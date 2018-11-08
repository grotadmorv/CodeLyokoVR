/**
 * Moove odd
 */
AFRAME.registerComponent('moove-odd-one', {
    init: function () {

        var camera = document.getElementById("camera-entity");
        var animation = document.createElement("a-animation");
        var animationData = {
            attribute: 'position',
            dur: 3000,
            from: '-39.651780239809426 0 -19.106626317807265',
            to: '-32 0 -10'
        };
        Object.keys(animationData).forEach(function (attr) {
            animation.setAttribute(attr, animationData[attr]);
        });

        var banzai_song = document.getElementById('banzai_song');
        banzai_song.setAttribute("src", "assets/song/banzai.wav");
        banzai_song.setAttribute("volume", 400);
        let banzai_audio = banzai_song.components.sound;
        banzai_audio.playSound(); 

        camera.appendChild(animation);
    }
});