export function trustedCompanyFunc(selector, data) {
  const container = document.querySelector(selector);
  if (!container) return;

  let html = "";
  for (let i = 0; i < data.length; i++) {
    const section = data[i];
    html += `<p>${section.header}</p>`;
    for (let j = 0; j < section.companies.length; j++) {
      const company = section.companies[j];
      html += `<img src="${company.src}" alt="${company.alt}">`;
    }
  }
  
  container.insertAdjacentHTML("afterbegin", html);
}
