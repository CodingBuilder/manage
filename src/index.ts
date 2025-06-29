const hamburgerIcon = document.querySelector(
  ".hamburger-icon",
) as HTMLDivElement;
const menu = document.querySelector(".menu") as HTMLUListElement;

function addOverlay(hiddenY: boolean = true): void {
  let overlay = document.createElement("div");
  overlay.className = "overlay";

  if (hiddenY) {
    document.body.style.overflowY = "hidden";
  }

  document.body.appendChild(overlay);
}

function removeOverlay(): void {
  const overlay = document.querySelector(".overlay");
  if (overlay) {
    overlay.remove();
    document.body.style.overflowY = "visible";
  }
}

hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("open");
  menu.classList.toggle("show");

  if (menu.classList.contains("show")) {
    addOverlay();
  } else {
    removeOverlay();
  }
});

addEventListener("resize", () => {
  if (innerWidth > 768) {
    hamburgerIcon.classList.remove("open");
    menu.classList.remove("show");
    removeOverlay();
  }
});

const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const emailInput = document.querySelector(".email-input") as HTMLInputElement;
const emailBtn = document.querySelector(".email-button") as HTMLButtonElement;
const error = document.querySelector(".error") as HTMLElement;

emailBtn.addEventListener("click", () => {
  if (!emailReg.test(emailInput.value || "")) {
    error.style.display = "block";
    emailInput.classList.add("error");
  } else {
    error.style.display = "none";
    emailInput.classList.remove("error");
  }
});
