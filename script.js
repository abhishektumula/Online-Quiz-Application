const startBtn = document.querySelector('.start-button');
const popupinfo = document.querySelector('.poup-info');
const exitBtn = document.querySelector('.exit');
const mainBtn = document.querySelector('.clas');


startBtn.onclick = () => {
    popupinfo.classList.add('active');
    mainBtn.classList.add('')
}

exitBtn.onclick = () => {
    popupinfo.classList.remove('active');
}