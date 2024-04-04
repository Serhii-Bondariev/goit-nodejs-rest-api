import multer from "multer";
import path from "path";

export const tempDir = path.resolve("tmp");

const storage = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const limits = {
  fileSize: 5 * 1024 * 1024,
};

const upload = multer({
  storage,
  limits,
});

export default upload;
