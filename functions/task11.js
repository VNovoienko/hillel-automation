function handleNum(number, onEven, onOdd) {
  if (number % 2 === 0) {
    onEven();
    return;
  }

  onOdd();
}

function checkEven() {
  console.log("Even number");
}

function checkOdd() {
  console.log("Odd number");
}

handleNum(29, checkEven, checkOdd);
