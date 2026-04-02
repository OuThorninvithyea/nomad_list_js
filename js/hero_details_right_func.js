export function heroDetailsRight(selecter, data) {
    let html = "";
    const container = document.querySelector(selecter);
    if (!container) return 

    for ( let i = 0; i < data.length; i++) {
        const heroRightData = data[i];
        html += `
           <span class="video-card-box">
            <img src="${heroRightData.video.src}" alt="${heroRightData.video.alt}" class="video-card-background">
            <img src="${heroRightData.playButton.src}" alt="${heroRightData.playButton.alt}" class="play-btn">
          </span>
          <input type="text" placeholder="&nbsp;&nbsp; ${heroRightData.inputPlaceholder}">
          <a href="${heroRightData.ctaHref}">${heroRightData.ctaText}</a>
          <p>${heroRightData.loginText}</p>
        `
        return html;
    } 
} 

const heroDetailsRightRender = heroDetailsRight;
export default heroDetailsRightRender;