export function filterSideBarFunc(selecter, data) {
    const container = document.querySelector(selecter);
    if (!container) return;

    let html = `<div class="filter-sidebar">`;

    for (let i = 0; i < data.length; i++) {
        const section = data[i];

        if (section.header) {
            html += `<div class="header-filter">${section.header}</div>`;
        }

        if (section.rows) {
            for (let j = 0; j < section.rows.length; j++) {
                const row = section.rows[j];

                if (row.type === "select") {
                    const classes = row.classes || "row-filter";
                    html += `<select id="${row.id}" class="${classes}">`;
                    html += `<option value="">select your passport</option>`;

                    for (let k = 0; k < row.options.length; k++) {
                        html += `<option value="${row.options[k]}">${row.options[k]}</option>`;
                    }

                    html += `</select>`;
                } else if (row.type === "divider") {
                    html += `<div class="plus-filter">${row.text}</div>`;
                } else {
                    const rowClasses = row.classes || "row-filter";
                    html += `<div class="${rowClasses}">`;

                    if (row.items) {
                        for (let k = 0; k < row.items.length; k++) {
                            const item = row.items[k];
                            const tooltip = item.tooltip ? `data-tooltip="${item.tooltip}"` : "";
                            html += `<span class="${item.classes || ""}" ${tooltip}>${item.text}</span>`;
                        }
                    }

                    html += `</div>`;
                }
            }
        }

        if (section.grid) {
            html += `<div class="${section.grid.classes}">`;

            if (section.grid.items) {
                for (let j = 0; j < section.grid.items.length; j++) {
                    const item = section.grid.items[j];
                    const element = item.element || "span";
                    const tooltip = item.tooltip ? `data-tooltip="${item.tooltip}"` : "";
                    html += `<${element} class="${item.classes || ""}" ${tooltip}>${item.text}</${element}>`;
                }
            }

            html += `</div>`;
        }
    }

    html += `</div>`;

    container.innerHTML = html;
}