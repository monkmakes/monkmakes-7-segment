# MonkMakes 7-Segment for micro:bit

This extension provides blocks to interface with the [MonkMakes 7-segment for micro:bit](https://monkmakes.com/mb_7_seg.html).

The 7-segment display is:
  * Easy to connect (just needs one micro:bit pin plus power)
  * Powered directly from micro:bit pins
  * Useful for displaying readings from sensors, making clocks etc.

## Connecting Your micro:bit

Connect the power pins GND and 3V between the micro:bit and the 7-segment for micro:bit. Connect the Rx (marked as an arrow on newer versions) pin of the 7-segment for micro:bit to P0. Note you can also use other micro:bit pins to control the display.

![](/images/connecting.png/ "Connecting 7-segment display to micro:bit")

## Counter Example

Use the custom blocks provided by this extension to make your 7-segment for micro:bit display count up each second. The count will restart when button A is pressed. 

You can copy the code from below or view the project (blocks and JavaScript view) [here](https://makecode.microbit.org/_Kj362WFJyYoc).

```JavaScript
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
```


## Thermometer Example

You can display the temperature of the micro:bit's CPU using [this example](https://makecode.microbit.org/_fX669RbwjTfU).

```JavaScript
let text = ""
sevenSegment.startSevenSegPin0()
basic.forever(function () {
    text = "" + input.temperature() + " C"
    sevenSegment.writeString(text)
    basic.pause(500)
})
```

## Scrolling Text Example

7-segment displays are not great for displaying text but [this example](https://makecode.microbit.org/_C6WEpJhi0JCc) shows how you can scroll text across the display.

```JavaScript
input.onButtonPressed(Button.A, function () {
    sevenSegment.scrollString("Please dont press this button again", 200)
    basic.pause(500)
    sevenSegment.clear()
})
sevenSegment.startSevenSegPin0()
basic.pause(100)
sevenSegment.clear()
```

The 100 millisecond pause after the *start seven seg pin0* block is needed to give the serial port time to start working before you start sending messages. If you don't include it, you may find spurious segments display.

The second parameter to scroll string sets the display in milliseconds between each character being displayed.

## Clock Example

[This example](https://makecode.microbit.org/_3U18cPCsW26X) shows how you can make a traditional LED clock displaying the hours and minutes in 24 hour format, with a blinking decimal point between the hour and minutes part of the display. Pressing button A will advance the hours by 1 and button B the minutes.

```JavaScript
function inc_time () {
    sec += 1
    if (sec == 60) {
        sec = 0
        min += 1
        if (min > 59) {
            min = 0
            hour += 1
            if (hour > 23) {
                hour = 0
            }
        }
    }
}
function show_time (dot: string) {
    hour_string = convertToText(hour)
    min_string = convertToText(min)
    if (min < 10) {
        min_string = "0" + min_string
    }
    text = "" + hour_string + dot + min_string
    sevenSegment.writeString(text)
}
input.onButtonPressed(Button.A, function () {
    hour += 1
    if (hour > 23) {
        hour = 0
    }
})
input.onButtonPressed(Button.B, function () {
    min += 1
    if (min > 59) {
        min = 0
    }
})
let dot = ""
let now = 0
let text = ""
let min_string = ""
let hour_string = ""
let sec = 0
let min = 0
let hour = 0
sevenSegment.startSevenSegPin0()
hour = 1
min = 0
sec = 0
let last_tick = input.runningTime()
basic.forever(function () {
    now = input.runningTime()
    if (now >= last_tick + 1000) {
        last_tick = now
        inc_time()
        dot = ""
        if (sec % 2 == 0) {
            dot = "."
        }
        show_time(dot)
    }
})
```

## License

MIT.
