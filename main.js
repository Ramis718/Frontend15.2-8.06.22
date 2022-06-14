// function sayHello() {
//     console.log('hello')
// }
// sayHello()

// function getFllName(user, age) {
//     if(age < 18){
//         alert('Close')
//     }else{
//         alert(user.first_name + " " + user.last_name + " " + "Open")
//     }
// }
// const user = {
//     first_name: "roma",
//     last_name: "Aby"

// }

// const age = prompt('How old are you?')

// getFllName(user, age)


function numbers(number1, number2){
    if(number1 > number2){
        alert('первое больше')
    }else if(number1 < number2){
        alert('второй больше')
    }else {
        alert('они равны')
    }
}

const number = {
    number1: prompt('введите число'),
    number2: prompt('введите число')
} 
numbers(number.number1, number.number2)