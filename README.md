# 🌍 Natural Disaster Tracker App 

A React-based interactive map that allows users to view **natural events** (like wildfires, volcanoes, floods, and more) across the globe in real-time using data from NASA's [EONET API](https://eonet.gsfc.nasa.gov/). Users can filter by event category and view detailed information for each event by clicking on its map marker. The app also leverages **OpenAI’s GPT model** to generate short summaries describing each event.

![App Screenshot](./public/NaturalDisasterTrackerApp.png)

---

## ✨ Features

- 🌐 **Interactive Google Maps** with event markers
- 🔎 **Category Filter Dropdown** to display specific types of events (e.g., Wildfires, Volcanoes, Severe Storms)
- 🧭 **Event Info Popup** with event title, date, ID, and type
- 🤖 **AI-Powered Event Summaries** using OpenAI GPT
- ❌ Closeable info box for a better viewing experience
- 🔄 Real-time event data fetched from NASA EONET API

---

## 🛠 Tech Stack

- **Frontend:** React.js, CSS
- **Backend:** Node.js, Express.js
- **AI/LLM:** OpenAI GPT (via OpenAI Node SDK)
- **Maps:** @react-google-maps/api
- **Icons:** Iconify
- **Data Source:** NASA EONET API v2.1

---


## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/wildfire-tracker.git
cd wildfire-tracker
```

### 2. Install dependencies

```bash
git clone https://github.com/your-username/wildfire-tracker.git
cd wildfire-tracker
```

### 3. Start the development server
```bash
npm start
```
---

## 🔑 Setup
### Google Maps API Key

To render the map, you need a Google Maps API key.
- Get your key from [Google Cloud Console](https://console.cloud.google.com/)
- Replace the placeholder in Map.js:
```bash
<LoadScript googleMapsApiKey='YOUR_GOOGLE_MAPS_API_KEY'>

```
---

### OpenAI API Key

To use AI summaries:
- Create .env file in server/ folder
- Add the following line:
```bash
OPENAI_API_KEY=your_openai_api_key_here
```

## 🧪 Sample API Endpoints
- Events: https://eonet.gsfc.nasa.gov/api/v2.1/events
- Categories: https://eonet.gsfc.nasa.gov/api/v2.1/categories
- Summaries: POST http://localhost:5000/generate-summary with body
- 

---

## 🎥 Walkthrough
Here’s a quick demo of the app in action:
![Wildfire Tracker Walkthrough](./public/NaturalDisasterTracker.gif)

## 🤝 Contributing
Pull requests are welcome! Feel free to fork the repo and submit a PR with improvements.

---

## 🛰️ Credits
- [NASA EONET API](https://eonet.gsfc.nasa.gov/)
- [OpenAI](https://platform.openai.com/)
- @react-google-maps/api
- [Iconify](https://iconify.design/)

---

Built with ❤️ by Rucha Daware
