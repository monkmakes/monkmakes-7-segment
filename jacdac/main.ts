//% deprecated
namespace sevenSegment {
}


namespace modules {
    /**
     * Client for the MonkMakes 7-segment accesory
     */
    //% fixedInstance whenUsed block="MonkMakes 7 segment"
    export const monkMakes7Segment = new SevenSegmentDisplayClient("MonkMakes 7 segment?dev=self&digits=4&decimal_point=1&double_dots=0")
}

namespace servers {
    class SevenSegmentServer extends jacdac.Server {
        digits: Buffer = control.createBuffer(0)
        constructor() {
            super(jacdac.SRV_SEVEN_SEGMENT_DISPLAY, { statusCode: jacdac.SystemStatusCodes.Initializing })
            control.inBackground(() => {
                sevenSegment.startSevenSegPin0()
                pause(200)
                this.setStatusCode(jacdac.SystemStatusCodes.Ready)
            })
        }

        handlePacket(pkt: jacdac.JDPacket) {
            // constants
            this.handleRegFormat(pkt,
                jacdac.SevenSegmentDisplayReg.DigitCount,
                jacdac.SevenSegmentDisplayRegPack.DigitCount,
                [4])
            this.handleRegBool(pkt,
                jacdac.SevenSegmentDisplayReg.DecimalPoint,
                true)
            this.handleRegBool(pkt,
                jacdac.SevenSegmentDisplayReg.DoubleDots,
                false)

            this.digits = this.handleRegBuffer(pkt, jacdac.SevenSegmentDisplayReg.Digits, this.digits)

            // convert back to characters
            const digitBits = [
                0b00111111, // 0
                0b00000110, // 1
                0b01011011, // 2
                0b01001111, // 3
                0b01100110, // 4
                0b01101101, // 5
                0b01111101, // 6
                0b00000111, // 7
                0b01111111, // 8
                0b01101111, // 9
            ]
            let text = ""
            const digits = this.digits
            for (let i = 0; i < digits.length; ++i) {
                let d = digits[i]
                let dot = false
                if (d & 0b10000000) {
                    dot = true
                    d &= ~0b10000000
                }
                let k = digitBits.indexOf(d)
                if (k > -1)
                    text += k.toString()
                else if (k == 0b01000000) // -
                    text += "-"
                if (dot)
                    text += "."
            }
            sevenSegment.writeString(text)
        }
    }
    function start() {
        jacdac.productIdentifier = 0x38ef2074
        jacdac.deviceDescription = "MonkMakes 7-Segment"
        jacdac.startSelfServers(() => [
            new SevenSegmentServer()
        ])
    }
    start()
}
