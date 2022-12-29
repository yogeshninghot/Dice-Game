
function roll () {
    let audio = document.getElementById("audio");
   audio.play();
   document.getElementById("diceValue").innerHTML="";
   document.getElementById("dice").classList.add("dice-animation");
   setTimeout(()=>{
    let diceNum = Math.floor(Math.random()*6)+1;
    document.getElementById("diceValue").innerHTML=diceNum;
   },3000)
}