async function check() {
  try {
    const londonRes = await fetch('https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m');
    const londonData = await londonRes.json();
    console.log('--- LONDON LIVE WEATHER ---');
    console.log(JSON.stringify(londonData.current, null, 2));

    const delhiRes = await fetch('https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.2090&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m');
    const delhiData = await delhiRes.json();
    console.log('--- DELHI LIVE WEATHER ---');
    console.log(JSON.stringify(delhiData.current, null, 2));
  } catch (e) {
    console.error(e);
  }
}
check();
