/*  Required  */
const Validator = require("validator");
const isEmpty = require("is-empty");

/*  Validation Function  */
module.exports = function validateRegisterInput(data) {

  /*  Create Error Variable  */
  let errors = {};

  /*  Convert Empty Fields to Empty String for Validation  */
  data.first_name = !isEmpty(data.first_name) ? data.first_name : "";
  data.last_name = !isEmpty(data.last_name) ? data.last_name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  data.role = !isEmpty(data.role) ? data.role : "";

  /*  Validates Name Entry  */
  if (Validator.isEmpty(data.first_name)) {
    errors.first_name = "First name field is required";
  }
  if (Validator.isEmpty(data.last_name)) {
    errors.last_name = "Last name field is required";
  }

  /*  Validates Enmail Address Entry  */
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  /*  Validates Password Entry  */
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};