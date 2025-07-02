const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to serve static files
app.use(express.static('public'));

// Route for SDLC validation
app.get('/api/sdlc', (req, res) => {
  res.json({ message: 'SDLC validation endpoint' });
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});