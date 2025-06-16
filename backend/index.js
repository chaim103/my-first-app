const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all origins (or specify Vercel URL)
app.use(cors({
  origin: 'https://my-first-qwo60zrht-chaims-projects-56b1d54e.vercel.app'
}));

app.get('/hello', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
