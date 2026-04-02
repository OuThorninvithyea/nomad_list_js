import { loadingBoxFunc } from "./boxs_func.js";
import adsBoxsRender from "./ads_box.js"; 
import chatBoxsRender from "./chat_func.js";
import { renderAdsBoxS } from "./render_ads_box.js";
import meetUpsRender from "./meetups_func.js";

async function renderBoxs() {
  const response = await fetch("data/boxs_data.json");
  const boxsData = await response.json();
  const hoverResponse = await fetch("data/box_hover_data.json");
  const boxHover = await hoverResponse.json();
  loadingBoxFunc("#main-boxs", boxsData, boxHover);
}

renderBoxs();

async function renderAds() {
  const response = await fetch("data/ads_data.json");
  const chatResponse = await fetch("data/chat_data.json");
  const adsData = await response.json();
  const chatData = await chatResponse.json();
  const meetupsResponse = await fetch("data/meetups_data.json");
  const meetupsData = await meetupsResponse.json();
  console.log(meetupsData);
  renderAdsBoxS("#ad-one", adsData, adsBoxsRender);
  renderAdsBoxS("#ad-two", adsData, adsBoxsRender);
  renderAdsBoxS("#chat", chatData, chatBoxsRender);
  renderAdsBoxS("#meetups", meetupsData, meetUpsRender);
}

renderAds();
