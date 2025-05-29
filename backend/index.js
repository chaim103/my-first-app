const express = require('express');
const app = express();
const port = 3001; // frontend is usually on 3000

// Allow requests from frontend
const cors = require('cors');
app.use(cors());

app.get('/hello', (req, res) => {
  res.send('Hello World from Backend!');
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
