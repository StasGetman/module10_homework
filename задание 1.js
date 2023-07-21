let meaning = prompt ('Введите значение');
if (typeof +meaning !== "number") {
    alert('Упс, кажется, Вы ошиблись')
} else if (+meaning % 2 === 0) {
    alert('Число четное')
} else if (+meaning % 2 != 0) {
    alert('Число нечетное')   
} else (isNaN (+meaning)) != "number"; {
    alert ('Введенное значение не является числом')
}



if (Number.isNaN (meaning)) {
    alert('Введенное значение не является числом')
  } else if (typeof meaning !== 'number') {
    alert('Упс, кажется, Вы ошиблись')
  } else if (meaning % 2 === 0) {
    alert('Число четное')
  } else {
    alert('Число нечетное')
  }