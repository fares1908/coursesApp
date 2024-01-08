const { body } = require("express-validator");
const validationSchema = () => {
    return [
        body("title").notEmpty().withMessage("title cant be empty"),
        body("price").notEmpty().withMessage("price cant be empty"),
    ]
}
module.exports = {
    validationSchema
}