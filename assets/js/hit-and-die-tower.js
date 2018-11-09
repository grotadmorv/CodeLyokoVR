/**
 * hit and die tower
 */
AFRAME.registerComponent('hit-handler-tower', {
    dependencies: ['material'],
    init: function () {
        var el = this.el;
        var life_tower_text = document.getElementById('tower_text');
        el.addEventListener('hit', () => {
            total_life_tower--;
            life_tower_text.setAttribute('text', 'value', 'Life ' + total_life_tower);
            if(total_life_tower === 0 ){
                var game_over_text = document.getElementById("game_over");
                game_over_text = setAttribute('text', 'value', 'Xana a tué la tour ! Vous avez perdu, Total de votre score : ' + total_score);
            }
        });
        el.addEventListener('die', () => {
        });
    }
});