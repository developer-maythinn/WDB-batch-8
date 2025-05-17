let theme = document.documentElement;
console.log(theme);

let btns = document.querySelectorAll(".btn");
console.log(btns);

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let btnClass = e.currentTarget.classList;
    if (btnClass.contains("btn-1")) {
      theme.style.setProperty("--theme-color", "rgb(58, 226, 58)");
    } else if (btnClass.contains("btn-2")) {
      theme.style.setProperty("--theme-color", "rgb(28, 109, 131)");
    } else if (btnClass.contains("btn-3")) {
      theme.style.setProperty("--theme-color", "rgb(198, 30, 39)");
    } else {
      theme.style.setProperty("--theme-color", "rgb(245, 44, 114)");
    }
  });
});
