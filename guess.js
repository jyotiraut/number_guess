
let y = Math.floor((Math.random() * 10) + 1);

var guess =1;
document.getElementById("button").onclick = function(){
    var x = document.getElementById("number1").value;
    console.log(x)
    

 if(x==y)
 {
     alert("CONGRATULATION!! U GUESS THE RIGHT NUMBER IN " + guess + " GUESS")
}

else if(x<y){
    alert("SORRY!!ENTER THE SMALLER NUMBER")
     guess++;
 }

 else{
     alert("SORRY!!ENTER GREATER NUMBER")
        guess++;
 }
}