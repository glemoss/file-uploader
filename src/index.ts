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
    res.statusCode = 200;
    return res.json(req.file?.filename);
});

app.post('/upload', upload.single('file'), (req, res) => {
    try {
        const filename = req.file?.filename; // Usando opcional chaining para evitar erros se 'file' não existir
        return res.status(200).json({ filename }); // Correção: use 'res.status().json()' em vez de 'res.statusCode = 200; return res.json();'
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao processar o nome do arquivo.' });
    }
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});