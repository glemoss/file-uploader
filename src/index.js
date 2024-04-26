"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const multerConfig_1 = require("../multerConfig");
const upload = (0, multer_1.default)({ storage: multerConfig_1.storage });
const app = (0, express_1.default)();
const PORT = parseInt(process.env.PORT || '3000', 10);
const HOST = process.env.HOST || '0.0.0.0';
app.use('uploads', express_1.default.static(path_1.default.resolve('../uploads')));
app.post('/upload', upload.single('file'), (req, res) => {
    var _a;
    return res.json((_a = req.file) === null || _a === void 0 ? void 0 : _a.filename);
});
app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});
