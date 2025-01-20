let theme = document.documentElement;
// console.log(theme)

let btns = document.querySelectorAll(".btn");
// console.log(btns)

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let btnClass = e.currentTarget.classList;
    if (btnClass.contains("btn1")) {
      theme.style.setProperty("--theme-color", "rgb(22, 222, 48)");
    } else if (btnClass.contains("btn2")) {
      theme.style.setProperty("--theme-color", "rgb(22, 82, 222)");
    } else if (btnClass.contains("btn3")) {
      theme.style.setProperty("--theme-color", "rgb(215, 22, 222)");
    } else {
      theme.style.setProperty("--theme-color", "rgb(222, 22, 55)");
    }
  });
});
