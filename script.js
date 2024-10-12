let clickedBtn = document.querySelectorAll(".b");

let score = 1;
let iteration = 0;
let arr = []; // Empty array to hold the sequence

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

async function generateRandomClick() {
    let randomNumber = Math.floor(Math.random() * 4) + 1;
    let randomButtonId = `b${randomNumber}`;
    console.log("Bot ~ ", randomButtonId);
    arr.push(randomButtonId);
    await buttonHoverEffect(randomButtonId);
}

async function handleButtonClick(clickbtn) {
    clickbtn.addEventListener("click", async function () {
        if (iteration < score) {
            await buttonHoverEffect(clickbtn.id);
            console.log("User ~  ", clickbtn.id);

            if (arr[iteration] && arr[iteration] !== clickbtn.id) {
                console.log("Wrong Move — Better Luck Next Time");
                alert("Wrong Move — Better Luck Next Time");
                score = 1;
                iteration = 0;
                let displayScore = document.getElementById("score");
                displayScore.innerText = score-1;
                arr = []; // Reset the sequence on wrong move
                return;
            }

            if (score === 1 && iteration === 0) {
                arr.push(clickbtn.id);
            }

            iteration++;

            if (iteration === score) {
                await new Promise(resolve => setTimeout(resolve, 1000)); // Eat V-Star And Do Nothing ~ For a second🤞

                await generateRandomClick();

                let displayScore = document.getElementById("score");
                displayScore.innerText = score;

                iteration = 0;
                score++;
            }
        }
    });
}

async function init() {
    for (let clickbtn of clickedBtn) {
        await handleButtonClick(clickbtn);
    }
}

init();


let centre = document.querySelector(".center-circle");
centre.addEventListener("mouseover", function () {
    document.getElementById("icon").style.display = "block";
    document.getElementsByTagName("p")[0].style.display = "none";
    document.getElementsByTagName("h2")[0].style.display = "none";
});
centre.addEventListener("mouseout", function () {
    document.getElementById("icon").style.display = "none";
    document.getElementsByTagName("p")[0].style.display = "block";
    document.getElementsByTagName("h2")[0].style.display = "block";
});
