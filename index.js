const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;
app.use(cors());
app.use(bodyParser.json());
let posts = [];
app.get('/posts', (req, res) => {
res.json(posts);
});
app.post('/posts', (req, res) => {
const newPost = req.body;
posts.push(newPost);
res.status(201).json({ message: 'Post created successfully' });
});
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});