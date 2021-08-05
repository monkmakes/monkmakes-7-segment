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

You can copy the blocks from the below image or view the project (blocks and javascript view) [here](https://makecode.microbit.org/_Kj362WFJyYoc).

<img src="/images/counter_code.png" alt="Blocks for the counter example" width="300">

## Thermometer Example

You can display the temperature of the micro:bit's CPU using [this example](https://makecode.microbit.org/_fX669RbwjTfU).

<img src="/images/thermometer_code.png" alt="Blocks for the thermometer example" width="500">

## Scrolling Text Example

7-segment displays are not great for displaying text but [this example](https://makecode.microbit.org/_C6WEpJhi0JCc) shows how you can scroll text across the display.

<img src="/images/scrolling_code.png" alt="Blocks for the scrolling text example" width="500">

The 100 millisecond pause after the *start seven seg pin0* block is needed to give the serial port time to start working before you start sending messages. If you don't include it, you may find spurious segments display.

The second parameter to scroll string sets the display in milliseconds between each character being displayed.

## Clock Example

[This example](https://makecode.microbit.org/_3U18cPCsW26X) shows how you can make a traditional LED clock displaying the hours and minutes in 24 hour format, with a blinking decimal point between the hour and minutes part of the display. Pressing button A will advance the hours by 1 and button B the minutes.

<img src="/images/clock_code.png" alt="Blocks for the clock example" width="700">

## License

MIT.
