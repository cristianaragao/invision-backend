const express = require('express');
const cors = require('cors');
const routes = require('./routes');
require('dotenv').config();
 
const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

const port = process.env.PORT || "1234";

app.use('/', routes);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));