const conceilData = document.querySelector('.conceil-data');
const accomData = document.querySelector('.accom-data');
const intData = document.querySelector('.int-data');

const circleImg = document.querySelector('.circle-img');

function expandConceil() {
    conceilData.style.display = "block";
    accomData.style.display = "none";
    intData.style.display = "none";
}

function expandAccom() {
    accomData.style.display = "block";
    conceilData.style.display = "none";
    intData.style.display = "none";
}

function expandInt() {
    intData.style.display = "block";
    conceilData.style.display = "none";
    accomData.style.display = "none";
    // circleImg.style.transform = "rotate(120deg)";
}