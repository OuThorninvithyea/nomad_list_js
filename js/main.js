import { loadingBoxFunc } from "./boxs_func.js";
import adsBoxsRender from "./ads_box.js";
import chatBoxsRender from "./chat_func.js";
import { renderAdsBoxS } from "./render_ads_box.js";
import meetUpsRender from "./meetups_func.js";
import todayPickUpRender from "./today_pick_func.js";
import travalerRedner from "./traveling_func.js";
import newMembersRender from "./new_members_func.js";
import suggestRender from "./suggest_func.js";
import { hoverCardFunc } from "./hover_card_func.js";
import { renderHeroDetails } from "./hero_detials_build_func.js";
import heroDetailsLeftRender from "./hero_details_left_func.js";
import heroDetailsRightRender from "./hero_details_right_func.js";
import { trustedCompanyFunc } from "./trsuted_company_func.js";
import logoDropDownRender from "./logo_dropDown_func.js";
import { renderDropDown } from "./drop_down_func.js";
import searchDropDownRender from "./search_drop_down.js";
import { renderAllBtns } from "./render_btns.js";
import compareBtnRender from "./compare_btn_func.js";
import gridViewRender from "./grid_view_btn.js";
import nomadScoreBtnRender from "./nomad_btn_func.js";
import joinNomadRender from "./join_nomad_func.js";


async function renderBoxs() {
  const response = await fetch("data/boxs_data.json");
  const boxsData = await response.json();
  const hoverResponse = await fetch("data/box_hover_data.json");
  const boxHover = await hoverResponse.json();
  loadingBoxFunc("#main-boxs", boxsData, boxHover);
}

renderBoxs();

async function renderAdsFunc() {
  const response = await fetch("data/ads_data.json");
  const chatResponse = await fetch("data/chat_data.json");
  const adsData = await response.json();
  const chatData = await chatResponse.json();
  const meetupsResponse = await fetch("data/meetups_data.json");
  const meetupsData = await meetupsResponse.json();
  const todayResponse = await fetch("data/today_pick_data.json")
  const todayPickupData = await todayResponse.json();
  const travelingResponse = await fetch("data/traveling_data.json");
  const travelingData = await travelingResponse.json();
  const newMembersResponse = await fetch("data/new_members_data.json");
  const newMembersData = await newMembersResponse.json();
  const suggestResponse = await fetch("data/suggest_data.json");
  const suggestData = await suggestResponse.json();
  console.log(todayPickupData);
  renderAdsBoxS("#ad-one", adsData, adsBoxsRender);
  renderAdsBoxS("#ad-two", adsData, adsBoxsRender);
  renderAdsBoxS("#chat", chatData, chatBoxsRender);
  renderAdsBoxS("#meetups", meetupsData, meetUpsRender);
  renderAdsBoxS("#traveling", travelingData, travalerRedner);
  renderAdsBoxS("#new-member", newMembersData, newMembersRender);
  renderAdsBoxS("#suggest", suggestData, suggestRender);
  renderAdsBoxS("#today-pick", todayPickupData, todayPickUpRender);
}

renderAdsFunc();

async function renderHoverCardFunc() {
  const hoverCardResponse = await fetch("data/hover_card_data.json");
  const hoverCardData = await hoverCardResponse.json();
  console.log(hoverCardData)
  hoverCardFunc(".hover-card", hoverCardData);
}

renderHoverCardFunc();

async function renderHeroDetailsFunc() {
  const heroDetailsResponse = await fetch("data/hero_detailsLeft_data.json");
  const heroDetailsData = await heroDetailsResponse.json();
  const heroRightResponse = await fetch("data/hero_details_right_data.json");
  const heroRightData = await heroRightResponse.json();

  console.log(heroDetailsData);
  renderHeroDetails(".hero-text", heroDetailsData, heroDetailsLeftRender);
  renderHeroDetails(".hero-card-box", heroRightData, heroDetailsRightRender);
}

renderHeroDetailsFunc();

async function renderTrustedCompany() {
  const trustedCompanyRespone = await fetch("data/trusted_company_data.json");
  const trustedCompanyData = await trustedCompanyRespone.json();
  console.log(trustedCompanyData);
  trustedCompanyFunc(".trusted-company", trustedCompanyData);
}

renderTrustedCompany();

async function renderAllDropDown() {
  const logoDropDownRespone = await fetch("data/logo_dropdown_data.json");
  const logoDropDownData = await logoDropDownRespone.json();
  const seachFitlerRespone = await fetch("data/search_dropdown_data.json")
  const searchFilterData = await seachFitlerRespone.json();
  console.log(searchFilterData);
  renderDropDown("#logo-dropdown-menu", logoDropDownData, logoDropDownRender)
  renderDropDown(".search-filter", searchFilterData, searchDropDownRender)
}

renderAllDropDown();



async function renderAllofBtns() {
  renderAllBtns(".filters-right-side", "Compare", compareBtnRender);
  renderAllBtns(".filters-right-side", "Grid View", gridViewRender);
  renderAllBtns(".filters-right-side", "Nomad Score", nomadScoreBtnRender); 
  renderAllBtns(".filters-right-side", "Join Nomads.com →", joinNomadRender);
}

renderAllofBtns();



  