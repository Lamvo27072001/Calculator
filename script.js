let display = document.getElementById('operand')
let previous = document.getElementById("previous")
let numbers = document.getElementsByClassName("number")
let operators = document.getElementsByClassName("operator")
let clear = document.getElementById("clear")
let dots = document.getElementsByClassName("dot")
let del = document.getElementById("delete")
let equal = document.getElementById("equal")
let currentOperator
let first = ""
let second = ""


for (let number of numbers) {
    number.addEventListener("click", () => {

        if (currentOperator) {
            if (second == "") {
                display.innerHTML = number.innerHTML
            } else {
                display.innerHTML += number.innerHTML
            }
            second += number.innerHTML
        } else {
            first += number.innerHTML
            console.log(first)
            display.innerHTML += number.innerHTML
        }

        setColor(null)
    })

}


for (let operate of operators) {
    operate.addEventListener("click", (e) => {

        currentOperator = e.target
        setColor(currentOperator)

    })
}

function setColor(currentOperators) {
    for (let operate1 of operators) {
        if (currentOperators === operate1) {
            operate1.style.backgroundColor = "white"
        } else {
            operate1.style.backgroundColor = "rgba(255, 255, 255, .75)"
        }
    }
}

clear.onclick = () => {
    display.innerHTML = ""
    second = ""
    first = ""
    currentOperator = null
}

dots[0].onclick = () => {

    display.innerHTML += "."
    if (currentOperator) {

        second += "."
    } else {
        first += "."

    }

}

// for (let dot of dots) {
//     dot.addEventListener("click", () => {
//         display.innerHTML += "."
//     })
// }

del.onclick = () => {
    display.innerHTML = display.innerHTML.slice(0, -1)

    if (currentOperator) {

        second = second.slice(0, -1)
    } else {
        first = first.slice(0, -1)

    }
}

equal.onclick = () => {
    switch (currentOperator.innerHTML) {
        case '+':
            display.innerHTML = first * 1 + second * 1
            console.log(first, second)
            break;
        case '-':
            display.innerHTML = first * 1 - second * 1
            break;
        case '*':
            display.innerHTML = (first * 1) * (second * 1)
            break
        case '÷':
            display.innerHTML = (first * 1) / (second * 1)
            break
    }
    second = ""
    first = ""
    currentOperator = null
}