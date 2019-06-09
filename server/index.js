const express = require('express');

const app = express();
console.log("Hi");
app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

const port = 5000;
console.log("Hi2");
app.listen(port, () => console.log(`Server running on port ${port}`));
