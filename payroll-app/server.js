const express = require('express');
const app = express();
const fileHandler = require('./modules/fileHandler');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', async (req, res) => {
  const employees = await fileHandler.readData();
  console.log("Employees:", employees); // ✅ Logs data on server start
  res.render('index', { employees });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});