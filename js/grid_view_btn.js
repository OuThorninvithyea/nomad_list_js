export function gridViewBtn(text) {
    return `
          <div class="tooltip buttons-filers-style" data-tooltip="Change display layout">
                <select class="grid-view-toggle-filter">
                  <option value="grid">${text}</option>
                  <option value="list">List View</option>
                  <option value="hybrid">Hybrid View</option>
                </select>
                <img src="images/drop-down.svg" alt="dropdown" style="width: 10px; margin-left: 5px;">
          </div>
    `
}
export default gridViewBtn;