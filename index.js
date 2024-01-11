const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.text()); // Для чтения текстовых данных из запросов

app.post('/post-data', (req, res) => {
  const textData = req.body;
  console.log(`Received text data: ${textData}`);
  // Здесь можно сохранить текст для последующего отображения на веб-странице
  res.status(200).send('Data received');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
