let min = 0;
let max = 100;
let pickedNumber;
let rightNumber;

do {
    pickedNumber = Math.floor((min + max) / 2);
    rightNumber = prompt(`Ваш номер ${pickedNumber}? (Введіть "забагато", "замало", або "правильно")`);
    if (rightNumber === "забагато") {
        max = pickedNumber - 1;
    } else if (rightNumber === "замало") {
        min = pickedNumber + 1;
    }
    if (min > max) {
        alert("Ви обманули! Числа не існує в заданому діапазоні.");
        break;
    }
} while (rightNumber !== "правильно");

if (rightNumber === "правильно") {
    alert(`Ура! Я вгадав твій номер, це ${pickedNumber}!`);
}

