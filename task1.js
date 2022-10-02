let num = +prompt('Введите число');

if (isNaN(num)) {
    console.log('Упс, кажется, вы ошиблись');
} else {
    if(num%2 == 0) {
        console.log('Число четное')
    } else {
        console.log('Число нечетное')
    }
}