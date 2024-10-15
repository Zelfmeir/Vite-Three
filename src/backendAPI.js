const express = require('express');
const multer = require('multer');
const meshy =  require('meshy-api')

const app = express();

const upload = multer({ dest: './uploads/'});

app.post('/upload-image', upload.single('image'), async (req, res) =>{
    const imageData = req.file.buffer;
    const modelData = await meshy.converImageTo3D(imageData);
    res.json(modelData);
});

app.listen(3000, () => {
    console.log('Server listening on port 5173');
});