AetherCast AI Weather Prediction Web Application 🌤️⚡
A modern, high-performance, and feature-packed weather prediction web application built with React 19, Vite, Chart.js, Leaflet, and Open-Meteo API.

Features include dynamic HTML5 canvas particle backgrounds (rain, snow, thunder, clear, clouds), AI predictive forecast insights, 24-hour interactive time machine slider, live precipitation radar map, air quality index (AQI) dial, multi-city comparison matrix, 10-year historical climate average analysis, voice briefing assistant, and shareable weather card exporter.

🌟 Key Features
1. Live Weather & Global Search
Zero API Key Setup: Powered by Open-Meteo free REST telemetry API.
Global Autocomplete Search: Search any city, region, or country with debounced real-time geocoding.
Browser GPS Geolocation: One-click auto-detection for your current location.
Complete Weather Metrics: Real-time temperature, feels-like temp, humidity, pressure (hPa), wind speed & cardinal direction, cloud cover, visibility, and UV index.
2. Predictive AI Insights & Smart Recommendations
AI Forecast Summary: Natural language AI summary of upcoming weather conditions.
Severe Weather Risk Warning System: Automated risk scoring (Low, Moderate, High, Extreme) for thunderstorms, extreme heat, cold freezes, and heavy rainfall.
Smart Outfit Planner: Clothing recommendations based on temperature, rain probability, and UV exposure.
Outdoor Activity Ratings: Calculated suitability scores for Running, Cycling, Beach/Outdoors, and Stargazing.
3. Dynamic Visual Canvas & Ambient Audio
HTML5 Canvas Particle Renderer: Reactive background particle system displaying animated rain drops, lightning flashes, drifting snowflakes, glowing sunbeams, and volumetric clouds.
Synthesized Ambient Audio: Web Audio API pink/brown noise procedural rain sound generator with volume toggle.
4. Interactive Analytics & Visualizations
24-Hour Interactive Time Machine: Scrub hour-by-hour to preview upcoming weather conditions with instant visual background shifts.
Interactive Chart.js Analytics: Toggle between 24-hour temperature curves, precipitation probability bars, wind speeds, and humidity trends.
US Air Quality Index (AQI): AQI rating with pollutant breakdowns (PM2.5, PM10, NO2).
Sunrise & Sunset Arc: Semi-circle SVG sun trajectory path tracking real-time sun position.
5. Radar, Multi-City & Climate Baseline
Live Weather Radar Map: Leaflet map overlaid with RainViewer live precipitation radar tiles.
Multi-City Comparison Matrix: Compare 2 to 4 world cities side-by-side (temperature, rain chance, humidity, wind).
Historical Climate Comparison: Compares today's weather against 10-year historical averages for the location and date.
6. Voice Briefing & Card Exporter
Voice Weather Briefing: Web Speech Synthesis text-to-speech audio reader.
PNG Weather Card Exporter: One-click downloadable Weather Card image generator powered by html2canvas.
Saved Favorites: Bookmark favorite locations with local storage persistence.
🛠️ Tech Stack
Category	Technologies
Framework & Core	React 19, Vite, JavaScript (ES6+)
Styling & Design	Vanilla CSS3, CSS Custom Properties, Glassmorphism, Google Fonts (Outfit & Plus Jakarta Sans)
APIs & Telemetry	Open-Meteo Forecast & Geocoding API, Open-Meteo AQI API, RainViewer Radar Tile API
Maps & Charts	Leaflet.js, React-Leaflet, Chart.js, React-Chartjs-2
Visual Effects	HTML5 Canvas API (Particle Physics Engine), canvas-confetti, html2canvas
Audio Services	Web Speech API (SpeechSynthesisUtterance), Web Audio API (Synthesized Noise Generator)
Icons	Lucide React
