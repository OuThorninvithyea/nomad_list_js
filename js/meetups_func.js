export function meetupsFunc(selector, data) {
    let html = "";
    const container = document.querySelector(selector);
    if (!container) return;
    html += `<div class="sidebar-hero-text"><h3>${data.header}</h3></div>`;
    html += `<div class="meetups">`;

    for (let i = 0; i < data.days.length; i++) {
        const meetUpsData = data.days[i];
        
        html += `
        <div class="meet-up-day meet-up-bottom-border">
          <div class="schedule-meetup">
            <div class="sechudal-with-lable">
              ${meetUpsData.schedule} <span class="meet-up-lable">${meetUpsData.rsvps}</span>
            </div>
          </div>
          <div class="profile-meetup">
            <div class="two-profile">
              <img src="${meetUpsData.cityImage}" alt="${meetUpsData.cityImageAlt}">
        `;

        for (let j = 0; j < meetUpsData.attendeeImages.length; j++) {
            const attendeeImage = meetUpsData.attendeeImages[j];
            html += `
              <img src="${attendeeImage}" alt="Profile Image">
            `;
        }

        html += `
            </div>
          </div>
        </div>
        `;
    }
    
    html += `</div>`;
    html += `<a class="see-meeting" href="${data.footerHref}">${data.footerText}</a>`;

    return html;
}

const meetUpsRender = meetupsFunc;

export default meetUpsRender;