// Get elements
const navbar = document.getElementById("navbar");
const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");
const header = document.getElementById("mainHeader");

// event listeners
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

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const headerHeight = header.getBoundingClientRect().height;
  if (scrollHeight > headerHeight) {
    header.classList.remove("md:bg-transparent");
    header.classList.remove("md:h-20");
    header.classList.add("shadow-md");
  } else {
    header.classList.add("md:bg-transparent");
    header.classList.add("md:h-20");
    header.classList.remove("shadow-md");
  }
});
