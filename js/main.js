import { loadingBoxFunc } from "./boxs_func.js";

async function renderBoxs() {
  const response = await fetch("data/boxs_data.json")
  const boxsData = await response.json();
  const hoverResponse = await fetch("data/box_hover_data.json");
  const boxHover = await hoverResponse.json();
  console.log(boxsData)
  loadingBoxFunc("#main-boxs", boxsData, boxHover);
}

renderBoxs();
