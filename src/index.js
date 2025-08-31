const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to Clean Code Reviewer!');
});

// Dummy code analysis route
app.post('/analyze', (req, res) => {
    const { code } = req.body;
    // TODO: Implement code analysis logic here
    res.json({ message: 'Code analysis is not yet implemented.', code });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
