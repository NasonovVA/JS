console.log("helo world")
console.log("10/0")
//alert('vj;yj')
let message=1
message=2+3+2
const daysinweek=message
console.log(daysinweek)
console.log('message=message+2;')
let admin = 'JON'
let name1 = 'JON'
console.log(name1)
const BIRTHDAY = '12'
const age = 13

let s1 = 3
let s2 = 4

console.log('4>3,4>3')
console



//practice_1_1


//allert(km*0.621371)
//allert('1+1=${1+1}
//1-1=${1-1}')

const hours = +(prompt('часы')as string)
const minutes = +(prompt('минуты') as string)
const timeInMinutes = hours*60 + minutes
const timeInMinutesToNextDay = 24 * 60 - timeInMinutes
const timeInMinutesDay = 12
const hoursToNextDay = 15



const number = 278
console.log(278 - (278%10)/10%10)

if (2015 == 2015) console.log('вы правы')
const secret = "0123"
const pass = prompt(' пароль')
if (secret == pass) {
    console.log('вы вошли')
} else if (secret == pass){
    console.log('вы вошли как админ')
} else { 
    console.log('вы не вошли')
}

//if ( условие) {
// блок кода , которые выпонится если условия истинны
//}

const age1 = 20
let accessAlowed
if (age >18) {let age2 = 2 }

// Получаем элементы
const input1 = document.querySelector('#task1 input')
const button1 = document.querySelector('#task1 button')
const output1 = document.querySelector('#task1 p')

// По нажатию на кнопку выводим результат
button1?.addEventListener('click', function() {
    // @ts-ignore
    output1.innerText = (+input1.valut - +input1.valut % 10) /10 % 10
})

let currentUser = null
let defaultUser = "John"

let name2 = currentUser || defaultUser || "unnamed";

console.log(name1); // выбирается "John" - первое истинное значение

console.log
console.log("0 && 1 && ")
 console.log(0 || true || undefined)
 // Если первый операнд истинный,
// И возвращает второй:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// Если первый операнд ложный,
// И возвращает его. Второй операнд игнорируется
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0

let userName = prompt("Кто там?", '');

if (userName === 'Админ') {

  let pass = prompt('Пароль?', '');

  if (pass === 'Я главный') {
    alert( 'Здравствуйте!' );
  } else if (pass === '' || pass === null) {
    alert( 'Отменено' );
  } else {
    alert( 'Неверный пароль' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}

// идентичные  записи
// result = a ?? b
//result = (a !== null && a !== underfined) ? a : b

console.log('' ?? 0 ?? 'defalt')
console.log('' || 0 || 'default')

let firstName = null;
let lastName = null;
let nickName = "Суперкодер";

// показывает первое значение, которое определено:
alert(firstName ?? lastName ?? nickName ?? "Аноним"); // Суперкодер

//Важное различие между ними заключается в том, что:
//|| возвращает первое истинное значение.
//?? возвращает первое определённое значение

//Оператор нулевого слияния ?? — это быстрый способ выбрать первое «определённое» значение из списка.

//Используется для присвоения переменным значений по умолчанию:

// будет height=100, если переменная height равна null или undefined
//height = height ?? 100;
//Оператор ?? имеет очень низкий приоритет, лишь немного выше, чем у ? и =, поэтому при использовании его в выражении, скорее всего, потребуются скобки.

// Запрещено использовать вместе с || или && без явно указанного приоритета, то есть без скобок

let n1 = 5
let i = 1
// while (условия выхода) { выполняется пока условие истено
// тело цикла
// }
while (i<=n1) {
    console.log(i)
    i++
}
// бесконечный цикл с условием
while (true) {
    if (i>500) break
    i++
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

alert('количество 0=${1}')





console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)

// 1. инициация итератора
// 2. проверка условий
// после проверки условий, если оно истинно выполняется тело цикла. Если ложно



//Выполнить начало
// (Если условие == true → Выполнить тело, Выполнить шаг)
//(Если условие == true → Выполнить тело, Выполнить шаг)
//(Если условие == true → Выполнить тело, Выполнить шаг)
//...



for( i=1;i<n1; i++) {
  // тело цикла
}



for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Значение на координатах (${i},${j})`, '');

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

const maxNumber = +(prompt('до какого числа искать')as string)
console.log(`простые числа до ${maxNumber}`)
for (let i=2; i<maxNumber;i++) {
  let isSimpl=true
  for (let j=2; j<i; j++) {
    if (i%j==0){
      isSimpl=false
      break
    }
  }
  if (isSimpl) console.log(i)
}


// const x = 0
// switch (x) {
//   case 1:
//     console.log('пн')
//     break
//   case 2:
//     console.log('вт')
//     break
//   case 3:
//     console.log('ср') 
//     break
//   case 4:
//     console.log('чт')
//     break
//   case 5:
//     console.log('пт')
//     break
//   case 6:
//     console.log('суб')
//     break
//   case 7:
//     console.log('воск')
//     break
// default:
// }


class HtmlElement{
  tag: string
  single: boolean
  text:string
  attrs:string[] = []
  styles:string[] = []
  elements:HtmlElement[] = []
  constructor(tag:string,single:boolean,text:string){
    this.tag = tag
    this.single = single
    this.text = text
  }
  setAtr(atr:string) {
    this.attrs.push(atr)
  }
  setStyle(style:string) {
    this.styles.unshift(style)
  }
  appendElement(element:HtmlElement) {
    this.elements.push(element)
  }
  setElement(element:HtmlElement) {
    this.elements.push(element)
  }
  getHtml() {
    if (this. single) {
      return`<${this.tag} ${this.attrs.join(' ')} value="${this.text}" >`
    } else {
      const begin = `<${this.tag} ${this.attrs.join(' ')}>`
      const end = `</${this.tag}>`
      return begin + this.elements.map(el=>el.getHtml()).join('')+ end

    }
  }
}

const imgElement = new HtmlElement('img',true,'')
const pElement = new HtmlElement('p',false,'текст')
imgElement.setAtr('id="img"')
imgElement.setStyle('color:red')
imgElement.setStyle('padding:10px')
imgElement.setAtr(`style="${imgElement.styles.join(';')}"`)
console.log(imgElement.getHtml())
pElement.appendElement(imgElement)
console.log(pElement.getHtml())

imgElement.setAtr('style="width:100%"')
imgElement.setAtr




// let num = prompt ('3 digit number' )
// let same = false
// for (let n of num){
//   let temp = num
//   temp = temp?.replaseAll(n,'')
//   same = temp?.length < num?.length - 1
//   if (same)
// }



// return`<${this.tag} ${this.attrs.join(' ')}>${this.text}</${this.tag}>`















