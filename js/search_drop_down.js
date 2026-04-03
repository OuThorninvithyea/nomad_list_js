export function SearchDropDownFunc(selecter, data) {
    if(!selecter || !data) return;
    let html = `<div class="search-dropdown">`;

    for (let i = 0; i < data.length; i++) {
        const column = data[i];
        html += `<div class="dropdown-search-column">`;

        for (let j = 0; j < column.length; j++) {
            const item = column[j];
            html += `<div class="drop-down-info tooltip" data-tooltip="${item.tooltip}">${item.text}</div>`;
        }

        html += `</div>`;
    }

    html += `</div>`;
    return html;
}

const searchDropDownRender = SearchDropDownFunc;

export default searchDropDownRender;
