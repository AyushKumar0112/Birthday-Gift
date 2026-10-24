const keys = document.querySelectorAll(".key");
const dots = document.querySelectorAll(".dot");
const secretCode = "2610";

const Cover_Page = document.querySelector(".cover_page");

let pin = ["", "", "", ""];
let currentIndex = 0;

function updateUI() {
  for (let i = 0; i < 4; i++) {
    document.getElementById(`box-${i}`).innerText = pin[i];
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
  if (pin === secretCode) {
    triggerNextScreen();
  } else {
    alert("Incorrect passcode, try again!");
    resetPasscode();
  }
}

function resetPasscode() {
  pin = ["", "", "", ""];
  updateUI();
}

function triggerNextScreen() {
  Cover_Page.style.display = "none";
}
