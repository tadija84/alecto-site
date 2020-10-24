const carousellDatas = [
  {
    span: "Alecto",
    heading: " is simple PSD template",
    paraf: "Nom varius simmple lorem ipsum",
  },
  {
    span: "Lorem",
    heading: " lorem ipsum ipsum",
    paraf: "ipsum ipsum lorem lorem",
  },
  { span: "Alecto", heading: " is lorem ipsum", paraf: "realy it is" },
  { span: "Lorem", heading: " lorem is Alecto", paraf: "Logicaly" },
  {
    span: "Lorem",
    heading: " ipsum is simple PSD",
    paraf: "ipsum ipsum lorem lorem",
  },
  {
    span: "Cicero",
    heading: " is dead poet",
    paraf: "not from dead poets society",
  },
  { span: "Cicero", heading: " was no poet", paraf: "no poet at all" },
];

let counter = 0;
let interval;
let showNext = () => {
  if (counter == carousellDatas.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  displayingData(counter);
  clearInterval(interval);
  interval = setInterval(showNext, 3000);
};
let showPrevious = () => {
  if (counter == 0) {
    counter = carousellDatas.length - 1;
  } else {
    counter--;
  }
  displayingData(counter);
  clearInterval(interval);
  interval = setInterval(showNext, 3000);
};

document.getElementById("rightArrow").addEventListener("click", showNext);
document.getElementById("leftArrow").addEventListener("click", showPrevious);
let displayingData;
interval = setInterval(showNext, 3000);

displayingData = (index) => {
  document.getElementById("alectoSpan").innerHTML = carousellDatas[index].span;
  document.getElementById("restOfHeading").innerHTML =
    carousellDatas[index].heading;
  document.getElementById("carousellParaf").innerHTML =
    carousellDatas[index].paraf;
};

const menuBtn = document.querySelector(".menu-button");
const hamburger = document.querySelector(".menu-button__burger");
let tabLink = document.querySelectorAll(".nav-tab");
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  hamburger.classList.toggle("open");
  let element = document.getElementById("nav-list");
  element.classList.toggle("open");
  for (let i = 0; i < tabLink.length; ++i) {
    tabLink[i].classList.toggle("open");
  }
}
