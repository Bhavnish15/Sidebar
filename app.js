const closeBtn = document.querySelector(".close-btn");
const aside = document.querySelector(".sidebar");
const toggle = document.querySelector(".sidebar-toggle");


closeBtn.addEventListener("click", function () {
  aside.style.transform = "translate(-100%)";
});


toggle.addEventListener("click", function() {
    aside.style.transform = "translate(0%)";
})