const express = require("express");
const { validationSchema } = require('../middlewares/validationShcema')

const router = express.Router();
const { body } = require("express-validator");
const courseController = require("../controller/courses.controller");

router
    .route("/")
    .get(courseController.getallCourse)
    .post(

        validationSchema(), courseController.addCourse
    );

router
    .route("/:courseId")
    .get(courseController.getSingleCourse)
    .patch(courseController.updateCourse)
    .delete(courseController.deleteCourse);

module.exports = router;