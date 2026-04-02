const filterSidebar = document.querySelector(".filter-sidebar");
const filterToggle = document.querySelector(".filter-toggle");
const mainContent = document.querySelector(".main-content");
const hero = document.querySelector(".hero");
const compare = document.querySelector(".compare-filter");
const search = document.querySelector(".search-btn-filter");

// Position privacy popup above hovered avatar
document.addEventListener("mouseover", function (e) {
  var wrap = e.target.closest(".travler-images");
  if (!wrap) return;
  var popup = wrap.querySelector(".travler-popup-img");
  var rect = wrap.getBoundingClientRect();
  popup.style.left = rect.left + rect.width / 2 - 115 + "px";
  popup.style.top = rect.bottom + 5 + "px";
});

// filter sidebar are display none by default
filterSidebar.style.display = "none";

filterToggle.addEventListener("click", () => {
  const isHidden = filterSidebar.style.display === "none";
  filterSidebar.style.display = isHidden ? "flex" : "none";
  hero.style.display = isHidden ? "none" : "block";
  mainContent.classList.toggle("filter-open", isHidden);
  filterToggle.textContent = isHidden ? "Close filter" : "Filters";
});∑

// popup ad
// const popup = document.querySelector('.background-pop-up-ads');
// if (popup) {
//   setTimeout(function () { popup.style.display = 'flex'; }, 1000);
//   popup.addEventListener('click', function (e) {
//     if (e.target === popup) popup.style.display = 'none';
//   });
// }

// core comepare toggle, trun to exit compare
compare.addEventListener("click", () => {
  const isActive = compare.textContent === "Exit Com´are";
  compare.style.backgroundColor = isActive ? "" : "var(--color-primary)";
  compare.style.color = isActive ? "" : "var(--color-white-default)";
  compare.textContent = isActive ? "Compare" : "Exit Compare";
});

// Close footer banner
document.querySelector('.footer-close-btn').addEventListener('click', function () {
  document.querySelector('.footer').style.display = 'none';
});

// for toggle search plceahodler text
search.addEventListener('focus', function () {
  search.placeholder = "Type to search";
});
search.addEventListener('blur', function () {
  search.placeholder = "Search or filter";
});

