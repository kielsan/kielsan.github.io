let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");

const darkMode = function () {
  let mode = {
    enable: () => {
      document.body.className.add("darkmode");
      localStorage.setItem("darkmode", "active");
    },
    disable: () => {
      document.body.classList.remove("darkmode");
      localStorage.setItem("darkmode", null);
    },
  };
  return mode;
};

// const enableDarkMode = () => {
//   document.body.className.add("darkmode");
//   localStorage.setItem("darkmode", "active");
// };

// const disableDarkMode = () => {
//   document.body.classList.remove("darkmode");
//   localStorage.setItem("darkmode", null);
// };

if (darkmode === "active") darkMode.enable();

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? darkMode.enable() : darkMode.disable();
});
