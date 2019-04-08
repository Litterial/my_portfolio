var background=document.getElementById('backbone');




/*defining ids for background buttons*/
var changeBlue=document.getElementById('blueB');
var changeRed=document.getElementById('redB');
var changeYellow=document.getElementById('yellowB');
var nightMode=document.getElementById('darkB');
/*event listeners for background*/
changeBlue.addEventListener('click',azul);
changeRed.addEventListener('click',rojo);
changeYellow.addEventListener('click',amarillo);
nightMode.addEventListener('click',noche);
colorFlag=0; /*Flag for light mode*/
nightMode.setAttribute('name','black'); /*remembers the font is black*/
/*functions for background*/
function rojo()
{
    colorFlag=1;
    background.classList.toggle('red');
    background.classList.remove('yellow');
    background.classList.remove('blue');
    background.classList.remove('blackW');
    borderWhite()
}

function azul()
{
    colorFlag=1;
    background.classList.toggle('blue');
    background.classList.remove('red');
    background.classList.remove('yellow');
    background.classList.remove('blackW');
    borderWhite()
}
function amarillo()
{
    colorFlag=1;
    background.classList.toggle('yellow');
    background.classList.remove('blue');
    background.classList.remove('red');
    background.classList.remove('blackW');
    borderWhite()
}

function noche()
{
    background.classList.toggle('blackW');
    background.classList.remove('blue');
    background.classList.remove('red');
    background.classList.remove('yellow');
    borderWhite()
}


function borderWhite() /*function to invert all the colors*/
{

    if(colorFlag==0)      /* if the background is in light mode, all colors will change to dark mode*/
    {
        $('aside').css('border',"1px solid white");
        $('section').css('border-top',"1px solid white");
        $('nav').css('border',"1px solid white");
        $('footer').css('border',"1px solid white");
        $('footer').css('border-top',"none");
        $('article').css('border',"1px solid white");
        $('article').css('border-top',"none");
        $('button').css('background','#222222');
        $('button').css('border-color','#222222');
        /*$('#redB').css('color','white');
        $('#blueB').css('color','white');
        $('#yellowB').css('color','white');
        $('#darkB').css('color','white');*/
        $('button').css('color','white');  /*changes all font colors in buttons to white*/
        colorFlag=1;   /*sets the program to dark mode*/
        colorChecker();
        nightMode.removeAttribute('name'); /*remembers the font is white*/



    }

    else  /*if the background is dark, changes to light mode*/
    {
        $('aside').css('border',"1px solid black");
        $('section').css('border-top',"1px solid black");
        $('nav').css('border',"1px solid black");
        $('footer').css('border',"1px solid black");
        $('footer').css('border-top',"none");
        $('article').css('border',"1px solid black");
        $('article').css('border-top',"none");
        $('button').css('background','#DDDDDD');
        $('button').css('border-color','#DDDDDD');
       /* $('#redB').css('color','black');
        $('#blueB').css('color','black');
        $('#yellowB').css('color','black');
        $('#darkB').css('color','black');*/
       $('button').css('color','black');   /*all button font is black*/
        colorFlag=0;
        colorChecker();
        nightMode.setAttribute('name','black');  /*remembers that font is black*/

    }
}

/*The purpose of this function is to change the disabled buttons back to their original color once they are changed from the borderWhite function*/
function colorChecker()
{
    if (pandQ.hasAttribute('disabled')) {    /*if the keyboard only button is disabled, they text will turn back to gray*/
        $('#keyboard').css('color', 'gray');
        $('#inputP1').css('color', 'gray');
        $('#inputP2').css('color', 'gray');


    }


    else                /*otherwise the mouse only button text will change to gray*/
    {
        $('#clicks').css('color', 'gray');
    }

}



/*Player 1 and Player 2 buttons*/
var buttonp1=document.getElementById('inputP1');
var buttonp2=document.getElementById('inputP2');
/*P tags for counters*/
var changeLeft=document.getElementById('counter1');
var changeRight=document.getElementById('counter2');

var scoreKeeper=document.getElementById('score');    /*Scorekeeper for both players*/

/*Event listeners for Player 1 and 2 buttons*/
buttonp1.addEventListener('click',up1);
buttonp2.addEventListener('click',up2);

/*Score for players*/
p1count=0;
p2count=0;
keyswereOn=0;


/*increments count for players*/
function up1()
{
    p1count++;
    changeLeft.innerText=p1count;


    if (p1count>p2count)    /*when player 1 leads*/
    {
        scoreKeeper.innerText="Player 1"
    }

    else if (p1count==p2count)   /*otherwise*/
    {
        scoreKeeper.innerText="Tie"
    }

    if (p1count==15)    /*when player 1 hits 15*/
    {
        if (clicking.hasAttribute('disabled')==false) /*check to see if player was playing with P and Q*/
        {
            keyswereOn=1;
        }
        disableAll();  /*calls turn off function*/

        setTimeout(function()   /*delays the alert funcction*/
            {
                alert("Player 1 is the winner.");  /*alerts winner and resests everything*/
                p1count=0;
                p2count=0;
                changeLeft.innerText=0;
                changeRight.innerText=0;
                scoreKeeper.innerText='';
                enableAll();              /*re-enable everthing*/

                },250)

        /*  reset the input counts and resets scoreboard*/

    }

}

function up2()
{
    p2count++;
    changeRight.innerText=p2count;

    if (p2count>p1count)   /*when player 2 leads*/
    {
        scoreKeeper.innerText="Player 2"
    }

    else if (p2count==p1count)
    {
        scoreKeeper.innerText="Tie"
    }

    if(p2count==15)
    {
        if (clicking.hasAttribute('disabled')==false)
        {
            keyswereOn=1;
        }
        disableAll();

        setTimeout(function()
        {
            alert("Player 2 is the winner.");
            p1count=0;
            p2count=0;
            changeLeft.innerText=0;
            changeRight.innerText=0;
            scoreKeeper.innerText='';
            enableAll();

        },250)
    }


}


addEventListener('load',clickingDefault);   /*set up to have clicking on default*/
var pandQ=document.getElementById("keyboard");     /*id for the p and q options*/
var clicking=document.getElementById("clicks");     /*id for the clicking option*/
clicking.addEventListener('click',turnOffKeyboard);         /*turn off keyboard the p and q options*/
pandQ.addEventListener('click',turnOnKeyboard);             /*turn on the p and q options*/

function clickingDefault()   /*turns off keyboard on load*/
{
    removeEventListener('keydown',readKeyboard);
    clicking.setAttribute('disabled',true);   /*grays out the clicking button to notify user what you are using*/


}

function turnOnKeyboard()
{
    addEventListener('keydown',readKeyboard);     /*turns on keyboard commands*/
               /*turns off the P1 and P2 buttons*/
    buttonp1.setAttribute('disabled',true);
    buttonp2.setAttribute('disabled',true);
    clicking.removeAttribute('disabled');           /*ungrays the clicking button*/
    pandQ.setAttribute('disabled',true);       /*grays out the  p and q button*/

    /*If you toogle back between the control buttons, a problem will occur where the disabled button won't have gray text
    * This fixes this problem.*/
    $('#inputP1').css('color','gray');
    $('#inputP2').css('color','gray');
    $('#keyboard').css('color','gray');

    /*This is used to tell the enabled button what the current color scheme is*/
    if (nightMode.hasAttribute('name'))
    {
        $('#clicks').css('color','black')
    }

    else
    {
        $('#clicks').css('color','white')
    }

}

function turnOffKeyboard()
{
    /*turns the P1 and P2 buttons back on*/
    buttonp1.removeAttribute('disabled');
    buttonp2.removeAttribute('disabled');
    removeEventListener('keydown',readKeyboard);
    pandQ.removeAttribute('disabled');
    clicking.setAttribute('disabled',true);

    /*If you toogle back between the control buttons, a problem will occur where the disabled button won't have gray text
    * This fixes this problem.*/
    $('#clicks').css('color','gray');

    /*This is used to tell the enabled button what the current color scheme is*/
    if (nightMode.hasAttribute('name'))
    {
        $('#inputP1').css('color','black');
        $('#inputP2').css('color','black');
        $('#keyboard').css('color','black');
    }
    else
    {
        $('#inputP1').css('color','white');
        $('#inputP2').css('color','white');
        $('#keyboard').css('color','white');
    }

}

function readKeyboard(e) {

    if (e.code === 'KeyQ')   /*reads player 1's key*/
    {
        up1()  /*calls scorekeeping for player 1*/

    } else if (e.code === 'KeyP')   /*reads player 2's key*/
    {
        up2()   /*calls scorekeeping for player 2*/


    }
}


function disableAll()  /*turns off everything*/
{
    buttonp1.setAttribute('disabled',true);
    buttonp2.setAttribute('disabled',true);
    removeEventListener('keydown',readKeyboard);
    clicking.setAttribute('disabled',true);
    pandQ.setAttribute('disabled',true);
}

function enableAll()  /*turns everything back.*/
{
    if (keyswereOn==1)  /*If the players was playing on keyboard, all keyboard controls are re-enabled*/
    {
        addEventListener('keydown',readKeyboard);
        clicking.removeAttribute('disabled');

    }

    else   /*otherwise all P1 and P2 buttons are back on line*/
    {
        buttonp1.removeAttribute('disabled');
        buttonp2.removeAttribute('disabled');
        pandQ.removeAttribute('disabled');
    }
}


