const boxsContainer = document.getElementById("main-boxs");

const boxsData = [
  {
    image: "images/phnopenh.webp",
    alt: "Phnom Penh",
    rank: 1,
    speed: 35,
    label: "Popular",
    country: "Cambodia",
    city: "Phnom Penh",
    weatherEmoji: "☀️",
    temp: 33,
    tempEmoji: "🥵",
    aqi: 85,
    aqiEmoji: "😷",
    cost: "$1500/mo",
    ratings: {
      overall: { color: "green", width: 85 },
      cost: { color: "green", width: 95 },
      internet: { color: "red", width: 40 },
      liked: { color: "yellow", width: 88 },
      safety: { color: "green", width: 85 }
    }
  },
  {
    image: "images/portugal.webp",
    alt: "Lisbon",
    rank: 2,
    speed: 82,
    label: "",
    country: "Portugal",
    city: "Lisbon",
    weatherEmoji: "🌤️",
    temp: 22,
    tempEmoji: "😊",
    aqi: 25,
    aqiEmoji: "😷",
    cost: "$2800/mo",
    ratings: {
      overall: { color: "green", width: 85 },
      cost: { color: "green", width: 95 },
      internet: { color: "red", width: 40 },
      liked: { color: "yellow", width: 88 },
      safety: { color: "green", width: 85 }
    }
  },
  {
    image: "images/indonisea.jpg",
    alt: "Bali",
    rank: 3,
    speed: 22,
    label: "",
    country: "Indonesia",
    city: "Bali",
    weatherEmoji: "🌦️",
    temp: 29,
    tempEmoji: "🥵",
    aqi: 42,
    aqiEmoji: "😷",
    cost: "$1100/mo",
    ratings: {
      overall: { color: "green", width: 85 },
      cost: { color: "green", width: 95 },
      internet: { color: "red", width: 40 },
      liked: { color: "yellow", width: 88 },
      safety: { color: "green", width: 85 }
    }
  },
  {
    image: "images/mexico.webp",
    alt: "Mexico City",
    rank: 4,
    speed: 45,
    label: "",
    country: "Mexico",
    city: "Mexico City",
    weatherEmoji: "🌤️",
    temp: 20,
    tempEmoji: "😊",
    aqi: 65,
    aqiEmoji: "😷",
    cost: "$1400/mo",
    ratings: {
      overall: { color: "green", width: 85 },
      cost: { color: "green", width: 95 },
      internet: { color: "red", width: 40 },
      liked: { color: "yellow", width: 88 },
      safety: { color: "green", width: 85 }
    }
  },
  {
    image: "images/colombia.jpg",
    alt: "Medellín",
    rank: 5,
    speed: 38,
    label: "",
    country: "Colombia",
    city: "Medellín",
    weatherEmoji: "🌥️",
    temp: 24,
    tempEmoji: "😊",
    aqi: 35,
    aqiEmoji: "😷",
    cost: "$1300/mo",
    ratings: {
      overall: { color: "green", width: 85 },
      cost: { color: "green", width: 95 },
      internet: { color: "red", width: 40 },
      liked: { color: "yellow", width: 88 },
      safety: { color: "green", width: 85 }
    }
  },
  {
    image: "images/barcelona-spain.webp",
    alt: "Barcelona",
    rank: 6,
    speed: 95,
    label: "",
    country: "Spain",
    city: "Barcelona",
    weatherEmoji: "☀️",
    temp: 21,
    tempEmoji: "😊",
    aqi: 30,
    aqiEmoji: "😷",
    cost: "$3200/mo",
    ratings: {
      overall: { color: "green", width: 85 },
      cost: { color: "green", width: 95 },
      internet: { color: "red", width: 40 },
      liked: { color: "yellow", width: 88 },
      safety: { color: "green", width: 85 }
    }
  },
  {
    image: "images/georgia.jpg",
    alt: "Tbilisi",
    rank: 7,
    speed: 42,
    label: "",
    country: "Georgia",
    city: "Tbilisi",
    weatherEmoji: "🌥️",
    temp: 18,
    tempEmoji: "😊",
    aqi: 38,
    aqiEmoji: "😷",
    cost: "$900/mo",
    ratings: {
      overall: { color: "green", width: 85 },
      cost: { color: "green", width: 95 },
      internet: { color: "red", width: 40 },
      liked: { color: "yellow", width: 88 },
      safety: { color: "green", width: 85 }
    }
  },
  {
    image: "images/turkey.webp",
    alt: "Istanbul",
    rank: 8,
    speed: 30,
    label: "",
    country: "Turkey",
    city: "Istanbul",
    weatherEmoji: "🌧️",
    temp: 19,
    tempEmoji: "😊",
    aqi: 55,
    aqiEmoji: "😷",
    cost: "$1100/mo",
    ratings: {
      overall: { color: "green", width: 85 },
      cost: { color: "green", width: 95 },
      internet: { color: "red", width: 40 },
      liked: { color: "yellow", width: 88 },
      safety: { color: "green", width: 85 }
    }
  },
  {
    image: "images/croatia.webp",
    alt: "Split",
    rank: 9,
    speed: 55,
    label: "",
    country: "Croatia",
    city: "Split",
    weatherEmoji: "☀️",
    temp: 23,
    tempEmoji: "😊",
    aqi: 20,
    aqiEmoji: "😷",
    cost: "$2200/mo",
    ratings: {
      overall: { color: "green", width: 85 },
      cost: { color: "green", width: 95 },
      internet: { color: "red", width: 40 },
      liked: { color: "yellow", width: 88 },
      safety: { color: "green", width: 85 }
    }
  },
  {
    image: "images/zcechrepublic.jpg",
    alt: "Prague",
    rank: 10,
    speed: 78,
    label: "",
    country: "Czech Republic",
    city: "Prague",
    weatherEmoji: "🌥️",
    temp: 15,
    tempEmoji: "🧥",
    aqi: 32,
    aqiEmoji: "😷",
    cost: "$2400/mo",
    ratings: {
      overall: { color: "green", width: 85 },
      cost: { color: "green", width: 95 },
      internet: { color: "red", width: 40 },
      liked: { color: "yellow", width: 88 },
      safety: { color: "green", width: 85 }
    }
  },
  {
    image: "images/southkorea.jpg",
    alt: "Seoul",
    rank: 11,
    speed: 120,
    label: "",
    country: "South Korea",
    city: "Seoul",
    weatherEmoji: "🌤️",
    temp: 16,
    tempEmoji: "🧥",
    aqi: 72,
    aqiEmoji: "😷",
    cost: "$2100/mo",
    ratings: {
      overall: { color: "green", width: 85 },
      cost: { color: "green", width: 95 },
      internet: { color: "red", width: 40 },
      liked: { color: "yellow", width: 88 },
      safety: { color: "green", width: 85 }
    }
  },
  {
    image: "images/romiana.jpg",
    alt: "Bucharest",
    rank: 12,
    speed: 88,
    label: "",
    country: "Romania",
    city: "Bucharest",
    weatherEmoji: "🌥️",
    temp: 17,
    tempEmoji: "😊",
    aqi: 45,
    aqiEmoji: "😷",
    cost: "$1200/mo",
    ratings: {
      overall: { color: "green", width: 85 },
      cost: { color: "green", width: 95 },
      internet: { color: "red", width: 40 },
      liked: { color: "yellow", width: 88 },
      safety: { color: "green", width: 85 }
    }
  },
  {
    image: "images/japan.jpg",
    alt: "Tokyo",
    rank: 13,
    speed: 95,
    label: "",
    country: "Japan",
    city: "Tokyo",
    weatherEmoji: "🌤️",
    temp: 18,
    tempEmoji: "😊",
    aqi: 28,
    aqiEmoji: "😷",
    cost: "$3000/mo",
    ratings: {
      overall: { color: "green", width: 85 },
      cost: { color: "green", width: 95 },
      internet: { color: "red", width: 40 },
      liked: { color: "yellow", width: 88 },
      safety: { color: "green", width: 85 }
    }
  },
  {
    image: "images/argentina.webp",
    alt: "Buenos Aires",
    rank: 14,
    speed: 28,
    label: "",
    country: "Argentina",
    city: "Buenos Aires",
    weatherEmoji: "🌤️",
    temp: 22,
    tempEmoji: "😊",
    aqi: 30,
    aqiEmoji: "😷",
    cost: "$1000/mo",
    ratings: {
      overall: { color: "green", width: 85 },
      cost: { color: "green", width: 95 },
      internet: { color: "red", width: 40 },
      liked: { color: "yellow", width: 88 },
      safety: { color: "green", width: 85 }
    }
  },
  {
    image: "images/vietnam.jpg",
    alt: "Ho Chi Minh",
    rank: 15,
    speed: 24,
    label: "",
    country: "Vietnam",
    city: "Ho Chi Minh",
    weatherEmoji: "🌥️",
    temp: 32,
    tempEmoji: "🥵",
    aqi: 50,
    aqiEmoji: "😷",
    cost: "$850/mo",
    ratings: {
      overall: { color: "green", width: 85 },
      cost: { color: "green", width: 95 },
      internet: { color: "red", width: 40 },
      liked: { color: "yellow", width: 88 },
      safety: { color: "green", width: 85 }
    }
  },
  {
    image: "images/estonia.webp",
    alt: "Tallinn",
    rank: 16,
    speed: 75,
    label: "",
    country: "Estonia",
    city: "Tallinn",
    weatherEmoji: "🌧️",
    temp: 10,
    tempEmoji: "🧥",
    aqi: 15,
    aqiEmoji: "😷",
    cost: "$2000/mo",
    ratings: {
      overall: { color: "green", width: 85 },
      cost: { color: "green", width: 95 },
      internet: { color: "red", width: 40 },
      liked: { color: "yellow", width: 88 },
      safety: { color: "green", width: 85 }
    }
  },
  {
    image: "images/morocco.webp",
    alt: "Marrakech",
    rank: 17,
    speed: 18,
    label: "",
    country: "Morocco",
    city: "Marrakech",
    weatherEmoji: "☀️",
    temp: 28,
    tempEmoji: "🥵",
    aqi: 58,
    aqiEmoji: "😷",
    cost: "$950/mo",
    ratings: {
      overall: { color: "green", width: 85 },
      cost: { color: "green", width: 95 },
      internet: { color: "red", width: 40 },
      liked: { color: "yellow", width: 88 },
      safety: { color: "green", width: 85 }
    }
  },
  {
    image: "images/taiwan.jpg",
    alt: "Taipei",
    rank: 18,
    speed: 85,
    label: "",
    country: "Taiwan",
    city: "Taipei",
    weatherEmoji: "🌦️",
    temp: 26,
    tempEmoji: "😊",
    aqi: 45,
    aqiEmoji: "😷",
    cost: "$1600/mo",
    ratings: {
      overall: { color: "green", width: 85 },
      cost: { color: "green", width: 95 },
      internet: { color: "red", width: 40 },
      liked: { color: "yellow", width: 88 },
      safety: { color: "green", width: 85 }
    }
  },
  {
    image: "images/hungary.webp",
    alt: "Budapest",
    rank: 19,
    speed: 65,
    label: "",
    country: "Hungary",
    city: "Budapest",
    weatherEmoji: "🌥️",
    temp: 16,
    tempEmoji: "🧥",
    aqi: 40,
    aqiEmoji: "😷",
    cost: "$1800/mo",
    ratings: {
      overall: { color: "green", width: 85 },
      cost: { color: "green", width: 95 },
      internet: { color: "red", width: 40 },
      liked: { color: "yellow", width: 88 },
      safety: { color: "green", width: 85 }
    }
  },
  {
    image: "images/costa-rica.jpg",
    alt: "San José",
    rank: 20,
    speed: 32,
    label: "",
    country: "Costa Rica",
    city: "San José",
    weatherEmoji: "🌦️",
    temp: 24,
    tempEmoji: "😊",
    aqi: 22,
    aqiEmoji: "😷",
    cost: "$1700/mo",
    ratings: {
      overall: { color: "green", width: 85 },
      cost: { color: "green", width: 95 },
      internet: { color: "red", width: 40 },
      liked: { color: "yellow", width: 88 },
      safety: { color: "green", width: 85 }
    }
  },
  {
    image: "images/berlin-germany.webp",
    alt: "Berlin",
    rank: 21,
    speed: 72,
    label: "",
    country: "Germany",
    city: "Berlin",
    weatherEmoji: "🌧️",
    temp: 14,
    tempEmoji: "🧥",
    aqi: 22,
    aqiEmoji: "😷",
    cost: "$2800/mo",
    ratings: {
      overall: { color: "green", width: 85 },
      cost: { color: "green", width: 95 },
      internet: { color: "red", width: 40 },
      liked: { color: "yellow", width: 88 },
      safety: { color: "green", width: 85 }
    }
  },
  {
    image: "images/philipines.webp",
    alt: "Manila",
    rank: 22,
    speed: 20,
    label: "",
    country: "Philippines",
    city: "Manila",
    weatherEmoji: "🌥️",
    temp: 25,
    tempEmoji: "🥵",
    aqi: 68,
    aqiEmoji: "😷",
    cost: "$1000/mo",
    ratings: {
      overall: { color: "green", width: 85 },
      cost: { color: "green", width: 95 },
      internet: { color: "red", width: 40 },
      liked: { color: "yellow", width: 88 },
      safety: { color: "green", width: 85 }
    }
  },
  {
    image: "images/brazil.jpg",
    alt: "Florianópolis",
    rank: 23,
    speed: 30,
    label: "",
    country: "Brazil",
    city: "Florianópolis",
    weatherEmoji: "☀️",
    temp: 26,
    tempEmoji: "😊",
    aqi: 18,
    aqiEmoji: "😷",
    cost: "$1400/mo",
    ratings: {
      overall: { color: "green", width: 85 },
      cost: { color: "green", width: 95 },
      internet: { color: "red", width: 40 },
      liked: { color: "yellow", width: 88 },
      safety: { color: "green", width: 85 }
    }
  },
  {
    image: "images/malayisa.jpg",
    alt: "Kuala Lumpur",
    rank: 24,
    speed: 48,
    label: "",
    country: "Malaysia",
    city: "Kuala Lumpur",
    weatherEmoji: "🌦️",
    temp: 30,
    tempEmoji: "🥵",
    aqi: 55,
    aqiEmoji: "😷",
    cost: "$1200/mo",
    ratings: {
      overall: { color: "green", width: 85 },
      cost: { color: "green", width: 95 },
      internet: { color: "red", width: 40 },
      liked: { color: "yellow", width: 88 },
      safety: { color: "green", width: 85 }
    }
  },
  {
    image: "images/berlin-germany.webp",
    alt: "Warsaw",
    rank: 25,
    speed: 70,
    label: "",
    country: "Poland",
    city: "Warsaw",
    weatherEmoji: "🌥️",
    temp: 13,
    tempEmoji: "🧥",
    aqi: 48,
    aqiEmoji: "😷",
    cost: "$1600/mo",
    ratings: {
      overall: { color: "green", width: 85 },
      cost: { color: "green", width: 95 },
      internet: { color: "red", width: 40 },
      liked: { color: "yellow", width: 88 },
      safety: { color: "green", width: 85 }
    }
  },
  {
    image: "images/barcelona-spain.webp",
    alt: "Athens",
    rank: 26,
    speed: 40,
    label: "",
    country: "Greece",
    city: "Athens",
    weatherEmoji: "☀️",
    temp: 25,
    tempEmoji: "😊",
    aqi: 35,
    aqiEmoji: "😷",
    cost: "$2000/mo",
    ratings: {
      overall: { color: "green", width: 85 },
      cost: { color: "green", width: 95 },
      internet: { color: "red", width: 40 },
      liked: { color: "yellow", width: 88 },
      safety: { color: "green", width: 85 }
    }
  },
  {
    image: "images/austin-tx-united-states.webp",
    alt: "Montreal",
    rank: 28,
    speed: 88,
    label: "",
    country: "Canada",
    city: "Montreal",
    weatherEmoji: "🌧️",
    temp: 12,
    tempEmoji: "🧥",
    aqi: 18,
    aqiEmoji: "😷",
    cost: "$2600/mo",
    ratings: {
      overall: { color: "green", width: 85 },
      cost: { color: "green", width: 95 },
      internet: { color: "red", width: 40 },
      liked: { color: "yellow", width: 88 },
      safety: { color: "green", width: 85 }
    }
  },
  {
    image: "images/malayisa.jpg",
    alt: "Colombo",
    rank: 29,
    speed: 15,
    label: "",
    country: "Sri Lanka",
    city: "Colombo",
    weatherEmoji: "🌦️",
    temp: 30,
    tempEmoji: "🥵",
    aqi: 48,
    aqiEmoji: "😷",
    cost: "$800/mo",
    ratings: {
      overall: { color: "green", width: 85 },
      cost: { color: "green", width: 95 },
      internet: { color: "red", width: 40 },
      liked: { color: "yellow", width: 88 },
      safety: { color: "green", width: 85 }
    }
  },
  {
    image: "images/barcelona-spain.webp",
    alt: "Rome",
    rank: 30,
    speed: 52,
    label: "",
    country: "Italy",
    city: "Rome",
    weatherEmoji: "☀️",
    temp: 22,
    tempEmoji: "😊",
    aqi: 32,
    aqiEmoji: "😷",
    cost: "$2900/mo",
    ratings: {
      overall: { color: "green", width: 85 },
      cost: { color: "green", width: 95 },
      internet: { color: "red", width: 40 },
      liked: { color: "yellow", width: 88 },
      safety: { color: "green", width: 85 }
    }
  },
  {
    image: "images/vietnam.jpg",
    alt: "Da Nang",
    rank: 31,
    speed: 28,
    label: "",
    country: "Vietnam",
    city: "Da Nang",
    weatherEmoji: "🌤️",
    temp: 27,
    tempEmoji: "😊",
    aqi: 35,
    aqiEmoji: "😷",
    cost: "$750/mo",
    ratings: {
      overall: { color: "green", width: 85 },
      cost: { color: "green", width: 95 },
      internet: { color: "red", width: 40 },
      liked: { color: "yellow", width: 88 },
      safety: { color: "green", width: 85 }
    }
  },
  {
    image: "images/malayisa.jpg",
    alt: "Chiang Mai",
    rank: 32,
    speed: 32,
    label: "",
    country: "Malaysia",
    city: "Kuala Lumpur",
    weatherEmoji: "☀️",
    temp: 28,
    tempEmoji: "🥵",
    aqi: 100,
    aqiEmoji: "😷",
    cost: "$1050/mo",
    ratings: {
      overall: { color: "green", width: 85 },
      cost: { color: "green", width: 95 },
      internet: { color: "red", width: 40 },
      liked: { color: "yellow", width: 88 },
      safety: { color: "green", width: 85 }
    }
  },
  {
    image: "images/croatia.webp",
    alt: "Dubrovnik",
    rank: 33,
    speed: 45,
    label: "",
    country: "Croatia",
    city: "Dubrovnik",
    weatherEmoji: "☀️",
    temp: 22,
    tempEmoji: "😊",
    aqi: 30,
    aqiEmoji: "😊",
    cost: "$2100/mo",
    ratings: {
      overall: { color: "green", width: 80 },
      cost: { color: "red", width: 45 },
      internet: { color: "green", width: 70 },
      liked: { color: "green", width: 85 },
      safety: { color: "green", width: 80 }
    }
  },
  {
    image: "images/austin-tx-united-states.webp",
    alt: "Cape Town",
    rank: 34,
    speed: 28,
    label: "",
    country: "South Africa",
    city: "Cape Town",
    weatherEmoji: "☀️",
    temp: 25,
    tempEmoji: "😊",
    aqi: 42,
    aqiEmoji: "😊",
    cost: "$1200/mo",
    ratings: {
      overall: { color: "green", width: 75 },
      cost: { color: "yellow", width: 88 },
      internet: { color: "red", width: 40 },
      liked: { color: "green", width: 80 },
      safety: { color: "red", width: 50 }
    }
  },
  {
    image: "images/berlin-germany.webp",
    alt: "Vienna",
    rank: 35,
    speed: 72,
    label: "",
    country: "Austria",
    city: "Vienna",
    weatherEmoji: "🌤️",
    temp: 14,
    tempEmoji: "😊",
    aqi: 25,
    aqiEmoji: "😊",
    cost: "$2400/mo",
    ratings: {
      overall: { color: "yellow", width: 88 },
      cost: { color: "red", width: 35 },
      internet: { color: "green", width: 90 },
      liked: { color: "green", width: 85 },
      safety: { color: "green", width: 95 }
    }
  },
  {
    image: "images/phnopenh.webp",
    alt: "Siem Reap",
    rank: 36,
    speed: 22,
    label: "",
    country: "Cambodia",
    city: "Siem Reap",
    weatherEmoji: "☀️",
    temp: 35,
    tempEmoji: "🥵",
    aqi: 78,
    aqiEmoji: "😷",
    cost: "$850/mo",
    ratings: {
      overall: { color: "green", width: 75 },
      cost: { color: "green", width: 95 },
      internet: { color: "red", width: 30 },
      liked: { color: "green", width: 80 },
      safety: { color: "green", width: 70 }
    }
  },
  {
    image: "images/asuncion-paraguay.webp",
    alt: "Lima",
    rank: 37,
    speed: 38,
    label: "",
    country: "Peru",
    city: "Lima",
    weatherEmoji: "🌤️",
    temp: 21,
    tempEmoji: "😊",
    aqi: 65,
    aqiEmoji: "😷",
    cost: "$1100/mo",
    ratings: {
      overall: { color: "green", width: 72 },
      cost: { color: "green", width: 85 },
      internet: { color: "green", width: 60 },
      liked: { color: "green", width: 75 },
      safety: { color: "red", width: 55 }
    }
  },
  {
    image: "images/malayisa.jpg",
    alt: "Singapore",
    rank: 38,
    speed: 95,
    label: "",
    country: "Singapore",
    city: "Singapore",
    weatherEmoji: "☀️",
    temp: 31,
    tempEmoji: "🥵",
    aqi: 55,
    aqiEmoji: "😊",
    cost: "$3200/mo",
    ratings: {
      overall: { color: "green", width: 90 },
      cost: { color: "red", width: 20 },
      internet: { color: "green", width: 95 },
      liked: { color: "yellow", width: 88 },
      safety: { color: "green", width: 95 }
    }
  },
  {
    image: "images/berlin-germany.webp",
    alt: "Amsterdam",
    rank: 39,
    speed: 68,
    label: "",
    country: "Netherlands",
    city: "Amsterdam",
    weatherEmoji: "🌧️",
    temp: 11,
    tempEmoji: "🥶",
    aqi: 20,
    aqiEmoji: "😊",
    cost: "$2800/mo",
    ratings: {
      overall: { color: "green", width: 85 },
      cost: { color: "red", width: 25 },
      internet: { color: "yellow", width: 88 },
      liked: { color: "green", width: 82 },
      safety: { color: "green", width: 80 }
    }
  },
  {
    image: "images/colombia.jpg",
    alt: "Bogotá",
    rank: 40,
    speed: 30,
    label: "",
    country: "Colombia",
    city: "Bogotá",
    weatherEmoji: "🌤️",
    temp: 18,
    tempEmoji: "😊",
    aqi: 58,
    aqiEmoji: "😊",
    cost: "$1000/mo",
    ratings: {
      overall: { color: "green", width: 72 },
      cost: { color: "green", width: 90 },
      internet: { color: "green", width: 55 },
      liked: { color: "green", width: 78 },
      safety: { color: "red", width: 45 }
    }
  },
  {
    image: "images/austin-tx-united-states.webp",
    alt: "Dubai",
    rank: 41,
    speed: 85,
    label: "",
    country: "UAE",
    city: "Dubai",
    weatherEmoji: "☀️",
    temp: 38,
    tempEmoji: "🥵",
    aqi: 110,
    aqiEmoji: "😷",
    cost: "$2900/mo",
    ratings: {
      overall: { color: "green", width: 78 },
      cost: { color: "red", width: 20 },
      internet: { color: "green", width: 90 },
      liked: { color: "green", width: 70 },
      safety: { color: "green", width: 92 }
    }
  },
  {
    image: "images/japan.jpg",
    alt: "Osaka",
    rank: 42,
    speed: 78,
    label: "",
    country: "Japan",
    city: "Osaka",
    weatherEmoji: "🌤️",
    temp: 16,
    tempEmoji: "😊",
    aqi: 35,
    aqiEmoji: "😊",
    cost: "$1800/mo",
    ratings: {
      overall: { color: "yellow", width: 88 },
      cost: { color: "red", width: 40 },
      internet: { color: "green", width: 85 },
      liked: { color: "green", width: 90 },
      safety: { color: "green", width: 95 }
    }
  }
];


function renderBoxs(boxDetails) {
    let html = "";

    for (let i = 0; i < boxDetails.length; i++) {
        const box = boxDetails[i];
        html +=
        `<div class="boxs">
                <img class="box-bg" src="${box.image}" alt="${box.alt}">
                <div class="header-box ">
                  <div class="list-number">${box.rank}<span class="text-underline"></span></div>
                  <div class="internet-speed"><img src="images/wifi.svg" alt="wifi">
                    <div class="speed-wifi"><span class="speed">${box.speed}</span><span class="mbps">mbps</span></div>
                  </div>
                </div>
                <div class="hero-box">
                  ${box.label ? `<div class="popular-lable">${box.label}</div>` : ""}
                  <div class="country">${box.country}</div>
                  <div class="city">${box.city}</div>
                </div>
                <div class="footer-box">
                  <div class="weather">${box.weatherEmoji} <div class="temp">feel <span> ${box.temp}° </span></div>${box.tempEmoji}<div class="aqi">
                      <span>AQI</span><span>${box.aqi}</span>
                    </div>${box.aqiEmoji}</div>
                  <div class="cost-living">${box.cost} <span class="for-a-nomad">FOR A NOMAD</span></div>
                </div>
                <div class="boxs-hover">
                  <div class="boxs-hover-header">
                    <svg class="hover-heart" aria-hidden="true" width="25" focusable="false" role="img"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="none" stroke="white" stroke-width="30"
                        d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z">
                      </path>
                    </svg>
                    <div class="close-hover-box tooltip" data-tooltip="Hide this, it will come back if you filter or reload Nomads.com">×</div>
                  </div>
                  <div class="boxs-hover-content">
                    <div class="rating-loading-data">
                      <div class="rating-title">⭐️ Overall</div>
                      <div class="rating-bar-container">
                        <div class="rating-bar ${box.ratings.overall.color} w-${box.ratings.overall.width}"></div>
                      </div>
                    </div>
                    <div class="rating-loading-data">
                      <div class="rating-title">💵 Cost</div>
                      <div class="rating-bar-container">
                        <div class="rating-bar ${box.ratings.cost.color} w-${box.ratings.cost.width}"></div>
                      </div>
                    </div>
                    <div class="rating-loading-data">
                      <div class="rating-title">📡 Internet</div>
                      <div class="rating-bar-container">
                        <div class="rating-bar ${box.ratings.internet.color} w-${box.ratings.internet.width}"></div>
                      </div>
                    </div>
                    <div class="rating-loading-data">
                      <div class="rating-title">👍 Liked</div>
                      <div class="rating-bar-container">
                        <div class="rating-bar ${box.ratings.liked.color} w-${box.ratings.liked.width}"></div>
                      </div>
                    </div>
                    <div class="rating-loading-data">
                      <div class="rating-title">👮 Safety</div>
                      <div class="rating-bar-container">
                        <div class="rating-bar ${box.ratings.safety.color} w-${box.ratings.safety.width}"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`;
    }
 boxsContainer.insertAdjacentHTML("afterbegin", html);
 // we return for usable later or to customize what when wnat to show or modifi it
 const cards = boxsContainer.querySelectorAll(".boxs");
  return cards;
}

renderBoxs(boxsData);
