const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const storage = require('./middleware');

const upload = multer({ storage });

const app = express();

app.use(morgan('dev'));
app.use(express.static('uploads'));

app.post('/upload', upload.single('image'));

app.listen(3000, () => console.log('Server is started'));
