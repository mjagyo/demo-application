const express = require('express');
const app = express();
const pool = require('./db');

const helper = require("./helper")
const service = require("./insertService")

const port = 4004;

app.get('/api/health', (req, res) => {
  return res.send({
    "status": "ok"
  }); 
});

app.get('/api/mirror', async (req, res) => {
    const { word } = req.query; 
    // res.send('word to be transformed: ' + word);
    if (typeof word !== 'string') {
        return res.status(400).json({ error: 'Invalid input, expected a string.' });
    }

    const transformed = await helper.transformString(word);
    service.insertData(word, transformed);

    if (!transformed) {
        return res.status(400).json({ error: "something is wrong" });    
    } else {
        return res.json({ "transformed": transformed });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


module.exports = app
