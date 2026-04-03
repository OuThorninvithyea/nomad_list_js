const filterToggle = document.querySelector(".filter-toggle");
const mainContent = document.querySelector(".main-content");
const hero = document.querySelector(".hero");
// const compare = document.querySelector(".compare-filter");

const search = document.querySelector(".search-btn-filter");

// ... Position privacy popup above hovered avatar ...
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


// Initialization function to set the sidebar state in one place
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


