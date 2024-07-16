import multer from "multer";
import path from 'path'

export const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.resolve("uploads"));
    },
    filename: (req, file, callback) => {

        callback(null, file.originalname);
    }
});