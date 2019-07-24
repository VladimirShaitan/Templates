/**
 * Created by Frem on 08.06.2016.
 */
var slider = document.getElementById('slider');
var filter = document.getElementById('filter');
if(body.clientWidth <= 1024){
    body.insertBefore(slider, filter)
}