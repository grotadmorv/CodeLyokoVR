/**
 *  Start the game by hiting the eyes of Xana
 */
AFRAME.registerComponent('start-the-game', {
    dependencies: ['material'],
    init: function () {
        var el = this.el;
        el.addEventListener('hit', () => {
        });
        el.addEventListener('die', () => {
            var camera = document.getElementById("camera-entity");
            var block_one = document.getElementById("block_one");
            var crabe = document.getElementById("crabe_one");

            var megatank = document.getElementById("mega_tank");
            var mantra = document.getElementById("mantra_one");

            var mantratwo = document.getElementById("mantra_two");

            var intro_song = document.getElementById("intro_song");
            let intro_audio = intro_song.components.sound;

            var xana_song = document.getElementById("xana_song");
            let xana_audio = xana_song.components.sound;

            var manta_song = document.getElementById('manta_song');
            manta_song.setAttribute("src", "assets/song/manta.wav");
            manta_song.setAttribute("volume", 350);
            let manta_audio = manta_song.components.sound;

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

            setTimeout(function(){ el.parentNode.removeChild(el); }, 3000)

            intro_audio.stopSound();
            xana_audio.playSound();
            setTimeout(function () {
                manta_audio.playSound();
                camera.setAttribute("moove-odd-one", true);
                block_one.setAttribute("moove-block-one", true);
                crabe.setAttribute("crabe", true);
                megatank.setAttribute("tank", true);
                mantra.setAttribute("mantra", true);
                mantratwo.setAttribute("mantraTwo", true);

            }, 10000);
        });
    }
});
