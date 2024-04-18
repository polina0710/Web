const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/download', (req, res) => {
    const filePath = path.join(__dirname, 'data', 'campaigns.json');
    res.download(filePath, 'campaigns.json', function(err){
        if (err) {
            console.log("Error downloading the file:", err);
        } else {
            console.log("File downloaded successfully");
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
