

export function loadingBoxFunc(selecter,boxsData, boxHover) {
  const container = document.querySelector(selecter);
  if(!container ) return;
  
  let html = "";
  
  for(let i = 0; i < boxsData.length; i++) {
      const box = boxsData[i];
      const ratings = box.ratings;
      html += `
        <div class="boxs">
        <img class="box-bg" src="${box.image}" alt="${box.alt}">
        <div class="header-box">
          <div class="list-number">${box.rank}<span class="text-underline"></span></div>
          <div class="internet-speed"><img src="images/wifi.svg" alt="wifi">
            <div class="speed-wifi"><span class="speed">${box.speed}</span><span class="mbps">mbps</span></div>
          </div>
        </div>
        <div class="hero-box">
          ${box.label ? `<div class="popular-lable">${box.label}</div>` : ""}
          <div class="country">${box.country}</div>
          <div class="city">${box.city}</div>
        </div>
        <div class="footer-box">
          <div class="weather">${box.weatherEmoji} <div class="temp">feel <span>${box.temp}&deg;</span></div>${box.tempEmoji}<div class="aqi">
              <span>AQI</span><span>${box.aqi}</span>
            </div>${box.aqiEmoji}</div>
          <div class="cost-living">${box.cost} <span class="for-a-nomad">FOR A NOMAD</span></div>
        </div>
        <!-- boxs-hover -->
        <div class="boxs-hover">
          <div class="boxs-hover-header">
            <svg class="hover-heart" aria-hidden="true" width="25" focusable="false" role="img"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="none" stroke="white" stroke-width="30"
                d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z">
              </path>
            </svg>
            <div class="close-hover-box tooltip" data-tooltip="${boxHover.hoverHeader.closeTooltip}">${boxHover.hoverHeader.closeLabel}</div>
          </div>
          <div class="boxs-hover-content">
            <div class="rating-loading-data">
              <div class="rating-title">${boxHover.ratings[0].emoji} ${boxHover.ratings[0].label}</div>
              <div class="rating-bar-container">
                <div class="rating-bar ${ratings.overall.color} w-${ratings.overall.width}"></div>
              </div>
            </div>
            <div class="rating-loading-data">
              <div class="rating-title">${boxHover.ratings[1].emoji} ${boxHover.ratings[1].label}</div>
              <div class="rating-bar-container">
                <div class="rating-bar ${ratings.cost.color} w-${ratings.cost.width}"></div>
              </div>
            </div>
            <div class="rating-loading-data">
              <div class="rating-title">${boxHover.ratings[2].emoji} ${boxHover.ratings[2].label}</div>
              <div class="rating-bar-container">
                <div class="rating-bar ${ratings.internet.color} w-${ratings.internet.width}"></div>
              </div>
            </div>
            <div class="rating-loading-data">
              <div class="rating-title">${boxHover.ratings[3].emoji} ${boxHover.ratings[3].label}</div>
              <div class="rating-bar-container">
                <div class="rating-bar ${ratings.liked.color} w-${ratings.liked.width}"></div>
              </div>
            </div>
            <div class="rating-loading-data">
              <div class="rating-title">${boxHover.ratings[4].emoji} ${boxHover.ratings[4].label}</div>
              <div class="rating-bar-container">
                <div class="rating-bar ${ratings.safety.color} w-${ratings.safety.width}"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- //boxs-hover -->
      </div>
      `;
    }
  container.insertAdjacentHTML('afterbegin', html);

}