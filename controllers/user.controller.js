/*  User Landing Page Setup  */

exports.allAccess = (req, res) => {
  res.status(200).send("Lock It! Landing Page");
};

exports.userBoard = (req, res) => {
  res.status(200).send("Student Dashboard");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Dashboard");
};

exports.teacherBoard = (req, res) => {
  res.status(200).send("Teacher Dashboard");
};