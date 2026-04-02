
export function renderAdsBoxS(selecter, data, boxBuilderFuncitons) {
    const container = document.querySelector(selecter);
    if (!container) return;
    let html = boxBuilderFuncitons(selecter, data);
    container.insertAdjacentHTML("afterbegin", html);
}

export default renderAdsBoxS;