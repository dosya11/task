/**********1********/
    function showAges (age,year)
{
    age = Number(prompt('Введите свой год рождения'));
    year = Number(prompt('Введите текущий год'));
    return  (['Вам ',age - year,' лет'].join(''));
}
console.log(showAges());


/**********2********/

    function showTime(text) {
    let counter = 0;
    const intervalId = setInterval(() => {
        console.log(text);
        counter += 1;
        if (counter === 5) {
            console.log('Done');
            clearInterval(intervalId);
        }
    }, 1000);
}
console.log(showTime('hello world'));



/**********cw 1********/




