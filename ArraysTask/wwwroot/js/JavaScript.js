(function () {
    const sortNumbersArrayDescending = (numbersArray) => numbersArray.sort((e1, e2) => e2 - e1);

    const getFirstItems = (numbersArray, amount) => numbersArray.slice(0, amount);

    const getLastItems = (numbersArray, amount) => numbersArray.slice(-amount);

    const getEvenNumbersSum = (numbersArray) => numbersArray.reduce((sum, currentValue) =>
        currentValue % 2 === 0 ? sum + currentValue : sum);

    //const getEvenNumbersSum = (array) => array.filter(x => x % 2 === 0).reduce((sum, x) => sum + x, 0); первый вариант лучше?

    const create1To100Array = () => Array.from({ length: 100 }, (_, i) => i + 1);

    const getEvenNumbersSquares = (array) => array.filter(x => x % 2 === 0)
        .map(x => x * x);

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