"use strict";
exports.__esModule = true;
var express_1 = require("express");
var multer_1 = require("multer");
var path_1 = require("path");
var multerConfig_1 = require("../multerConfig");
var upload = (0, multer_1["default"])({ storage: multerConfig_1.storage });
var app = (0, express_1["default"])();
var PORT = parseInt(process.env.PORT || '3000', 10);
var HOST = process.env.HOST || '0.0.0.0';
app.use('uploads', express_1["default"].static(path_1["default"].resolve('../uploads')));
app.post('/upload', upload.single('file'), function (req, res) {
    var _a;
    res.statusCode = 200;
    return res.json((_a = req.file) === null || _a === void 0 ? void 0 : _a.filename);
});
app.listen(PORT, HOST, function () {
    console.log("Running on http://".concat(HOST, ":").concat(PORT));
});
