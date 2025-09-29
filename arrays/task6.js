const numbersList = [1,10,14,2,4,5,43,34];
const copyNumbersList = numbersList.slice();
copyNumbersList.sort((a, b) => a - b);

console.log(numbersList);
console.log(copyNumbersList);

//але я думаю цей варіант більш вірний
const numbersList1 = [1,10,14,2,4,5,43,34];
const sortedList = [...numbersList1].sort((a, b) => a - b);


console.log(numbersList1);
console.log(sortedList);


