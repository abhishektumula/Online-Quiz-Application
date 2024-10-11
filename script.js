const startBtn = document.querySelector(".start-button");
const popupinfo = document.querySelector(".poup-info");
const exitBtn = document.querySelector(".exit");
const mainBtn = document.querySelector(".clas");
const continueBtn = document.querySelector(".agree");
const quizsection = document.querySelector(".quiz-section");
const quizbox = document.querySelector(".quiz-box");
const resultbox = document.querySelector(".result-box");
const tryagain = document.querySelector(".tryagainbtn");
const homebtn = document.querySelector(".hom");

startBtn.onclick = () => {
  popupinfo.classList.add("active");
  mainBtn.classList.add("active");
};

exitBtn.onclick = () => {
  popupinfo.classList.remove("active");
  mainBtn.classList.remove("active");
};

continueBtn.onclick = () => {
  quizsection.classList.add("active");
  popupinfo.classList.remove("active");
  mainBtn.classList.remove("active");
  quizbox.classList.add("active");

  showquestions(0);
  questioncounter(1);
  headerscore();
};

tryagain.onclick = () => {
  quizbox.classList.add("active");
  resultbox.classList.remove("active");
  nextbtn.classList.remove("active");
  questioncount = 0;
  questionnum = 1;
  userscore = 0;
  showquestions(questioncount);
  questioncounter(questionnum);
  headerscore();
};

homebtn.onclick = () => {
  quizsection.classList.remove("active");
  resultbox.classList.remove("active");
  nextbtn.classList.remove("active");
  questioncount = 0;
  questionnum = 1;
  userscore = 0;
  showquestions(questioncount);
  questioncounter(questionnum);
  headerscore();
};

let questioncount = 0;
let questionnum = 1;
let userscore = 0;

const nextbtn = document.querySelector(".next-btn");

nextbtn.onclick = () => {
  if (questioncount < questions.length - 1) {
    questioncount++;
    showquestions(questioncount);

    questionnum++;
    questioncounter(questionnum);

    nextbtn.classList.remove("active");
  } else {
    showresultbox();
  }
};

const optionlist = document.querySelector(".option-list");

// getting questions and options from array

function showquestions(index) {
  const questiontext = document.querySelector(".question-text");
  questiontext.textContent = `${questions[index].numb}. ${questions[index].question}`;

  let optiontag = `<div class="option"><span>${questions[index].options[0]}</span></div>
  <div class="option"><span>${questions[index].options[1]}</span></div>
  <div class="option"><span>${questions[index].options[2]}</span></div>
  <div class="option"><span>${questions[index].options[3]}</span></div>`;

  optionlist.innerHTML = optiontag;

  const option = document.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionselected(this)");
  }
}

function optionselected(answer) {
  let useranswer = answer.textContent;
  let correctanswer = questions[questioncount].answer;

  let alloptions = optionlist.children.length;
  console.log(correctanswer);
  if (useranswer == correctanswer) {
    answer.classList.add("correct");
    userscore += 1;
    headerscore();
  } else {
    answer.classList.add("incorrect");

    for (let i = 0; i < alloptions; i++) {
      if (optionlist.children[i].textContent == correctanswer) {
        optionlist.children[i].setAttribute("class", "option correct");
      }
    }
  }
  for (let i = 0; i < alloptions; i++) {
    optionlist.children[i].classList.add("disabled");
  }

  nextbtn.classList.add("active");
}

function questioncounter(index) {
  const questiontotal = document.querySelector(".quiz-total");
  questiontotal.textContent = `${index} of ${questions.length} questions`;
}

function headerscore() {
  const headerscoretext = document.querySelector(".header-score");
  headerscoretext.textContent = `Score :${userscore} / ${questions.length}`;
}

function showresultbox() {
  quizbox.classList.remove("active");
  resultbox.classList.add("active");

  const scoretext = document.querySelector(".score-text");
  scoretext.textContent = `Your Score ${userscore} out of ${questions.length}`;

  const circularprogress = document.querySelector(".circular-progress");
  const progressvalue = document.querySelector(".progress-value");

  let progressstratvalue = -1;
  let progressendvalue = (userscore / questions.length) * 100;
  let speed = 20;

  let progress = setInterval(() => {
    progressstratvalue++;
    progressvalue.textContent = `${progressstratvalue}%`;
    circularprogress.style.background = `conic-gradient(#00a63d ${
      progressstratvalue * 3.6
    }deg, rgba(255, 255, 255, 0.1) 0deg)`;
    if (progressstratvalue == progressendvalue) {
      clearInterval(progress);
    }
  }, speed);
}
