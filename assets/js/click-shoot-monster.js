/**
 * Attack monster Xana
 */

 AFRAME.registerComponent('shoot-monster', {
     init: function(){
        this.el.emit('shoot');
     }
 })