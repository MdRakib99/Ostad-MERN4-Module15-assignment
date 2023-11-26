const express = require("express");
const router = express.Router();
const studetnController = require("../controller/studentController");

router.post("/createStudent", studetnController.createStudent);
router.get("/deleteStudent/:id", studetnController.deleteStudent);
router.post("/updateStudent/:id", studetnController.updateStudent);
router.get("/studentList", studetnController.studentList);
router.get("/student-by-id/:id", studetnController.studentById);

module.exports = router;
