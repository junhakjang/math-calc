input.onButtonPressed(Button.A, function () {
    Number_1 += 1
    basic.showNumber(Number_1)
})
input.onButtonPressed(Button.AB, function () {
    Number_1 = Number_1
    A = Number_1 + 9
    basic.showNumber(A)
    basic.pause(1000)
    B = Number_1 - 9
    basic.showNumber(B)
    basic.pause(1000)
    C = 0 * 2
    basic.showNumber(C)
    basic.pause(1000)
    D = 0 / 3
    basic.showNumber(D)
    basic.pause(500)
    E = 0 % 4
    basic.showNumber(E)
    basic.pause(500)
    F = Math.sqrt(Number_1)
    basic.showNumber(F)
    basic.pause(1000)
    G = Math.round(3 / 4)
    basic.showNumber(G)
    basic.pause(500)
    H = Math.ceil(3 / 9)
    basic.showNumber(H)
    basic.pause(1000)
    I = Number_1 ** Number_1 * Number_1
    basic.showNumber(I)
    basic.pause(1000)
    J = randint(0, 100)
    basic.showNumber(J)
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    Number_1 += -1
    basic.showNumber(Number_1)
})
let J = 0
let I = 0
let H = 0
let G = 0
let F = 0
let E = 0
let D = 0
let C = 0
let B = 0
let A = 0
let Number_1 = 0
let Number_2 = 0
Number_1 = 0
let Switch = 0
basic.forever(function () {
	
})
