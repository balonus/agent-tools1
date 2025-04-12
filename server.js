const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// POST endpoint
app.post('/tool1', (req, res) => {
    const { input } = req.body;
    
    if (!input) {
        return res.status(400).json({ error: 'Input parameter is required' });
    }

    if (input.startsWith('test')) {
        res.json({ output: input });
    } else {
        res.json({ output: "{\"kod_uczelni\": \"UNIJAG\", \"sponsor\": \"JJIT - Just JSON Intelligence Technologies\"}" });
    }
});

// POST endpoint
app.post('/tool2', (req, res) => {
    const { input } = req.body;
    
    if (!input) {
        return res.status(400).json({ error: 'Input parameter is required' });
    }

    if (input.startsWith('test')) {
        res.json({ output: input });
    } else {
        res.json({ output: "{\"nazwa_uczelni\": \"Uniwersytet Jagiello\u0144ski\", \"pracownicy\": \"Jakub Kami\u0144ski, Rafa\u0142 Bomba, Andrzej Maj, Katarzyna Nowak, Magdalena Lewandowska, Anna Wi\u015bniewska, Piotr Kowalski\"}" });
    }
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 