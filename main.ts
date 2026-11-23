let cijfer = 0
input.onButtonPressed(Button.A, function () {
    cijfer += -1
})
input.onButtonPressed(Button.B, function () {
    cijfer += 1
})
basic.forever(function () {
    basic.showNumber(cijfer)
    cijfer = 0
})
