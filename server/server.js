const express = require('express');
const app = express();
const port = 5000;

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'John', lastName: 'Doe'},
        {id: 3, firstName: 'John', lastName: 'Doe'},
    ];
    res.json(customers);
})

app.get('/', (req, res) => {
    res.send('root route');
});

app.listen(port, () =>
    console.log(`Server started on port ${port}`)
);