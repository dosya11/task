//  #2 На старте вы получаете массив. Необходимо написать функцию, которая будет
// возвращать массив удвоенных значений исходного массива.
//     Пример кода:
//     example([1, 2, 3]) => [2, 4, 6]
// example([4, 1, 1, 1, 4]) => [8, 2, 2, 2, 8]
// example([2, 2, 2, 2, 2, 2]) => [4, 4, 4, 4, 4, 4]

  let  array = [2, 2, 2, 2, 2, 2]
  let x2 = array.map(currentValue => currentValue*2);
    console.log(x2);


// 1) Напишите функцию getName(), которая при вызове будет принимать переменную
// name (например, «Василий») и выводить строку (в нашем случае «Привет, Василий»).
// В случае отсутствующего параметра выводить «Привет, гость»


const getName = (name) => (name ? 'Hello' + name : 'Hello, my friend!');
console.log(getName('Rusbek'));
