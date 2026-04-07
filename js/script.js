const filterToggle = document.querySelector(".filter-toggle");
const mainContent = document.querySelector(".main-content");
const hero = document.querySelector(".hero");

const search = document.querySelector(".search-btn-filter");

document.addEventListener("mouseover", function (e) {
  var wrap = e.target.closest(".travler-images, .new-members");
  if (!wrap) return;

  var popup = wrap.querySelector(".travler-popup-img, .new-members-popup-img");
  if (!popup) return;

  var rect = wrap.getBoundingClientRect();
  popup.style.left = rect.left + rect.width / 2 - 110 + "px";
  popup.style.top = rect.bottom + 5 + "px";
});

// filter side bar toggle
filterToggle.addEventListener("click", () => {
  const filterSidebar = document.querySelector(".filter-sidebar");
  if (!filterSidebar) return;

  const isHidden = filterSidebar.style.display === "none" || filterSidebar.style.display === "";
  
  filterSidebar.style.display = isHidden ? "flex" : "none";
  hero.style.display = isHidden ? "none" : "block";
  mainContent.classList.toggle("filter-open", isHidden);
  filterToggle.textContent = isHidden ? "Close filter" : "Filters";
});

// popup ad
const popup = document.querySelector('.background-pop-up-ads');
if (popup) {
  setTimeout(function () { popup.style.display = 'flex'; }, 1000);
  popup.addEventListener('click', function (e) {
    if (e.target === popup) popup.style.display = 'none';
  });
}

// core comepare toggle, trun to exit compare
document.addEventListener("click", (e) => {
  const compareBtn = e.target.closest(".compare-filter");
  if (!compareBtn) return;

  const label = compareBtn.querySelector(".compare-label");
  if (!label) return;

  const isActive = label.textContent === "Exit Compare";
  compareBtn.style.backgroundColor = isActive ? "" : "var(--color-primary)";
  compareBtn.style.color = isActive ? "" : "var(--color-white-default)";
  label.textContent = isActive ? "Compare" : "Exit Compare";
});

export function initSidebarState() {

  const filterSidebar = document.querySelector(".filter-sidebar");
  const hero = document.querySelector(".hero");
  const mainContent = document.querySelector(".main-content");
  const filterToggle = document.querySelector(".filter-toggle");

  if (filterSidebar) {
    filterSidebar.style.display = "none";
    if (hero) hero.style.display = "block";
    if (mainContent) mainContent.classList.remove("filter-open");
    if (filterToggle) filterToggle.textContent = "Filters";
  }
}


// ... original search placeholder toggle and footer close ...
search.addEventListener('focus', function () {
  search.placeholder = "Type to search";
});
search.addEventListener('blur', function () {
  search.placeholder = "Search or filter";
});

document.querySelector('.footer-close-btn').addEventListener('click', function () {
  document.querySelector('.footer').style.display = 'none';
});


