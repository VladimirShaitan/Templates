/**
 * Created by Frem on 11.05.2016.
 */
var mainContainer = document.getElementById('main-container');

 window.onload = function(){
    if(screen.width <= 1200 ){
        mainContainer.setAttribute('class', 'container mobile-menu')
    } else {
        mainContainer.setAttribute('class', 'mobile-menu')
    }

};