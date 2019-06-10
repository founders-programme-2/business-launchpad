const express = require('express');

const app = express();

const port = 5000;
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server running on port ${port}`));
