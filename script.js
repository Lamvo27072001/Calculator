let display = document.getElementById('operand')
let result = document.getElementById("result")
let numbers = document.getElementsByClassName("number")
let operators = document.getElementsByClassName("operator")
let clear = document.getElementById("clear")
let dots = document.getElementsByClassName("dot")
let del = document.getElementById("delete")
let equal = document.getElementById("equal")

for (let number of numbers) {
    number.addEventListener("click", () => {
        display.innerHTML += number.innerHTML
    })

}
for (let operate of operators) {
    operate.addEventListener("click", () => {
        display.innerHTML += operate.innerHTML

    })
}
clear.onclick = () => {
    display.innerHTML = ""
}

dots[0].onclick = () => {

    display.innerHTML += "."
}

// for (let dot of dots) {
//     dot.addEventListener("click", () => {
//         display.innerHTML += "."
//     })
// }


del.onclick = () => {
    display.innerHTML = display.innerHTML.slice(0, -1)

}

equal.onclick = () => {
    if (operate.innerHTML == "+") {
        result.innerHTML += numbers.innerHTML
    }
}