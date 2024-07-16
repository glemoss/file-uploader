"use strict";
exports.__esModule = true;
exports.storage = void 0;
var multer_1 = require("multer");
var path_1 = require("path");
exports.storage = multer_1["default"].diskStorage({
    destination: function (req, file, callback) {
        callback(null, path_1["default"].resolve("uploads"));
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});
