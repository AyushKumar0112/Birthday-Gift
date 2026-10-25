const keys = document.querySelectorAll(".key");
const dots = document.querySelectorAll(".dot");
const secretCode = "2610";

const Cover_Page = document.querySelector(".cover_page");

let pin = ["", "", "", ""];
let currentIndex = 0;
document.querySelector(".Incorrect_passcode").style.display = "none";
document.querySelector(".No_Page").style.display = "none";
document.querySelector(".Exciting_Page").style.display = "none";
document.querySelector(".Gift_Page").style.display = "none";
document.querySelector(".Gift1").style.display = "none";
document.querySelector(".Gift2").style.display = "none";
document.querySelector(".Gift3").style.display = "none";
document.querySelector(".Gift4").style.display = "none";
document.querySelector(".Envelope").style.display = "none";

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
    document.querySelector(".Gift1").style.display = "none";
    document.querySelector(".Gift2").style.display = "none";
    document.querySelector(".Gift3").style.display = "none";
    document.querySelector(".Gift4").style.display = "none";
    document.querySelector(".Envelope").style.display = "none";
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
  document.querySelector(".Gift1").style.display = "none";
  document.querySelector(".Gift2").style.display = "none";
  document.querySelector(".Gift3").style.display = "none";
  document.querySelector(".Gift4").style.display = "none";
  document.querySelector(".Envelope").style.display = "none";
}

const NO = document.querySelector(".no");
NO.addEventListener("click", () => {
  document.querySelector(".Exciting_Page").style.display = "none";
  document.querySelector(".No_Page").style.display = "flex";
  document.querySelector(".Gift1").style.display = "none";
  document.querySelector(".Gift2").style.display = "none";
  document.querySelector(".Gift3").style.display = "none";
  document.querySelector(".Gift4").style.display = "none";
  document.querySelector(".Envelope").style.display = "none";
});

const Back = document.querySelector(".please");
Back.addEventListener("click", () => {
  document.querySelector(".No_Page").style.display = "none";
  document.querySelector(".Exciting_Page").style.display = "flex";
});

const YES = document.querySelector(".yes");
YES.addEventListener("click", () => {
  document.querySelector(".Exciting_Page").style.display = "none";
  document.querySelector(".Gift_Page").style.display = "flex";
  document.querySelector(".Gift1").style.display = "none";
  document.querySelector(".Gift2").style.display = "none";
  document.querySelector(".Gift3").style.display = "none";
  document.querySelector(".Gift4").style.display = "none";
  document.querySelector(".Envelope").style.display = "none";
});

const Gift1 = document.querySelector(".gift1");
Gift1.addEventListener("click", () => {
  document.querySelector(".Gift_Page").style.display = "none";
  document.querySelector(".Gift1").style.display = "flex";
  document.querySelector(".Gift2").style.display = "none";
  document.querySelector(".Gift3").style.display = "none";
  document.querySelector(".Gift4").style.display = "none";
  document.querySelector(".Envelope").style.display = "none";
});

const Gift2 = document.querySelector(".gift2");
Gift2.addEventListener("click", () => {
  document.querySelector(".Gift_Page").style.display = "none";
  document.querySelector(".Gift1").style.display = "none";
  document.querySelector(".Gift2").style.display = "flex";
  document.querySelector(".Gift3").style.display = "none";
  document.querySelector(".Gift4").style.display = "none";
  document.querySelector(".Envelope").style.display = "none";
});

const Gift3 = document.querySelector(".gift3");
Gift3.addEventListener("click", () => {
  document.querySelector(".Gift_Page").style.display = "none";
  document.querySelector(".Gift1").style.display = "none";
  document.querySelector(".Gift2").style.display = "none";
  document.querySelector(".Gift3").style.display = "flex";
  document.querySelector(".Gift4").style.display = "none";
  document.querySelector(".Envelope").style.display = "none";
});

const Gift4 = document.querySelector(".gift4");
Gift4.addEventListener("click", () => {
  document.querySelector(".Gift_Page").style.display = "none";
  document.querySelector(".Gift1").style.display = "none";
  document.querySelector(".Gift2").style.display = "none";
  document.querySelector(".Gift3").style.display = "none";
  document.querySelector(".Gift4").style.display = "flex";
  document.querySelector(".Envelope").style.display = "none";
});

const close = document.querySelectorAll(".cross");
close.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".Gift_Page").style.display = "flex";
    document.querySelector(".Gift1").style.display = "none";
    document.querySelector(".Gift2").style.display = "none";
    document.querySelector(".Gift3").style.display = "none";
    document.querySelector(".Gift4").style.display = "none";
    document.querySelector(".birthday_song").pause();
  });
});

const cake = document.querySelector(".cake");
cake.addEventListener("click", () => {
  document.querySelector(".birthday_song").play();
});

const Envelope = document.querySelector(".envelope");
Envelope.addEventListener("click", () => {
  document.querySelector(".Gift4").style.display = "none";
  document.querySelector(".Envelope").style.display = "flex";
  document.querySelector(".paper_envelope").style.display = "flex";
  document.querySelector(".letter").style.display = "none";
});

document.querySelector(".paper_envelope").addEventListener("click", () => {
  document.querySelector(".Gift4").style.display = "none";
  document.querySelector(".Envelope").style.display = "flex";
  document.querySelector(".paper_envelope").style.display = "none";
  document.querySelector(".inst").style.display = "none";
  document.querySelector(".letter").style.display = "flex";
});
const closing = document.querySelector(".close");
closing.addEventListener("click", () => {
  document.querySelector(".paper_envelope").style.display = "none";
  document.querySelector(".Envelope").style.display = "none";
  document.querySelector(".letter").style.display = "none";
  document.querySelector(".Gift4").style.display = "flex";
});
