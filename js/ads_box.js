export function adsFunc(selector, data) {

  let html = "";
  for (let i = 0; i < data.length; i++) {
    const currentAd = data[i];
    console.log(currentAd.image);
    if (selector === currentAd.cardType) {
      html += `
        <div class="sidebar-img">
          <img src="${currentAd.image}" alt="${currentAd.imageAlt}">
        </div>
        <div class="sidebar-hero-text">
          <h3>${currentAd.heading}</h3>
          <a href="${currentAd.ctaHref}">${currentAd.ctaText}</a>
        </div>
        <div class="ad">${currentAd.adLabel}</div>
      `;
    }
  }
  return html;
}

const adsBoxsRender = adsFunc;

export default adsBoxsRender;