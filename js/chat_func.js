
export function chatBoxFunc(selector, data) {
    let html = "";
    const container = document.querySelector(selector);
    if (!container) return;
    for (let i = 0; i < data.length; i++) {
        const chatData = data[i];

        html += `
        <div class="chat-box">
          <div class="chat-header">
            <div class="chat-title">${chatData.header}</div>
            <div class="chat-img"><img src="${chatData.image}" alt="${chatData.imageAlt}"></div>
          </div>
          <div class="chat-footer">
            <a href="${chatData.ctaHref}">${chatData.ctaText}</a>
          </div>
        </div>
        `;
    }
    return html;
}

const chatBoxsRender = chatBoxFunc;

export default chatBoxsRender;