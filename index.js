$(document).scroll(function()
{
    var x=$(this).scrollTop();
    if (x > 100) {
        $('#scrollUp').css({'display':'block'}).addClass('fadeInRight animated').removeClass('fadeOutRight ');
    }
   else
    {
        if($('#scrollUp').css('display')==='block')
        $('#scrollUp').removeClass('fadeInRight animated').addClass('fadeOutRight animated');
    }
});


     
     var links = document.querySelectorAll('#navbar div a'); 
     let checkbox = document.getElementById('hamburger');

     if (window.innerWidth <=767) {
        for( let i=0; i<links.length; i++){
            links[i].addEventListener("click",menu);
        }
     }

     else{
        for( let i=0; i<links.length; i++){
            links[i].removeEventListener("click",menu);
        }
     }

     function menu (e) {
        checkbox.checked ==true? checkbox.checked = false: checkbox.checked=true;
    }
         

    

   
   
