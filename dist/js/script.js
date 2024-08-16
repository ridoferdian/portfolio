window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  menu.classList.toggle("hidden");
});

const klikUp = document.querySelector("#skill-up");
const skill = document.querySelector("#skill-klik");

klikUp.addEventListener("click", function () {
  skill.classList.toggle("hidden");
  klikUp.classList.toggle("rotate-up");
});

const klikUps = document.querySelector("#skills-up");
const skills = document.querySelector("#skills-klik");

klikUps.addEventListener("click", function () {
  skills.classList.toggle("hidden");
  klikUps.classList.toggle("rotate-ups");
});

// Get elements by ID
const educationBtn = document.getElementById('educationBtn');
const experienceBtn = document.getElementById('experienceBtn');
const element1 = document.getElementById('element1');
const element2 = document.getElementById('element2');

// Event listener for Education button
educationBtn.addEventListener('click', function() {
    element1.classList.remove('hidden');
    element2.classList.add('hidden');
    educationBtn.classList.add('text-blue-600'); // Add active class to education
    experienceBtn.classList.remove('text-blue-600'); // Remove active class from experience
});

// Event listener for Experience button
experienceBtn.addEventListener('click', function() {
    element1.classList.add('hidden');
    element2.classList.remove('hidden');
    experienceBtn.classList.add('text-blue-600'); // Add active class to experience
    educationBtn.classList.remove('text-blue-600'); // Remove active class from education
});


AOS.init({
  once: true,
});
