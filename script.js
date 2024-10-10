let box = document.querySelector(".box");
let clickedBtn = document.querySelectorAll(".b");

let b1 = document.querySelector("#b1");
let b2 = document.querySelector("#b2");
let b3 = document.querySelector("#b3");
let b4 = document.querySelector("#b4");

let score = 1;
let iteration = 0;
let highest = document.getElementById("highest");
let arr = new Array(5050).fill(0);

async function buttonHoverEffect(id) {
    return new Promise((resolve) => {
        let buttonBox = document.getElementById(id);
        buttonBox.style.opacity = 0.5;
        setTimeout(() => {
            buttonBox.style.opacity = 1;
            resolve();
        }, 200);
    });
}

for (let clickbtn of clickedBtn) {
    clickbtn.addEventListener("click", async function () {
        if (iteration < score) {
            await buttonHoverEffect(clickbtn.id);
            iteration++;
            console.log("User ~  ", clickbtn.id);
            if (iteration == 0) {
                arr.push(clickbtn.id);
            }
            if (iteration === score) {
                await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
                await generateRandomClick(); // Call the function after waiting
                arr.push(clickbtn.id);
                let displayScore = document.getElementById("score");
                displayScore.innerText = score - 1;
                iteration = 0;
                score++;
            }
        }
    });
}

async function generateRandomClick() {
    let randomNumber = Math.floor(Math.random() * 4) + 1;
    let randomButtonId = `b${randomNumber}`;
    arr.push(randomButtonId);
    console.log("Bot ~          ", randomButtonId);
    await buttonHoverEffect(randomButtonId);
}

let p = document.getElementsByTagName("p");
let h2 = document.getElementsByTagName("h2");
let icon = document.getElementById("icon");

let centre = document.getElementsByClassName("centre")[0];

centre.addEventListener("mouseover", function () {
    p[0].style.display = "none";
    h2[0].style.display = "none";
    p[1].style.display = "none";
    h2[1].style.display = "none";
    icon.style.display = "block";
});

centre.addEventListener("mouseout", function () {
    p[0].style.display = "block";
    h2[0].style.display = "block";
    p[1].style.display = "block";
    h2[1].style.display = "block";
    icon.style.display = "none";
});



if (highest.innerText < score){
    highest.innerText = score;
}