(function () {
    function sortNumbersArrayDescending(numbersArray) {
        return numbersArray.sort((e1, e2) => e2 - e1);
    }

    function getFirstItems(array, amount) {
        return array.slice(0, amount);
    }

    function getLastItems(array, amount) {
        return array.slice(-amount);
    }

    function getEvenNumbersSum(numbersArray) {
        return numbersArray.reduce((sum, currentNumber) =>
            currentNumber % 2 === 0 ? sum + currentNumber : sum, 0);
    }

    function create1To100Array() {
        const result = [];

        for (let i = 1; i <= 100; i++) {
            result.push(i);
        }

        return result;
    }

    function getEvenNumbersSquares(array) {
        return array.filter(x => x % 2 === 0)
            .map(x => x * x);
    }

    const sampleArray = [1, 2, 3, 4, 5, 6, 8];

    console.log("Отсортируем массив по убыванию:");
    sortNumbersArrayDescending(sampleArray);
    console.log(sampleArray.join(", "));

    console.log("Получим первые 5 элементов массива:");
    console.log(getFirstItems(sampleArray, 5).join(", "));

    console.log("Получим последние 5 элементов массива:");
    console.log(getLastItems(sampleArray, 5).join(", "));

    console.log("Получим сумму четных чисел массива:");
    console.log(getEvenNumbersSum(sampleArray));

    const array1To100 = create1To100Array();
    console.log("Создадим массив чисел от 1 до 100:");
    console.log(array1To100.join(", "));

    console.log("Отобразим квадраты четных чисел в этом массиве:");
    console.log(getEvenNumbersSquares(array1To100).join(", "));
})();