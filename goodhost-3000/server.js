const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

// читаємо версію та конфіг
const version = fs.readFileSync(path.join(__dirname, 'version.txt'), 'utf-8').trim();
const config = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json'), 'utf-8'));

console.log(`[System] Starting ${config.appName} v${version}...`);

// CORS вмикається тільки в режимі mode1
if (config.mode === 'mode1') {
  app.use(cors());
}

// віддаємо статику з public/
app.use(express.static(path.join(__dirname, 'public')));

// "база даних" листів
const emails = [
  { id: 1, sender: 'alice@example.com', subject: 'Welcome', body: 'Hello John!' },
  { id: 2, sender: 'bob@example.com', subject: 'Meeting', body: 'Reminder about meeting.' }
];

// API
app.get('/api/emails', (req, res) => {
  res.json(emails);
});

app.listen(PORT, () => {
  console.log(`GoodHost running on http://localhost:${PORT}`);
});
