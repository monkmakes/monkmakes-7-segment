
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */


/**
 * MonkMakes 7-Segment for micro:bit blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace sevenSegment {
    /**
     * Start communication with the 7-segment display using Pin0
     * You will probably want to put this in an on start block
     */
    //% block
    export function startSevenSegPin0(): void {
        serial.redirect(
            SerialPin.P0,
            SerialPin.P16,
            BaudRate.BaudRate9600
        )
    }

    /**
     * Start communication with the 7-segment display using Pin1
     * You will probably want to put this in an on start block
     */
    //% block
    export function startSevenSegPin1(): void {
        serial.redirect(
            SerialPin.P1,
            SerialPin.P16,
            BaudRate.BaudRate9600
        )
    }

    /**
     * Start communication with the 7-segment display using Pin2
     * You will probably want to put this in an on start block
     */
    //% block
    export function startSevenSegPin2(): void {
        serial.redirect(
            SerialPin.P2,
            SerialPin.P16,
            BaudRate.BaudRate9600
        )
    }


    /**
     * Send a string to the display.
     * Only the last 4 characters will be displayed
     */
    //% block
    export function writeString(value: string): void {
        serial.writeString(",    ")
        serial.writeString(value)
        serial.writeString(",")
        basic.pause(75)
    }

    /**
     * Send a string to the display.
     * The string will scroll slowly across the screen
     */
    //% block
    export function scrollString(value: string, delay: number): void {
        serial.writeString("/") // put into non-buffered mode
        for (let i = 0; i < value.length; i++) {
            serial.writeString(value.charAt(i))
            basic.pause(delay)
        }
    }

    /**
     * Send a number to the display.
     * Only the last 4 digits will be displayed
     * You can use a single decimal point in the number
     */
    //% block
    export function writeNumber(value: number): void {
        serial.writeString(",    ")
        serial.writeNumber(value)
        serial.writeString(",")
        basic.pause(75)
    }


    /**
     * Clear the display.
     */
    //% block
    export function clear(): void {
        serial.writeString("/")
    }
}
