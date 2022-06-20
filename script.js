let codeIndex = 1;
let dots = document.querySelectorAll(".dot");
let tasks = document.querySelectorAll(".task");
let examples = document.querySelectorAll(".example");
let code = document.querySelectorAll(".code");
let js = document.querySelectorAll(".js");
let discriptions = document.querySelectorAll(".discription");
let spans = document.querySelectorAll(".spans");

// ====== code example ======

function showCode(n) {
    showPage(codeIndex += n);
}

function currentCode(n) {
    showPage(codeIndex = n);
}

function showPage(n) {
   if (n > code.length) {
       codeIndex = 1;
   }
   if (n < 1) {
       codeIndex = code.length;
   }
   for (let i = 0; i < code.length; i++) {
       code[i].style.display = "none";
       tasks[i].style.display = "none";
       examples[i].style.display = "none";
       dots[i].style.backgroundColor = "#ffffff";
   }
   code[codeIndex - 1].style.display = "block";
   tasks[codeIndex - 1].style.display = "block";
   examples[codeIndex - 1].style.display = "block";
   dots[codeIndex - 1].style.backgroundColor = "#c2b8cc";
}

// ===== decorate code =====

function decorateCode() {
    js.forEach(code => {
        let str = code.textContent;
        str = str.toString().replace(/\(/gi, `<span class="yellow">(</span>`);    
        str = str.toString().replace(/\)/gi, `<span class="yellow">)</span>`);    
        str = str.toString().replace(/\{/gi, `<span class="purple">{</span>`);    
        str = str.toString().replace(/\}/gi, `<span class="purple">}</span>`);    
        str = str.toString().replace(/\[/gi, `<span class="blue">[</span>`);    
        str = str.toString().replace(/\]/gi, `<span class="blue">]</span>`);       
        code.innerHTML = str;
    })
}
decorateCode();

// ======= projects =========

discriptions.forEach(discription => discription.addEventListener("mouseenter", showDiscription));
discriptions.forEach(discription => discription.addEventListener("mouseleave", hideDiscription));

function showDiscription(e) {
    for (let i = 0; i < discriptions.length; i++) {
        if (e.target === discriptions[i]) {
            spans[i].classList.add("active");
        }
    }
}

function hideDiscription(e) {
    for (let i = 0; i < discriptions.length; i++) {
        if (e.target === discriptions[i]) {
            spans[i].classList.remove("active");
        }
    }
}

// ====== hero ======

const cv = document.querySelector(".cv");
const header = document.querySelector(".header");
const hero = document.querySelector(".hero");
const info = document.querySelector(".info");
const codeSection = document.querySelector(".code-section");
const projectsSection = document.querySelector(".projects-section");
const hobbiesSection = document.querySelector(".hobbies-section");
const footer = document.querySelector(".footer");

cv.addEventListener("click", changeBackground);

function changeBackground() {
    header.classList.toggle("background-green");
    hero.classList.toggle("background-green");
    info.classList.toggle("background-orange");
    codeSection.classList.toggle("background-green");
    projectsSection.classList.toggle("background-orange");
    hobbiesSection.classList.toggle("background-orange");
    footer.classList.toggle("background-green");
}

// ======== burger =========

const burger = document.querySelector(".burger");
const menu = document.querySelector(".nav-list");

burger.addEventListener("click", openAndCloseMenu);

function openAndCloseMenu() {
    burger.classList.toggle("burger-rotated");
    menu.classList.toggle("nav-visible");
}
