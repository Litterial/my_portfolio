var changeJS=document.getElementById("JavaScript");
changeJava=document.getElementById("Java");
changeCplus=document.getElementById('C++');
changePython=document.getElementById('Python');
changejQ=document.getElementById('jQuery');
changeLinux=document.getElementById('Linux');
changeSourceC=document.getElementById('SourceC');
changeSpanish=document.getElementById("Spanish");


changeJS.addEventListener('mouseover',novice);
changeJava.addEventListener('mouseover',novice);
changeCplus.addEventListener('mouseover',novice);
changePython.addEventListener('mouseover',novice);
changejQ.addEventListener('mouseover',novice);
changeLinux.addEventListener('mouseover',novice);
changeSourceC.addEventListener('mouseover',novice);
changeSpanish.addEventListener('mouseover',advanced);
changeJS.addEventListener('mouseout',normalJS);
changeJava.addEventListener('mouseout',normalJava);
changeCplus.addEventListener('mouseout',normalCplus);
changePython.addEventListener('mouseout',normalPython);
changejQ.addEventListener('mouseout',normaljQuery);
changeLinux.addEventListener('mouseout',normalLinux);
changeSourceC.addEventListener('mouseout',normalSourceC);
changeSpanish.addEventListener('mouseout',normalSpanish);

function novice(e)
{
    e.target.textContent= "Level: Novice";
}

function advanced(e)
{
    e.target.textContent="Level: Advanced";
}

function normalJS(e)
{
    e.target.textContent='JavaScript';
}
function normalJava(e)
{
    e.target.textContent="Java";
}
function normalCplus(e)
{
    e.target.textContent="C++";
}
function normalPython(e)
{
    e.target.textContent="Python";
}

function normaljQuery(e)
{
    e.target.textContent='jQuery';
}
function normalLinux(e)
{
    e.target.textContent="Linux";
}

function normalSourceC(e)
{
    e.target.textContent="Source Control";
}

function normalSpanish(e)
{
    e.target.textContent="Spanish";
}