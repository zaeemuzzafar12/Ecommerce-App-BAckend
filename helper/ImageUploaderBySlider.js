const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/slider/')
    },
    filename: function (req, file, cb) {
      const filename = file.originalname.split(' ').join('-')
      cb(null,`${filename}`)
    }
  })
  
const upload = multer({
    storage: storage
}).single('image')

module.exports ={ upload}
