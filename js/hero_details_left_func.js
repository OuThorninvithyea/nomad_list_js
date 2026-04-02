export function heroDetailsLeft(selecter, data) {
  let html = "";
  const container = document.querySelector(selecter);
  if (!container) return;

  for (let i = 0; i < data.length; i++) {
    const heroData = data[i];

    // Generate stars HTML
    let starsHtml = "";
    if (heroData.stars) {
      for (let s = 0; s < heroData.stars; s++) {
        starsHtml += `<img src="images/star.svg" alt="star">`;
      }
    }
    
    // Generate travelers HTML
    let travelersHtml = "";
    if (heroData.remoteTravelers) {
      for (let t = 0; t < heroData.remoteTravelers.length; t++) {
        travelersHtml += `<img src="${heroData.remoteTravelers[t]}" alt="profile-photo">`;
      }
    } else {
      travelersHtml = "";
    }

    // Generate benefits HTML
    let benefitsHtml = "";
    if (heroData.benefits) {
      for (let b = 0; b < heroData.benefits.length; b++) {
        const benefit = heroData.benefits[b];
        benefitsHtml += `
          <a href="${benefit.href}">${benefit.emoji} <span class="text-underline">${benefit.text}</span> ${benefit.context}</a>
        `;
      }
    }
    else {
        benefitsHtml = "";
    }

    html += `
      <div class="award">
        <div class="award-texts">
          <p>${heroData.awardHeader}</p>
          <span class="star">
            ${starsHtml}
          </span>
          <p>${heroData.awardFooter}</p>
        </div>
        <h2>${heroData.emoji} ${heroData.mainTitle}</h2>
        <h3>${heroData.subTitle}</h3>
        <div class="remote-traveler">
          ${travelersHtml}
        </div>
        <div class="benefits-list">
          ${benefitsHtml}
        </div>
      </div>
    `;
  }
  return html;
}

const heroDetailsLeftRender = heroDetailsLeft;
export default heroDetailsLeftRender;