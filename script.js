const keys = document.querySelectorAll(".key");
const dots = document.querySelectorAll(".dot");
const secretCode = "2610";

const Cover_Page = document.querySelector(".cover_page");

let pin = ["", "", "", ""];
let currentIndex = 0;
document.querySelector(".Incorrect_passcode").style.display = "none";
document.querySelector(".No_Page").style.display = "none";
document.querySelector(".Exciting_Page").style.display = "none";

function updateUI() {
  for (let i = 0; i < 4; i++) {
    document.getElementById(`box-${i}`).innerText = pin[i];
    document.getElementById(`box-${i}`).style.color = "black";
    document.getElementById(`box-${i}`).classList.remove("active");
  }
  if (currentIndex < 4) {
    document.getElementById(`box-${currentIndex}`).classList.add("active");
  }

  if (currentIndex === 4) {
    console.log("Full Pin:", pin.join(""));
  }
}

keys.forEach((key) => {
  key.addEventListener("click", () => {
    if (currentIndex < 4) {
      pin[currentIndex] = key.innerText;
      currentIndex++;
      updateUI();
    }
  });
});

document.querySelector(".clear").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    pin[currentIndex] = "";
    updateUI();
  }
});

document.querySelector(".submit").addEventListener("click", () => {
  validatePasscode();
});

function validatePasscode() {
  if (pin.join("") === secretCode) {
    triggerNextScreen();
  } else {
    const errorBoxes = document.querySelectorAll(".error-box");

    errorBoxes.forEach((box, currentIndex) => {
      box.textContent = pin[currentIndex] || "";
    });
    Cover_Page.style.display = "none";
    document.querySelector(".Exciting_Page").style.display = "none";
    document.querySelector(".No_Page").style.display = "none";
    document.querySelector(".Incorrect_passcode").style.display = "flex";
    document.querySelector(".Gift_Page").style.display = "none";
  }
}

document.querySelector(".try_again").addEventListener("click", () => {
  document.querySelector(".Incorrect_passcode").style.display = "none";
  Cover_Page.style.display = "flex";
  resetPasscode();
});

function resetPasscode() {
  pin = ["", "", "", ""];
  currentIndex = 0;
  updateUI();
}

function triggerNextScreen() {
  Cover_Page.style.display = "none";
  document.querySelector(".Incorrect_passcode").style.display = "none";
  document.querySelector(".No_Page").style.display = "none";
  document.querySelector(".Exciting_Page").style.display = "flex";
  document.querySelector(".Gift_Page").style.display = "none";
}

const NO = document.querySelector(".no");

NO.addEventListener("click", () => {
  document.querySelector(".Exciting_Page").style.display = "none";
  document.querySelector(".No_Page").style.display = "flex";
});

const Back = document.querySelector(".please");

Back.addEventListener("click", () => {
  document.querySelector(".No_Page").style.display = "none";
  document.querySelector(".Exciting_Page").style.display = "flex";
});
