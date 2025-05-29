import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const fetchMessage = async () => {
    try {
      const response = await fetch('http://localhost:3001/hello');
      const text = await response.text();
      setMessage(text);
    } catch (err) {
      setMessage('Error fetching from backend');
      console.error(err);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Frontend</h1>
      <button onClick={fetchMessage}>Get Message from Backend</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
