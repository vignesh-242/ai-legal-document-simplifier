const express = require('express');
const multer = require('multer');
const { exec } = require('child_process');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());

const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  const filePath = req.file.path;

  exec(`python3 simplifier.py ${filePath}`, (err, stdout, stderr) => {
    if (err) {
      console.error(stderr);
      return res.status(500).send("Error simplifying document.");
    }
    res.send(stdout);
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
