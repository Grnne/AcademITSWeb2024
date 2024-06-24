(function () {
    const array1 = [1, 2, 3, 4, 5, 6, 8];

    function sortArrayDescending(array) {
        array.sort((e1, e2) => e2 - e1);
    }

    function getFirst5Items(array) {
        return array.slice(0, 5);
    }

    function getLast5Items(array) {
        let lastIndex = array.length;

        return array.slice(lastIndex - 5, lastIndex);
    }

    function getEvenNumbersSum(array) {
        let even = array.filter(x => x % 2 === 0);

        return even.reduce((sum, x) => sum + x, 0);
    }

    function make1To100Array() {
        let array = []; // С чего он конст хочет сделать, элементы массива же должны быть частью массива?

        for (let i = 1; i <= 100; i++) {
            array.push(i);
        }

        return array;
    }

    function getEvenNumbersSquaresFromArray(array) {
        let evenNumbersSquares = array.filter(x => x % 2 === 0).map(x => x * x);
        
        return evenNumbersSquares;
    }

    console.log("Отсортируем массив по убыванию");
    console.log(sortArrayDescending(array1));

    console.log("Получим первые 5 элементов массива");
    console.log(getFirst5Items(array1));

    console.log("Получим последние 5 элементов массива");
    console.log(getLast5Items(array1));

    console.log("Получим сумму четных чисел массива");
    console.log(getEvenNumbersSum(array1));

    let array2 = make1To100Array();
    console.log("Создадим массив чисел от 1 до 100");
    console.log(array2);

    console.log("Отобразим квадраты четных чисел в этом массиве");
    console.log(getEvenNumbersSquaresFromArray(array2));
})();