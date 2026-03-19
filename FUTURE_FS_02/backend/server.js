const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const leadsRoute = require('./routes/leads');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/leads', leadsRoute);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));