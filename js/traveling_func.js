export function traverlingFunc(selector, data) {
    const container = document.querySelector(selector);
    if(!container) return;
    let html = "";
    
    html += `<div class="sidebar-hero-text"><h3>${data.header}</h3></div>`;
    html += `<div class="traveling"><div class="img-travler">`;

    for (let i = 0; i < data.members.length; i++) {
        const travlerData = data.members[i];
        html += `
          <div class="travler-images">
            <img src="${travlerData.thumb}" alt="traveler">
            <div class="travler-popup-img">
              <p>${data.privacyText}</p>
              <img src="${travlerData.blur}" alt="profile">
            </div>
          </div>
        `;
    }
    
    html += `</div></div>`;
    
    return html;
}

const travalerRedner = traverlingFunc;

export default travalerRedner;