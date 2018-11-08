/**
 * hit and die
 */
AFRAME.registerComponent('hit-handler', {
    dependencies: ['material'],
    init: function () {
        var el = this.el;
        el.addEventListener('hit', () => {
            //el.components.material.material.color.copy(color);
            //put song here
        });
        el.addEventListener('die', () => {
            var score_text = document.getElementById("score");
            total_score++;
            score_text.setAttribute('text', 'value', 'Score ' + total_score )
            console.log(total_score);
            el.parentNode.removeChild(el);
        });
    }
});