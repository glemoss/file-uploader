import express from 'express';
import multer from 'multer';
import path from 'path';

import { storage } from '../multerConfig'

const upload = multer({ storage: storage });
const app = express();

const PORT = parseInt(process.env.PORT || '3000', 10) ;
const HOST = process.env.HOST || '0.0.0.0';

app.use('uploads', express.static(path.resolve('../uploads')));

app.post('/upload', upload.single('file'), (req, res) => {
    return res.json(req.file?.filename);
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});