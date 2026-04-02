export function todayPickFunc(selector, data) {
    const container = document.querySelector(selector);
    if(!container) return;
    let html = "";

    for (let i = 0; i < data.length; i++) {
        const todayPickData = data[i];

        html += `
        <div class="today-label">${todayPickData.label}</div>                                       
        <h3>${todayPickData.heading}</h3>                                                                
        <p>${todayPickData.views}</p>
        `;
    }
    
    return html;
}

const todayPickUpRender = todayPickFunc;

export default todayPickUpRender;
