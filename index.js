$(document).scroll(function()
{
    var x=$(this).scrollTop();
    if (x > 100) {
        $('#scrollUp').css({'display':'block'}).addClass('fadeInRight animated').removeClass('fadeOutRight ');
        console.log(x)
    }
   else
    {
        if($('#scrollUp').css('display')==='block')
        $('#scrollUp').removeClass('fadeInRight animated').addClass('fadeOutRight animated');
    }
});

