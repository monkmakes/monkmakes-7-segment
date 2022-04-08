//% deprecated
namespace sevenSegment {
}
namespace servers {
    function start() {
        if (jacdac.isSimulator()) {

        }
        if (jacdac.checkProxy()) jacdac.proxyFinalize()
    }
    start()
}