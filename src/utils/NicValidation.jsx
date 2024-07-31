const NICval = (value) => {
  let error;

  if (!value) {
    error = "Parent NIC is required";
  } else if (!/^\d{9}([vV]|\d{3})$/.test(value)) {
    error = "Invalid NIC format";
  } else if (value.length !== 10 && value.length !== 12) {
    error = "NIC must be 10 or 12 characters long";
  } else {
    return "Correct";
  }

  return error;
};

export default NICval;
