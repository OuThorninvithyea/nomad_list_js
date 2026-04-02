export function suggestFunc(selecter,data)  {
    const container = document.querySelector(selecter);
    if(!container) return;
    let html = "";
    for (let i = 0; i < data.length; i++) {
        const  suggestData  = data[i];
        console.log(suggestData);
        html += `
        <div class="lable-suggest">${suggestData.label}</div>
    <div class="header-box">
      <div class="list-number">
        <span class="text-underline">${suggestData.rank}</span>
      </div>
      <div class="internet-speed">
        <div class="speed-wifi">
          <span>${suggestData.speed}</span>
          <span class="mbps">Mbps</span>
        </div>
      </div>
    </div>
    <div class="hero-box">
      <span class="country">${suggestData.country}</span>
      <span class="city">${suggestData.city}</span>
    </div>
    <div class="footer-box">
      <div class="weather">
        <span>${suggestData.weatherEmoji}</span>
        <div class="temp">
          <span>${suggestData.temp}&deg;</span>
        </div>
        <span>${suggestData.tempEmoji}</span>
        <span>${suggestData.aqiEmoji}</span>
        <div class="aqi">
          AQI
          <span>${suggestData.aqi}</span>
        </div>
      </div>
      <div class="cost-living">${suggestData.cost}</div>
    </div>
        `
    }
    return html;
}

const suggestRender = suggestFunc;

export default suggestRender;