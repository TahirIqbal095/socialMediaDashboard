const radioButtons = document.querySelectorAll(".toggle__wrapper input");
const bodyEl = document.querySelector("body");
const lightEl = document.getElementById("light");
const darkEl = document.getElementById("dark");

const setDarkMode = () => {
  bodyEl.classList = "dark";
};

const setLightMode = () => {
  bodyEl.classList = "light";
};

for (var i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener("click", () => {
    if (darkEl.checked) {
      localStorage.setItem("colorMode", "darkMode");
      setDarkMode();
    } else {
      localStorage.setItem("colorMode", "lightMode");
      setLightMode();
    }
  });
}

if (localStorage.getItem("colorMode") == "darkMode") {
  setDarkMode();
}

if (localStorage.getItem("colorMode") == "lightMode") {
  setLightMode();
}
