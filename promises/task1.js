function printText(text, delay) {
  return setTimeout(
    () => console.log(text),
    delay,
  );
}

printText("Hello after 3 second", 3000);
