import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "img");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

export const uploadImg = () => {
  upload.single("file");
};

export const UploadMsg = (req, res) => {
  res.status(200).json("File uploaded!!!");
};
