var d1 = "images/dice1.png";
var d2 = "images/dice2.png";
var d3 = "images/dice3.png";
var d4 = "images/dice4.png";
var d5 = "images/dice5.png";
var d6 = "images/dice6.png";

var dice = [d1,d2,d3,d4,d5,d6];

var num1 = Math.floor(Math.random()*6)+1;
var num2 = Math.floor(Math.random()*6)+1;



document.querySelector(".img1").src = dice[num1];
document.querySelector(".img2").src = dice[num2];


if(num1 > num2){
    document.querySelector(".heading").innerHTML = "🏆 Player 1 is WINNER";
}else if (num1 === num2){
    document.querySelector(".heading").innerHTML = " 🎌 Tie";

}
else{
    document.querySelector(".heading").innerHTML = " 🏆 Player 2 is WINNER";

}