


function validation(values) {
    let errors = {};
    if (!values.name) {
        errors.name = "Name is required."
    }
    if (!values.email) {
        errors.email = "Email is required."
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is invalid."
    }
    if (!values.password) {
      errors.password = "Password is required.";
    } else if (values.password.length < 8) {
        errors.password = "Password must be more than 8 characters."
    }
    else if (values) {
        errors.hasEmail = "This account already signed"
    }
    return errors;
}

export default validation
