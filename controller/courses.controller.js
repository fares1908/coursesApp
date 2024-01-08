const { validationResult } = require("express-validator");
const Course = require('../models/course.model');

const httpStatusRequest = require('../utils/httpStatusText')

const getallCourse = async(req, res) => {
    const courses = await Course.find({}, { "__v": false }, ).limit(2)
    res.json({
        status: httpStatusRequest.SUCCESS,
        data: { courses }
    });
};

const getSingleCourse = async(req, res) => {
    const course = await Course.findById(req.params.courseId)
    if (!course) {
        return res.status(404).json({ status: httpStatusRequest.FAIL, msg: "course not found" });
    }
    res.json(course);
};

const addCourse = async(req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }
    const newCourse = new Course(req.body)
    await newCourse.save();
    res.status(201).json(newCourse)
};

const updateCourse = async(req, res) => {
    const courseId = req.params.courseId;

    const updateCourse = await Course.updateOne({ id: courseId }, {
        $set: {
            ...req.body
        }
    })

    res.status(200).json({ status: httpStatusRequest.SUCCESS, data: updateCourse });
};


const deleteCourse = async(req, res) => {
    const courseId = req.params.courseId;
    await Course.deleteOne({ id: courseId })

    res.status(200).json({ status: httpStatusRequest.SUCCESS, data: null }); // Corrected the response message
};

module.exports = {
    getallCourse,
    getSingleCourse,
    addCourse,
    updateCourse,
    deleteCourse,
};