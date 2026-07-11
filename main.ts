let Start: kitronik_halo_hd.ZIPHaloHd = null
let strip = 0
let Vacuum = 0
radio.onReceivedNumber(function (receivedNumber) {
    music.play(music.stringPlayable("C5 G C G E G F C ", 120), music.PlaybackMode.UntilDone)
    pins.analogSetPeriod(AnalogPin.P3, 200)
})
basic.forever(function () {
    datalogger.includeTimestamp(FlashLogTimeStampFormat.Milliseconds)
    RingbitCar.init_wheel(AnalogPin.P16, AnalogPin.P0)
    Start = kitronik_halo_hd.createZIPHaloDisplay(43)
})
basic.forever(function () {
    basic.showString("Hello!")
    strip = 34
    servos.P0.setStopOnNeutral(true)
    Vacuum = 54
})
