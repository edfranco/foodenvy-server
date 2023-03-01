const express = require('express');
const connectDB = require('./config/db');
const app = express();
const routes = require('./routes');
const PORT = process.env.PORT || 4000;

app.use(express.json());

connectDB();


app.use(`/api/v1/posts`, routes.posts);

app.listen(PORT, console.log(`Server is live on port:${PORT}`));
