/**
 *  Start the game by hiting the eyes of Xana
 */
console.log("here")
AFRAME.registerComponent('start-the-game', {
    dependencies: ['material'],
    init: function () {
        var el = this.el;
        el.addEventListener('hit', () => {
        });
        el.addEventListener('die', () => {
            var intro_song = document.getElementById("intro_song");
            let intro_audio = intro_song.components.sound;

            var xana_song = document.getElementById("xana_song");
            let xana_audio = xana_song.components.sound;

            var manta_song = document.getElementById('manta_song');
            manta_song.setAttribute("src", "assets/song/manta.wav");
            manta_song.setAttribute("volume", 350);
            
            let manta_audio = manta_song.components.sound;

            intro_audio.stopSound();
            xana_audio.playSound();
            setTimeout(function(){ manta_audio.playSound(); }, 10000);
        });
    }
});