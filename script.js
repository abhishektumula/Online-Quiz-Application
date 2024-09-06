const startBtn = document.querySelector('.start-button');
const popupinfo = document.querySelector('.poup-info');

startBtn.onclick = () => {
    popupinfo.classList.add('active');
}
