var readLineSycn = require("readline-sync")
var chalk = require("chalk")


var score = 0
var userName = readLineSycn.question("Whats Your Name")
console.log("Welcome" + userName + "How Well Do You Know APOORV")



function play(question, answer,options) {
  console.log(question)
  for(let i =0 ; i < options.length; i++){
    console.log(`${i}) `,options[i])
  }
  var userAnswer = readLineSycn.question("Answer >")
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("RIGHT")
    score = score + 1

  } else {
    console.log("WRONG")
    score = score - 1

  }
  console.log("Current score:", score)
  console.log("------------------")
}




var question = [{
  question: "WHAT IS MY NAME?",
  options:["APOORV","ROHIT","ANKIT","SUMIT"],
   answer:"APOORV"
},
{
  question: "WHAT IS MY QUALIFICATION?",
  options:["B.COM","MBA","ENGINEER","DOCTOR"],
  answer:"MBA"
  
},
{
  question: "WHAT IS MY FAVOURITE FOOD?",
  options:["SANDWICHES","Vada Pav","Pizza","Pasta"],
  answer:"SANDWICHES"
 
},
{
  question: "WHAT IS MY DAUGHTER NAME",
  options:["PRIYA","RIYA","IRA","SIYA"
  ],
  answer:"IRA"
 
},
{
  question: "WHERE DO I LIVE?",
  options:["BHOPAL","DELHI","BANGLORE","KHARGONE"],
  answer:"MUESUEM"
  
},
{
  question: "WHAT IS MY BIRTDAY MONTH?",
  options:["OCTOBER","MARCH","MAY","DECEMBER"],
  answer:"OCTOBER" 
}];

for (var i = 0; i < question.length; i++) {
  var currentquestion = question[i]
  play(currentquestion.question, currentquestion.answer,currentquestion.options)
}
console.log("CONGRATULATIONS!! YOUR SCORE", score)
console.log("CHECK YOUR SCORE")