const express = require('express');
const screenshotRoutes = require('./routes/screenshot');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', screenshotRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});