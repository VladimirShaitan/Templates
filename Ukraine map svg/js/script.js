
function cl_n(elem){return document.getElementsByClassName(elem)}
function id_n(elem){return document.getElementById(elem)}
    
    

for(let counter = 0; counter <= cl_n('jvectormap-region').length - 1; counter++){
    cl_n('jvectormap-region')[counter].onclick = function(){
        for(let i = 0; i <= cl_n('jvectormap-region').length -1; i++){
            if(cl_n('jvectormap-region')[counter].id === cl_n('reg_name')[i].getAttribute('data-region')){
                alert(cl_n('reg_name')[i].innerHTML);
                
               /* for(let k = 0; cl_n('jvectormap-region').length -1; k++ ){
                    cl_n('jvectormap-region')[k].style.fill = '#FFEB3B';
                }*/
                
                cl_n('jvectormap-region')[counter].style.fill = 'black';
                
                
            }
        }
    }
}



