import multer from "multer"
//<---------keeping the files temporary in diskstorage---------->//

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp")
  },
  filename: function (req, file, cb) {
    cb(null,file.originalname)
  }
})

 export const upload = multer({ storage, })