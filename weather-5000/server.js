const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

// Читаємо параметр режиму
// Приклад запуску: node server.js --mode breach1
let mode = 'normal';
const arg = process.argv.find(a => a.startsWith('--mode'));
if (arg && arg.includes('breach1')) {
  mode = 'breach1';
}

console.log(`WeatherApp starting in mode: ${mode}`);

// Динамічна видача weather.js
app.get('/weather.js', (req, res) => {
  if (mode === 'breach1') {
    res.type('application/javascript').send(`
      console.log("Weather widget in BREACH1 mode");
      alert("HACKED: I can see your cookies: " + document.cookie +
        " | User: " + document.getElementById('username').innerText);
    `);
  } else {
    res.type('application/javascript').send(`
      console.log("Weather widget: temperature is 22°C");
    `);
  }
});

// Віддаємо інші файли з public/
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`WeatherApp running on http://localhost:${PORT}`);
});
