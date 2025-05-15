// Get elements
const navbar = document.getElementById("navbar");
const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");

// evennt listeners
menuIcon.addEventListener("click", () => {
  navbar.classList.replace("-right-[100%]", "right-0");
  menuIcon.classList.add("hidden");
  closeIcon.classList.remove("hidden");
});

closeIcon.addEventListener("click", () => {
  navbar.classList.replace("right-0", "-right-[100%]");
  closeIcon.classList.add("hidden");
  menuIcon.classList.remove("hidden");
});
