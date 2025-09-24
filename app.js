let quizContainer = document.querySelector("quiz-container");
const questionContainer = document.getElementById("question-container");
let nextBtn = document.getElementById("next-btn");
const startBtn = document.getElementById("start-btn");
let resultContainer=document.getElementById("result-container");
let restartBtn = document.getElementById("restart-btn")

startBtn.addEventListener("click",()=>{
    questionContainer.classList.remove("hidden")
    startBtn.classList.add("hidden");
    nextBtn.classList.remove("hidden")
})



nextBtn.addEventListener("click",()=>{
    questionContainer.classList.add("hidden")
    startBtn.classList.add("hidden");
    nextBtn.classList.add("hidden");
    resultContainer.classList.remove("hidden")
    restartBtn.classList.remove("hidden")

})


restartBtn.addEventListener("click",()=>{
  restartBtn.classList.add("hidden");
  startBtn.classList.remove("hidden");
 nextBtn.classList.add("hidden");
    resultContainer.classList.add("hidden")
})
