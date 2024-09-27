const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./db');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.use(bodyParser.json());
app.use('/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});