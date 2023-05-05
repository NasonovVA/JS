var _a, _b, _c, _d;
console.log("helo world");
console.log("10/0");
//alert('vj;yj')
var message = 1;
message = 2 + 3 + 2;
var daysinweek = message;
console.log(daysinweek);
console.log('message=message+2;');
var admin = 'JON';
var name1 = 'JON';
console.log(name1);
var BIRTHDAY = '12';
var age = 13;
var s1 = 3;
var s2 = 4;
console.log('4>3,4>3');
console;
//practice_1_1
//allert(km*0.621371)
//allert('1+1=${1+1}
//1-1=${1-1}')
var hours = +prompt('часы');
var minutes = +prompt('минуты');
var timeInMinutes = hours * 60 + minutes;
var timeInMinutesToNextDay = 24 * 60 - timeInMinutes;
var timeInMinutesDay = 12;
var hoursToNextDay = 15;
var number = 278;
console.log(278 - (278 % 10) / 10 % 10);
if (2015 == 2015)
    console.log('вы правы');
var secret = "0123";
var pass = prompt(' пароль');
if (secret == pass) {
    console.log('вы вошли');
}
else if (secret == pass) {
    console.log('вы вошли как админ');
}
else {
    console.log('вы не вошли');
}
//if ( условие) {
// блок кода , которые выпонится если условия истинны
//}
var age1 = 20;
var accessAlowed;
if (age > 18) {
    var age2 = 2;
}
// Получаем элементы
var input1 = document.querySelector('#task1 input');
var button1 = document.querySelector('#task1 button');
var output1 = document.querySelector('#task1 p');
// По нажатию на кнопку выводим результат
button1 === null || button1 === void 0 ? void 0 : button1.addEventListener('click', function () {
    // @ts-ignore
    output1.innerText = (+input1.valut - +input1.valut % 10) / 10 % 10;
});
var currentUser = null;
var defaultUser = "John";
var name2 = currentUser || defaultUser || "unnamed";
console.log(name1); // выбирается "John" - первое истинное значение
console.log;
console.log("0 && 1 && ");
console.log(0 || true || undefined);
// Если первый операнд истинный,
// И возвращает второй:
alert(1 && 0); // 0
alert(1 && 5); // 5
// Если первый операнд ложный,
// И возвращает его. Второй операнд игнорируется
alert(null && 5); // null
alert(0 && "no matter what"); // 0
var userName = prompt("Кто там?", '');
if (userName === 'Админ') {
    var pass_1 = prompt('Пароль?', '');
    if (pass_1 === 'Я главный') {
        alert('Здравствуйте!');
    }
    else if (pass_1 === '' || pass_1 === null) {
        alert('Отменено');
    }
    else {
        alert('Неверный пароль');
    }
}
else if (userName === '' || userName === null) {
    alert('Отменено');
}
else {
    alert("Я вас не знаю");
}
// идентичные  записи
// result = a ?? b
//result = (a !== null && a !== underfined) ? a : b
console.log((_b = (_a = '') !== null && _a !== void 0 ? _a : 0) !== null && _b !== void 0 ? _b : 'defalt');
console.log('' || 0 || 'default');
var firstName = null;
var lastName = null;
var nickName = "Суперкодер";
// показывает первое значение, которое определено:
alert((_d = (_c = firstName !== null && firstName !== void 0 ? firstName : lastName) !== null && _c !== void 0 ? _c : nickName) !== null && _d !== void 0 ? _d : "Аноним"); // Суперкодер
//Важное различие между ними заключается в том, что:
//|| возвращает первое истинное значение.
//?? возвращает первое определённое значение
//Оператор нулевого слияния ?? — это быстрый способ выбрать первое «определённое» значение из списка.
//Используется для присвоения переменным значений по умолчанию:
// будет height=100, если переменная height равна null или undefined
//height = height ?? 100;
//Оператор ?? имеет очень низкий приоритет, лишь немного выше, чем у ? и =, поэтому при использовании его в выражении, скорее всего, потребуются скобки.
// Запрещено использовать вместе с || или && без явно указанного приоритета, то есть без скобок
var n1 = 5;
var i = 1;
// while (условия выхода) { выполняется пока условие истено
// тело цикла
// }
while (i <= n1) {
    console.log(i);
    i++;
}
// бесконечный цикл с условием
while (true) {
    if (i > 500)
        break;
    i++;
}
// do while - цикл с постусловием: сначало выполняем  тело цикла, потом проверяем условие
// do {
// тело цикла
//} while (условие) тело цикла выполняется пока условие истинно, иначе управление переходит на следующую строку после цикла (цикл заканчивается)
//let number1
//do {
//@ts-ignore
//  nimber1 = +prompt('введите число больше 0')
//console.log(number1)
//} while (!number1 || number1)
alert('количество 0=${1}');
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);
// 1. инициация итератора
// 2. проверка условий
// после проверки условий, если оно истинно выполняется тело цикла. Если ложно
//Выполнить начало
// (Если условие == true → Выполнить тело, Выполнить шаг)
//(Если условие == true → Выполнить тело, Выполнить шаг)
//(Если условие == true → Выполнить тело, Выполнить шаг)
//...
for (i = 1; i < n1; i++) {
    // тело цикла
}
for (var i_1 = 0; i_1 < 3; i_1++) {
    for (var j = 0; j < 3; j++) {
        var input = prompt("\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043D\u0430 \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u0430\u0445 (" + i_1 + "," + j + ")", '');
        // Что если мы захотим перейти к Готово (ниже) прямо отсюда?
    }
}
alert('Готово!');
//вариант с меткой
//outer: for (let i = 0; i < 3; i++) {
// for (let j = 0; j < 3; j++) {
// let input = prompt(`Значение на координатах (${i},${j})`, '');
// если пустая строка или Отмена, то выйти из обоих циклов
//  if (!input) break outer; // (*)
// сделать что-нибудь со значениями...
// }
//}
//alert('Готово!');
//вариант с флагом
//let i = 0; i < 3; i++) {
// for (let j = 0; j < 3; j++) {
//let input = prompt(`Значение на координатах (${i},${j})`, '');
// если пустая строка или Отмена, то выйти из обоих циклов
//if (!input) break outer; // (*)
// сделать что-нибудь со значениями...
// }
//}
alert('Готово!');
//while – Проверяет условие перед каждой итерацией.
//do..while – Проверяет условие после каждой итерации.
//for (;;) – Проверяет условие перед каждой итерацией, есть возможность задать дополнительные настройки.
//for (let i=2; i<11; i+=2) {
//  alert(i)
//}
//</script>
// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
// Напишите код, который выводит все простые числа из интервала от 2 до n.
// Для n = 10 результат должен быть 2,3,5,7.
// P.S. Код также должен легко модифицироваться для любых других интервалов
var maxNumber = +prompt('до какого числа искать');
console.log("\u043F\u0440\u043E\u0441\u0442\u044B\u0435 \u0447\u0438\u0441\u043B\u0430 \u0434\u043E " + maxNumber);
for (var i_2 = 2; i_2 < maxNumber; i_2++) {
    var isSimpl = true;
    for (var j = 2; j < i_2; j++) {
        if (i_2 % j == 0) {
            isSimpl = false;
            break;
        }
    }
    if (isSimpl)
        console.log(i_2);
}
var x = 0;
switch (x) {
    case 1:
        console.log('пн');
        break;
    case 2:
        console.log('вт');
        break;
    case 3:
        console.log('ср');
        break;
    case 4:
        console.log('чт');
        break;
    case 5:
        console.log('пт');
        break;
    case 6:
        console.log('суб');
        break;
    case 7:
        console.log('воск');
        break;
    default:
}
