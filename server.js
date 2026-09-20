const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// स्टॅटिक फाईल्स लोड करण्यासाठी फोल्डर
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// मुख्य पेज
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
