const emailValidator = (email) => {
  if (!email) {
    return "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Invalid email format";
  } else {
    return null;
  }
};

export default emailValidator;
