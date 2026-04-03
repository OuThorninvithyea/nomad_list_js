export function compareBtnFunc(text) {
    return `
          <div class="tooltip compare-filter buttons-filers-style"
                data-tooltip="Toggle compare view">
                <div class="compare-label">${text}</div>
          </div>

    `
}

const compareBtnRender = compareBtnFunc;

export default compareBtnRender;