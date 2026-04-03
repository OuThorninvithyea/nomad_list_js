

export function renderAllBtns(selector, text, buildBtnFunc) {
    const container = document.querySelector(selector);
    if (!container) return;
    let html = buildBtnFunc(text);
    container.insertAdjacentHTML("beforeend", html);
}

