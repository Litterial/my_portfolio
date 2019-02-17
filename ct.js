/*Add the necessary code to determine if a player is the winner and display an alert box stating who the winner is. (HINT: Use the Array)
*/

var gameSpaces=document.querySelectorAll('td');  /*finds all elements td*/
var nomoreclicks=document.querySelectorAll('td');
var newGame=document.querySelector('button');
var nameChange=document.querySelector('h2');

var x=1;  /*variable represents player 1 when x =1*/
var end=0;
newGame.addEventListener('click',function () {   /*clears the board*/
    for(j=0;j<gameSpaces.length;j++)
    {
        gameSpaces[j].textContent="";
        x=1;
        end=0;
        newGame.addEventListener('click',function(){}) ;
        nameChange.textContent='Player 1';
        gameSpaces[j].classList.add('white');
    }

});

for (var i = 0; i < gameSpaces.length; i++) {
    nomoreclicks[i].addEventListener('click',stop);
    gameSpaces[i].addEventListener('click', clickedSquared);     /*click event listener; calls function*/
}
    function clickedSquared(e) {
        if (x === 1 && e.target.innerHTML === "")   /*code to prevent player 1 from changing the value when it's filled out*/
        {
            // stop();
            if (end==0)
            {
                nameChange.textContent = 'Player 2';
                e.target.innerHTML = "X";   /*sets the cell to X*/
                x--;    /*switches to player 2*/
            }
        }
        else if (x === 0 && e.target.innerHTML === "")   /*code to prevent player 2 from changing the value when it's fillde out*/
        {
            // stop();
            if (end==0)
            {
                e.target.innerHTML = "O";    /*sets the cell to O*/
                x++;    /*switches to player1*/
                nameChange.textContent = 'Player 1';
            }
        }

        if (end==0)
        checkforWinner();

    }

function checkforWinner()
{
    console.log('Checking for winner');
    /*win conditions for X*/
    if((gameSpaces[0].innerText=== gameSpaces[1].innerText &&gameSpaces[1].innerText === gameSpaces[2].innerText && gameSpaces[2].innerText==="X")
        ||(gameSpaces[3].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[5].innerText && gameSpaces[5].innerText==="X")
        ||(gameSpaces[6].innerText=== gameSpaces[7].innerText &&gameSpaces[7].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="X")
        ||(gameSpaces[0].innerText=== gameSpaces[3].innerText &&gameSpaces[3].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText==="X")
        ||(gameSpaces[1].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[7].innerText && gameSpaces[7].innerText==="X")
        ||(gameSpaces[2].innerText=== gameSpaces[5].innerText &&gameSpaces[5].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="X")
        ||(gameSpaces[0].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="X")
        ||(gameSpaces[2].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText==="X")) {
        alert("X wins");
        alert("Press the new game button to start a new game.");
        end=1;
                    /*Outlines the cells yellow for winner*/
        if (gameSpaces[0].innerText=== gameSpaces[1].innerText &&gameSpaces[1].innerText === gameSpaces[2].innerText && gameSpaces[2].innerText==="X")
        {
            gameSpaces[0].classList.add('yellow');
            gameSpaces[1].classList.add('yellow');
            gameSpaces[2].classList.add('yellow');

        }

        else if (gameSpaces[3].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[5].innerText && gameSpaces[5].innerText==="X")
        {
            gameSpaces[3].classList.add('yellow');
            gameSpaces[4].classList.add('yellow');
            gameSpaces[5].classList.add('yellow');
        }

        else if (gameSpaces[6].innerText=== gameSpaces[7].innerText &&gameSpaces[7].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="X")
        {
            gameSpaces[6].classList.add('yellow');
            gameSpaces[7].classList.add('yellow');
            gameSpaces[8].classList.add('yellow');
        }

        else if (gameSpaces[0].innerText=== gameSpaces[3].innerText &&gameSpaces[3].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText==="X")
        {
            gameSpaces[0].classList.add('yellow');
            gameSpaces[3].classList.add('yellow');
            gameSpaces[6].classList.add('yellow');
        }

        else if(gameSpaces[1].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[7].innerText && gameSpaces[7].innerText==="X")
        {
            gameSpaces[1].classList.add('yellow');
            gameSpaces[4].classList.add('yellow');
            gameSpaces[7].classList.add('yellow');
        }

        else if(gameSpaces[2].innerText=== gameSpaces[5].innerText &&gameSpaces[5].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="X")
        {
            gameSpaces[2].classList.add('yellow');
            gameSpaces[5].classList.add('yellow');
            gameSpaces[8].classList.add('yellow');
        }

        else if (gameSpaces[0].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="X")
        {
            gameSpaces[0].classList.add('yellow');
            gameSpaces[4].classList.add('yellow');
            gameSpaces[8].classList.add('yellow');
        }

        else
        {
            gameSpaces[2].classList.add('yellow');
            gameSpaces[4].classList.add('yellow');
            gameSpaces[6].classList.add('yellow');
        }

    }

    /*win conditions for O*/
    else if((gameSpaces[0].innerText=== gameSpaces[1].innerText &&gameSpaces[1].innerText === gameSpaces[2].innerText && gameSpaces[2].innerText==="O")
        ||(gameSpaces[3].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[5].innerText && gameSpaces[5].innerText==="O")
        ||(gameSpaces[6].innerText=== gameSpaces[7].innerText &&gameSpaces[7].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="O")
        ||(gameSpaces[0].innerText=== gameSpaces[3].innerText &&gameSpaces[3].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText==="O")
        ||(gameSpaces[1].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[7].innerText && gameSpaces[7].innerText==="O")
        ||(gameSpaces[2].innerText=== gameSpaces[5].innerText &&gameSpaces[5].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="O")
        ||(gameSpaces[0].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="O")
        ||(gameSpaces[2].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText==="O"))
    {
        alert("O wins");
        alert("Press the new game button to start a new game.");
        end=2;

                        /*Outlines the cells yellow for winner*/

        if (gameSpaces[0].innerText=== gameSpaces[1].innerText &&gameSpaces[1].innerText === gameSpaces[2].innerText && gameSpaces[2].innerText==="O")
        {
            gameSpaces[0].classList.add('yellow');
            gameSpaces[1].classList.add('yellow');
            gameSpaces[2].classList.add('yellow');

        }

        else if (gameSpaces[3].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[5].innerText && gameSpaces[5].innerText==="O")
        {
            gameSpaces[3].classList.add('yellow');
            gameSpaces[4].classList.add('yellow');
            gameSpaces[5].classList.add('yellow');
        }

        else if (gameSpaces[6].innerText=== gameSpaces[7].innerText &&gameSpaces[7].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="O")
        {
            gameSpaces[6].classList.add('yellow');
            gameSpaces[7].classList.add('yellow');
            gameSpaces[8].classList.add('yellow');
        }

        else if (gameSpaces[0].innerText=== gameSpaces[3].innerText &&gameSpaces[3].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText==="O")
        {
            gameSpaces[0].classList.add('yellow');
            gameSpaces[3].classList.add('yellow');
            gameSpaces[6].classList.add('yellow');
        }

        else if(gameSpaces[1].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[7].innerText && gameSpaces[7].innerText==="O")
        {
            gameSpaces[1].classList.add('yellow');
            gameSpaces[4].classList.add('yellow');
            gameSpaces[7].classList.add('yellow');
        }

        else if(gameSpaces[2].innerText=== gameSpaces[5].innerText &&gameSpaces[5].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="O")
        {
            gameSpaces[2].classList.add('yellow');
            gameSpaces[5].classList.add('yellow');
            gameSpaces[8].classList.add('yellow');
        }

        else if (gameSpaces[0].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="O")
        {
            gameSpaces[0].classList.add('yellow');
            gameSpaces[4].classList.add('yellow');
            gameSpaces[8].classList.add('yellow');
        }

        else
        {
            gameSpaces[2].classList.add('yellow');
            gameSpaces[4].classList.add('yellow');
            gameSpaces[6].classList.add('yellow');
        }



    }

     else if ((gameSpaces[0].innerText!==''&&gameSpaces[1].innerText!==''&&gameSpaces[2].innerText!==''&&gameSpaces[3].innerText!==''&&gameSpaces[4].innerText!=='')
        &&(gameSpaces[5].innerText!==''&&gameSpaces[6].innerText!==''&&gameSpaces[7].innerText!==''&&gameSpaces[8].innerText!==''))
    {
        alert("Cat");
        alert("Press the new game button to start a new game.");
        end=3;

        /*Outlines the cells gray for tie*/

        for (m=0;m<gameSpaces.length;m++)
        {
            gameSpaces[m].classList.add('gray');
        }

    }


}

function stop() {

    if (end == 1)
    {
        alert("X has won");
        alert("Press the new game button to start a new game.");

    }


    if (end==2)
    {
        alert("O has won");
        alert("Press the new game button to start a new game.")
    }

    if (end==3) {
        alert("Cat");
        alert("Pres the new game button to start a new game.")
    }
}

