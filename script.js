let display = document.getElementById('operand')
let numbers = document.getElementsByClassName("number")
let operators = document.getElementsByClassName("operator")
let clear = document.getElementById("clear")

for (let number of numbers) {
    number.addEventListener("click", () => {
        console.log(number.innerHTML);
        display.innerHTML = number.innerHTML
    })

}
for (let operate of operators) {
    operate.addEventListener("click", () => {
        console.log(operate.innerHTML)
        display.innerHTML = operate.innerHTML

    })
}
clear.onclick = () => {
    display.innerHTML = ""
}