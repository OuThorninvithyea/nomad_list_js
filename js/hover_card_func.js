export function hoverCardFunc(selector, data) {
  const container = document.querySelector(selector);
  if (!container) return;
  let html = "";
  for (let i = 0; i < data.length; i++) {
    const hoverDetails = data[i];
    html += `
      <div class="hover-card-box ${hoverDetails.animationClass}">
        <p>"${hoverDetails.quote}"</p>
        <img src="${hoverDetails.image}" alt="${hoverDetails.imageAlt}">
      </div>
    `;
  }
  container.insertAdjacentHTML("afterbegin", html);
}


