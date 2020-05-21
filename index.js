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



     let media = window.matchMedia("(max-width:767px)");
     let links = document.querySelectorAll('#navbar div a'); 
     let checkbox = document.getElementById('hamburger');
   

function menu (e)
{  
    if (e.matches) {
        for( let i=0; i<links.length; i++){
            links[i].addEventListener("click",toggleMenu);
        }
    }
    else{
        for( let i=0; i<links.length; i++){
            links[i].removeEventListener("click",toggleMenu);
        }
    }
}

function toggleMenu (e) {
         console.log("clicked");
        checkbox.checked ==true? checkbox.checked = false: checkbox.checked=true;
}
         

    
     menu(media);
     media.addListener(menu);
   
   
