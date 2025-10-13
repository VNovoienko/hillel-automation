function divide(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("You cannot divide by zero");
  }

  if (
    typeof numerator !== "number" ||
    typeof denominator !== "number"
  ) {
    throw new Error(
      "Both values must be numeric",
    );
  }

  return numerator / denominator;
}

try {
  console.log("Result: ", divide(10, 5));
} catch (error) {
  console.error(error.message);
} finally {
  console.log("The work is complete");
}

try {
  console.log("Result: ", divide(10, 0));
} catch (error) {
  console.error(error.message);
} finally {
  console.log("The work is complete");
}

try {
  console.log("Result: ", divide(10, "Hello"));
} catch (error) {
  console.error(error.message);
} finally {
  console.log("The work is complete");
}

try {
  console.log("Result: ", divide("Hi", 5));
} catch (error) {
  console.error(error.message);
} finally {
  console.log("The work is complete");
}
