
// let result = "";
// for (let i = 1; i <= 100; i++){
//     for (let j = 0; j < i; j++){
//         result += "*"
//     }
//     result += '\n';
// }
// console.log(result)



// function getNumbers(number1, number2){
//     if(number1 < number2){
//         alert('Первое меньше')
//     }else if (number2 < number1){
//         alert("Второй меньше") 
//     }else{
//         alert("одинаковые")
//     }
// }

// const number1 = prompt('введите первое число')
// const number2 = prompt('введите второе число')

// getNumbers(number1,number2)







// function coutChar(arguments) {
//   console.log(arguments.length)
// }
// const argument = [1, 3, 5,5, 77, 77, 88,10]

// coutChar(argument)






let ElementEkran = document.querySelector('.ekran');
let ElementMinus = document.querySelector('.minus');
let ElementPlus = document.querySelector('.plus');

let count = 0;

ontimeupdate();

ElementPlus.addEventListener("click", () => {
    count++;
    ontimeupdate();
});

ElementMinus.addEventListener("click", () => {
    count--;
    ontimeupdate();
});

function ontimeupdate() {
    ElementEkran.innerHTML = count;
};