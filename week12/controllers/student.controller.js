// import student model
const { model } = require("mongoose");
const studentModel = require("../models/student");

/**
 * get all students, render page
 * @param {*} req
 * @param {*} res
 */
function loadStudentData(req, res) {
  studentModel.Student.find({}).then(function (studentList) {
    // console.log(studentList);
    res.render("./pages/student", {
      pageTitle: "INFT 2202 - Student Class List",
      students: studentList,
    });
  });
}

const addEditStudent = (req, res) => {
  let studentData = {
    studentId: req.body.studentId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  };

  studentModel.Student.find({ studentId: studentData.studentId }).then(
    function (studentList) {
      if (studentList?.length > 0) {
        // there is already a student with the studentId
        console.log("----updateOne");
        studentModel.Student.updateOne(
          { studentId: studentData.studentId },
          studentData
        ).then((updateStudent) => {
          console.log("---updated!!", updateStudent);
          loadStudentData(req, res);
        });
      } else {
        // there is no student with the matching studentId
        let newStudent = new studentModel.Student(studentData);
        newStudent.save();
        loadStudentData(req, res);
      }
    }
  );
};

/**
 * renders student view
 * @param {*} req
 * @param {*} res
 */
function studentView(req, res) {
  loadStudentData(req, res);
}

// Exports
module.exports = {
  studentView,
  addEditStudent,
};
