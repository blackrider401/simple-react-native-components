const MyComponent = (val) => {
  if (isNumber(val)) {
    return "This is a number";
  } else {
    return "this is not a number";
  }
};

module.exports = MyComponent;
