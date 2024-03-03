const multer=require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");


aws.config.update({ 
    region:process.env.AWS_REGION,
    secretAccessKey: process.env.ACCESS_KEY_ID,
    accessKeyId: process.env.SECRET_ACCESS_KEY,
})
const s3 = new aws.S3()
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_BUCKET,
        acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, {fieldName: file.fieldname});
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString())
        }
    })
})
export default upload;