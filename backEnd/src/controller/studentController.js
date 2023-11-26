const studentModel = require("../model/studentModel");

exports.createStudent = async (req, res) => {
  let reqBody = req.body;
  try {
    let result = await studentModel.create(reqBody);
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(200).json({ status: "fail", data: error });
  }
};

exports.deleteStudent = async (req, res) => {
  let id = req.params.id;
  let query = { _id: id };
  try {
    let result = await studentModel.deleteOne(query);
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(200).json({ status: "fail", data: error });
  }
};

exports.updateStudent = async (req, res) => {
  let id = req.params.id;
  let reqBody = req.body;
  let query = { _id: id };
  try {
    let result = await studentModel.updateOne(query, reqBody);
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(200).json({ status: "fail", data: error });
  }
};

exports.studentList = async (req, res) => {
  try {
    let result = await studentModel.find();
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(200).json({ status: "fail", data: error });
  }
};

exports.studentById = async (req, res) => {
  try {
    let id = req.params.id;
    let query = { _id: id };
    let result = await studentModel.find(query);
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(200).json({ status: "fail", data: error });
  }
};
