
/*  Required  */
const Validator = require("validator");
const isEmpty = require("is-empty");

/*  Validation Function  */
module.exports = function validateLoginInput(data) {

  /*  Create Error Variable  */
  let errors = {};

  /*  Convert Empty Fields to Empty String for Validation  */
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  /*  Validates Email Address Entry  */
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  /*  Validates Passwprd Entry  */
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};