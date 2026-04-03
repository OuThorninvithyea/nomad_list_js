export function renderDropDown(selecter , data, dropDownBuildFunciton)  {
    const container =  document.querySelector(selecter);
    if (!container) return;
    let html = dropDownBuildFunciton(selecter,data);
    container.insertAdjacentHTML("afterbegin",html);
}

export default renderDropDown;