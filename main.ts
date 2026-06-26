BitBuggy.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.forever(function () {
    basic.pause(1000)
    BitBuggy.forward()
    basic.pause(100)
    RingbitCar.turnright()
})
