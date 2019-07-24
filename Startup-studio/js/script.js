(function(){

    function getElemByTag(elem){return document.getElementsByTagName(elem)}
    function getElemByClass(elem){return document.getElementsByClassName(elem)}

    var bodyVar = getElemByTag("body")[0];
    var sliderImgs = getElemByClass('slide_img');
    var discount = getElemByClass('discount_pers');

    window.onresize = function(){
        if(bodyVar.clientWidth <= 767){
            for(var i = 0; i < sliderImgs.length; i++){
                sliderImgs[i].src = 'images/slider/slide_for_small.png'
            }
        } else {
            for(var k = 0; k < sliderImgs.length; k++){
                sliderImgs[k].src = 'images/slider/slide_1.png'
            }
        }
    };

    window.onload = function(){
        if(bodyVar.clientWidth <= 767){
            for(var i = 0; i < sliderImgs.length; i++){
                sliderImgs[i].src = 'images/slider/slide_for_small.png'
            }
        }


        for (var k = 0; k < discount.length; k++){
            if(discount[k].innerHTML === ''){
                discount[k].style.background = 'transparent'
            }
        }

    };

} )();









