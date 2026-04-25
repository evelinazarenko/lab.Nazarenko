const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 4000;

// Дозволяємо CORS (для mode1)
app.use(cors());

// Віддаємо статику з public/
app.use(express.static(path.join(__dirname, 'public')));

// Ендпоінт для "нових повідомлень"
app.get('/api/support/messages', (req, res) => {
  res.json({
    hasNew: true,
    messages: ["Привіт! Чим можемо допомогти?"]
  });
});

app.listen(PORT, () => {
  console.log(`Support server running on http://localhost:${PORT}`);
});