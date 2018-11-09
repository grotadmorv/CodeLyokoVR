/**
 * Attack monster Xana
 */

function shoot_the_tower(position, monster){
    var scene = document.querySelector("a-scene");

    switch(monster){
        case "block":
            position = {x: -4 , y: 1 , z: position.z }
            break;
        case "crabe":
            position = {x: -14 , y: 4.5 , z: position.z }
            break;
        case "manta" :
            position = {x : position.x, y: position.y, z: position.z}
            break;
        default:
            break;
    }

    var bulletMonster = document.createElement("a-entity");
    bulletMonster.setAttribute('geometry', "primitive","sphere" );
    bulletMonster.setAttribute("geometry", "radius", 0.1 );
    bulletMonster.setAttribute("material", "color", "red" );
    bulletMonster.setAttribute("position", position);
    scene.appendChild(bulletMonster);

    var position_to_string = position.x + " " + position.y + " " + position.z;

    var animation = document.createElement("a-animation");
    var animationData = {
        attribute: 'position',
        dur: 5000,
        from: position_to_string,
        to: '-40 4 -17.034564105607295'
    };
    Object.keys(animationData).forEach(function (attr) {
        animation.setAttribute(attr, animationData[attr]);
    });

    bulletMonster.appendChild(animation);
}