p1_name = localStorage.getItem("player1");
p2_name = localStorage.getItem("player2");

//score var

p1_score=0;
p2_score=0;

//show score name

document.getElementById("player1_name").innerHTML=p1_name + ":";
document.getElementById("player2_name").innerHTML=p2_name + ":";

//score

document.getElementById("player1_score").innerHTML=p1_score;
document.getElementById("player2_score").innerHTML=p2_score;

//show who is asking\answering question

document.getElementById("player_question").innerHTML="Question turn - " + p1_name;
document.getElementById("player_answer").innerHTML="Answer turn -" + p2_name;

//function send
 function send() {
        A1 = document.getElementById("word").value;
    
        A2= document.getElementById("word1").value;
        
        word3= A1 + "x" + A2;
        
        first="<h4 id='word_display'>Q." + word3 +  "</h4>";
        
        second="<br> Answer: <input type='text' id='input_check_box'>";
        
         third = "<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>";
         
         final=first + second + third;
        
         document.getElementById("output").innerHTML=final;
        
         document.getElementById("word").value="";
        
         document.getElementById("word1").value="";   
    }
    
// if ("word" == " ") or ("word1" == " "); {
 //   document.getElementById("asd").innerHTML="number is required";
//}



 