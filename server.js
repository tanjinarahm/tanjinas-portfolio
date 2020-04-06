const express = require("express");
const cors = require("cors");
const port = 8000;

const app = express();

app.use(cors());
app.use(express.json());

require('./server/routes')(app);

app.listen(port, () => console.log(`listening on port ${port}`));