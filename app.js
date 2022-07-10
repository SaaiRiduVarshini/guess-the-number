const submitButton=document.getElementById("submitButton");
var randomNumber=Math.round(Math.random()*100);
console.log(randomNumber);
var live=10;
var text;
console.log(submitButton);
const message=document.getElementById("message");
console.log(message);
const lives=document.getElementById("lives")
console.log(lives);
submitButton.onclick = () =>{
    var inputValue=document.getElementById("input-number").value;
    console.log(inputValue);
    live--;
  if(inputValue===randomNumber){
     location.href='./win.html' 
  }
  else if (live=== 0){
   location.href='./lose.html'
  }
  else if(inputValue>randomNumber){
    text=`your guess is too high. ${live} remaining`;
  }
  else if(inputValue<randomNumber){
    text=`your guess is too low. ${live} remaining`;
  }
  console.log(live);
  console.log(text);
  message.style.display="inherit";
  message.innerHTML=text;
  lives.innerHTML=live;

}



