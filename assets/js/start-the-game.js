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
            var xana_song = document.getElementById("xana_song");
            console.log(intro_song, xana_song);
        });
    }
});