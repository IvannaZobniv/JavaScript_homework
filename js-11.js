let min = 0;
let max = 100;
let pickedNumber;
let maxNumber;

do {
    pickedNumber = Math.floor((min + max) / 2);
    maxNumber = prompt(`Ваш номер ${pickedNumber}? (Введіть "забагато", "замало", або "правильно")`);
    if (maxNumber === "забагато") {
        max = pickedNumber - 1;
    } else if (maxNumber === "замало") {
        min = pickedNumber + 1;
    }
    if (min > max) {
        alert("Ви обманули! Числа не існує в заданому діапазоні.");
        break;
    }
} while (maxNumber !== "правильно");

if (maxNumber === "правильно") {
    alert(`Ура! Я вгадав твій номер, це ${pickedNumber}!`);
}

