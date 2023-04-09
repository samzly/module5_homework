let someNumber = prompt('Insert number', '');
someNumber = + someNumber;
if (isNaN(someNumber) || typeof someNumber != 'number') {
    console.log('Упс, кажется, вы ошиблись');
} else if (someNumber % 2 === 1) {
    console.log('Ваше число нечётное');
} else {
    console.log('Ваше число чётное');
}