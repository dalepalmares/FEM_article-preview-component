const shareBtn = document.querySelector(".share-btn");
const shareBtnIcon = document.querySelector(".share-btn svg");
const shareIcons = document.querySelector(".share");

let toggle = false;

shareIcons.style.visibility = "hidden";

shareBtn.addEventListener("click", () => {
  if (!toggle) {
    shareIcons.style.visibility = "visible";
    shareIcons.style.opacity = 1;
    shareBtnIcon.style.fill = "#ffffff";
    shareBtn.style.backgroundColor = "hsl(214, 17%, 51%)";
    shareIcons.style.transform = "translateY(0%)";
    toggle = true;
  } else {
    shareIcons.style.visibility = "hidden";
    shareIcons.style.opacity = 0;
    shareBtnIcon.style.removeProperty("fill");
    shareBtn.style.removeProperty("background-color");
    shareIcons.style.transform = "translateY(50%)";
    toggle = false;
  }
});
