function append(x)
{
console.log(x);
const screen=document.getElementById("screen");
prev_text=screen.innerHTML;
screen.innerHTML=prev_text+x;
}
function clearscreen()
{
const screen=document.getElementById("screen");
screen.innerHTML="";
}
function clearlast(){
const screen=document.getElementById("screen");
prev_text=screen.innerHTML;
prev_text=prev_text.slice(0,-1);
screen.innerHTML=prev_text;
}
function output()
{
const screen=document.getElementById("screen");
let answer=eval(screen.innerHTML);
screen.innerHTML=answer;
}

