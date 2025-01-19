// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(num) {
  if(num % 2 === 0) {
    console.log(true);
    
    return true
  } else {
    console.log(false);
    return false
  }
}
isEven(2)
isEven(1)


// const isEven = (num) => num % 2 === 0


// isEven(5)
// isEven(12)
// isEven(98)