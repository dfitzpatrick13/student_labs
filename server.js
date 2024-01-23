const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// MongoDB setup
mongoose.connect('mongodb://localhost:27017/captains_log', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
const logsController = require('./controllers/logs');
app.use('/', logsController);

const foodLogsController = require('./controllers/foodlogs');
app.use('/', foodLogsController);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
