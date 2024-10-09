const startBtn = document.querySelector('.start-button');
const popupinfo = document.querySelector('.poup-info');
const exitBtn = document.querySelector('.exit');
const mainBtn = document.querySelector('.clas');
const continueBtn = document.querySelector('.agree');
const quizsection = document.querySelector('.quiz-section');
const quizbox = document.querySelector(".quiz-box");





startBtn.onclick = () => {
    popupinfo.classList.add('active');
    mainBtn.classList.add('')
}

exitBtn.onclick = () => {
    popupinfo.classList.remove('active');
    mainBtn.classList.remove('active');
}

continueBtn.onclick = () => {
    quizsection.classList.add('active');
    popupinfo.classList.remove('active');
    mainBtn.classList.remove('active');
    quizbox.classList.add("active");

    showquestions(0);

}

let questioncount = 0;

const nextbtn = document.querySelector('.next-btn');

nextbtn.onclick = () => {
    questioncount++;
    showquestions(questioncount)
};

// getting questions and options from array

function showquestions(index) {
    const questiontext = document.querySelector('.question-text');
    questiontext.textContent = `${questions[index].numb}. ${questions[index].question}`;

}