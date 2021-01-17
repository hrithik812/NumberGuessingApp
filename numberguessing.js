//Guessing the number

let flag=0;
for(let iterator=0;iterator<3;iterator++)
{
    let guessNumber=parseInt(prompt("Enter a number ranging from 1 to 10"));
    let randomNumber=Math.floor(Math.random()*10)+1;
     if(randomNumber==guessNumber)
     {
         alert("You Win!");
         flag=1;
         break;
     }
     else if(randomNumber>guessNumber)
     {
         alert("Correct answer is greater!");
     }
     else{
         alert("Correct answer is smaller!")
     }

}
if(flag==0)
{
alert("You lost!");
}