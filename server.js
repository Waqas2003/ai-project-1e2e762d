const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());
app.use(express.static('public'));

app.get('/api/products', (req, res) => {
  const products = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 9.99 },
    { id: 3, name: 'Product 3', price: 12.99 },
  ];
  res.json(products);
});

app.get('/api/product/:id', (req, res) => {
  const productId = req.params.id;
  const product = { id: 1, name: 'Product 1', price: 10.99 };
  res.json(product);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
```

**Package.json**