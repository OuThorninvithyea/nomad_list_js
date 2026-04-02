export function renderHeroDetails(selecter, data, heroBulderFunction) {
    const container = document.querySelector(selecter);
    let html = heroBulderFunction(selecter, data);
    container.insertAdjacentHTML("afterbegin", html);
}

export default renderHeroDetails;