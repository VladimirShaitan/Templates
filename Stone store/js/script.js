function idN(str){return document.getElementById(str)}// id name 
function clN(str){return document.getElementsByClassName(str);}// class name



for(let i = 0; i <= clN('parentMaterial').length-1  ; i++){
    clN('parentMaterial')[i].addEventListener('click', showChild);
    //console.log(clN('parentMaterial')[i])
}

function showChild(){
   for (let i = 0; i <= clN('parentMaterial').length-1; i++ ){
        if(clN('parentMaterial')[i].childNodes[5].checked !== true){
           clN('childMaterial')[i].style.display = 'none';
        } else if(clN('parentMaterial')[i].childNodes[5].checked === true){
            clN('childMaterial')[i].style.display = 'block';  
        }
   }
}
function showPram(){
if(idN('pram').checked === true){
    idN('pramShape').style.display = 'block'
    idN('gshapeRoom').style.display = 'none'
    idN('pshapeRoom').style.display = 'none'
}};
function showGshape(){
    if(idN('gshape').checked === true){
    idN('pramShape').style.display = 'none'
    idN('gshapeRoom').style.display = 'block'
    idN('pshapeRoom').style.display = 'none'
}};
function showPshape(){
    if(idN('pshape').checked === true){
    idN('pramShape').style.display = 'none'
    idN('gshapeRoom').style.display = 'none'
    idN('pshapeRoom').style.display = 'block'
}};

