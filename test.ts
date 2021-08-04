input.onButtonPressed(Button.A, function () {
    x = 0
})
let x = 0
sevenSegment.startSevenSegPin0()
basic.forever(function () {
    x += 1
    sevenSegment.writeNumber(x)
    basic.pause(1000)
})