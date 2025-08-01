const questions = ["What is 2 + 2?", "What is capital of India?"];
let current = 0;

document.getElementById("question").innerText = questions[current];

document.getElementById("next").addEventListener("click", () => {
  current++;
  if (current < questions.length) {
    document.getElementById("question").innerText = questions[current];
  } else {
    document.getElementById("question").innerText = "Quiz Finished!";
  }
});
