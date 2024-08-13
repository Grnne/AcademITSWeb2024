(function () {
    

    const people = [
        { name: "Semen", age: 17 },
        { name: "Ivan", age: 20 },
        { name: "Petr", age: 30 },
        { name: "Vsevolod", age: 15 },
        { name: "Ivan", age: 28 },
        { name: "Ivan", age: 27 },
        { name: "Denis", age: 36 },
        { name: "Anna", age: 70 },
        { name: "Julia", age: 68 },
        { name: "Sergey", age: 56 },
        { name: "Svetlana", age: 35 }
    ];

    const words = ['avocado', 'apricot', 'cherry', 'date', 'durian'];
    const grouped = _.groupBy(words, word => word.charAt(0));

    console.log(grouped);
    
})();