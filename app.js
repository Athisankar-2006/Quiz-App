
// document.addEventListener('DOMContentLoaded'()={



// });



let quizContainer = document.querySelector("quiz-container");
const questionContainer = document.getElementById("question-container");
let nextBtn = document.getElementById("next-btn");
const startBtn = document.getElementById("start-btn");
let resultContainer=document.getElementById("result-container");
let restartBtn = document.getElementById("restart-btn");
let scoreDisplay =document.getElementById("score-display");
let questionText=document.getElementById("question-text");
let choiceList=document.getElementById("choice-list")


let questions = [
  {
    question: "Which language is primarily used for styling web pages?",
    choices: ["HTML", "Python", "CSS", "Java"],
    answer: "CSS"
  },
  {
    question: "Which programming language runs in a web browser?",
    choices: ["C++", "JavaScript", "Python", "Go"],
    answer: "JavaScript"
  },
  {
    question: "Which language is known for its use in artificial intelligence and data science?",
    choices: ["PHP", "Python", "Ruby", "HTML"],
    answer: "Python"
  },
  {
    question: "What does HTML stand for?",
    choices: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "HyperTool Multi Language",
      "Hyperlink and Text Markup Language"
    ],
    answer: "HyperText Markup Language"
  },
  {
    question: "Which of the following is a statically typed programming language?",
    choices: ["Java", "JavaScript", "Python", "Ruby"],
    answer: "Java"
  }
];



let currentQuestionIndex=0;
let score =0




startBtn.addEventListener('click',startQuiz)

nextBtn.addEventListener('click',()=>{

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        showQuestion()

    }else{
           showResult()
    }

});

restartBtn.addEventListener('click',()=>{
    currentQuestionIndex=0
    score=0;
    resultContainer.classList.add("hidden");
    restartBtn.classList.add("hidden");
    startQuiz()
})


function startQuiz(){
    questionContainer.classList.remove("hidden");
    startBtn.classList.add("hidden");
    // nextBtn.classList.remove("hidden")
    resultContainer.classList.add("hidden")

    showQuestion()
}


function showQuestion(){

    
     questionText.textContent=questions[currentQuestionIndex].question
     choiceList.innerHTML=""//clear previous choice
     questions[currentQuestionIndex].choices.forEach(choice =>{
        const li=document.createElement('li');
        li.textContent=choice
        li.addEventListener('click',()=> selectAnswer(choice));
        choiceList.appendChild(li);
        nextBtn.classList.add("hidden")

     })

}


function showResult(){
    questionContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    restartBtn.classList.remove('hidden')
    scoreDisplay.textContent=`${score} out of ${questions.length}`
}

function selectAnswer(choice){
    const correctAnswer=questions[currentQuestionIndex].answer
    if(choice === correctAnswer){
        score++
    }
    nextBtn.classList.remove('hidden')
     
}

// nextBtn.addEventListener("click",()=>{
//     questionContainer.classList.add("hidden")
//     startBtn.classList.add("hidden");
//     nextBtn.classList.add("hidden");
//     resultContainer.classList.remove("hidden")
//     restartBtn.classList.remove("hidden");

   
// })


// restartBtn.addEventListener("click",()=>{
//   restartBtn.classList.add("hidden");
//   startBtn.classList.remove("hidden");
//  nextBtn.classList.add("hidden");
//     resultContainer.classList.add("hidden")
// })
