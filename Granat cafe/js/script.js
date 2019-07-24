window.onload = function(){
    var slider = document.getElementsByClassName('slider_item');
    console.log(Number (slider[1].style.left));

    var navSlider = document.getElementById('left');
    var navSlide1 = document.getElementById('right');
    console.log(document.getElementById('left'));

    for(var i = 0; i < slider.length; i++){
        if(parseInt(slider[i].style.left) > 0){
            slider[i].setAttribute('class', 'slider_item one')
        } else if (parseInt(slider[i].style.left) === 0){
            slider[i].setAttribute('class', 'slider_item')
        }
    }

navSlider.onclick = function(){
    console.log('vvvvv')
for(var i = 0; i < slider.length; i++){
if(parseInt(slider[i].style.left) > 0){
    slider[i].setAttribute('class', 'slider_item one')
} else if (parseInt(slider[i].style.left) === 0){
    slider[i].setAttribute('class', 'slider_item')
}
}
}}