const express = require('express');
const cors = require('cors');
const app = express();

// 🔍 Log the origin of all incoming requests
app.use((req, res, next) => {
  console.log('Origin:', req.headers.origin);
  next();
});

// ✅ Enable CORS for your frontend
app.use(cors({
  origin: 'https://my-first-app-two-bice.vercel.app',
}));

// 🎯 Your API route
app.get('/hello', (req, res) => {
  res.send('Hello from the backend!');
});

// ✅ Start the server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
