export function logoDropDownFunc(selector, data) {
  let html = "";
  const container = document.querySelector(selector);
  if (!container) return;

  for (let i = 0; i < data.length; i++) {
    const dropdDownData = data[i];
    
    if (dropdDownData.sectionClass) {
      html += `<div class="menu-section ${dropdDownData.sectionClass}">`;
      for (let j = 0; j < dropdDownData.items.length; j++) {
        const dropDownItem = dropdDownData.items[j];
        html += `<a href="#">${dropDownItem.emoji} ${dropDownItem.text}</a>`;
      }
      html += `</div>`;
    } else {
      html += `
      <div class="menu-section">
        <h4>${dropdDownData.title}</h4>
        <div class="menu-grid">
      `;
      
      for (let j = 0; j < dropdDownData.items.length; j++) {
        const dropDownItem = dropdDownData.items[j];
        html += `<a href="#">${dropDownItem.emoji} ${dropDownItem.text}</a>`;
      }
      
      html += `
        </div>
      </div>
      `;
    }
  }
  return html;
}

const logoDropDownRender = logoDropDownFunc;
export default logoDropDownRender;