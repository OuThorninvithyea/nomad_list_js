export function newMembersFunc(selecter, data) {
    let html = "";
    const container = document.querySelector(selecter);
    if (!container) return;

    for (let i = 0; i < data.length; i++) {
        const newMembersData = data[i];
        const newMemberarrayImgData = newMembersData.members;

        html += `<div class="sidebar-hero-text"><h3>${newMembersData.header}</h3></div>`;
        html += `<div class="new-members-container">`;
        
        for (let j = 0; j < newMemberarrayImgData.length; j++) {
            const singleMember = newMemberarrayImgData[j];
            
            html += `
            <div class="new-members">
              <div class="new-members-img">
                <img src="${singleMember.thumb}" alt="New member">
              </div>
              <div class="new-members-popup-img">
                <p>${newMembersData.privacyText}</p>
                <img src="${singleMember.blur}" alt="profile">
              </div>
            </div>
            `;
        }
        
        html += `</div>`;
    }

    return html;
}

const newMembersRender = newMembersFunc;

export default newMembersRender;