basic.forever(function () {
    RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
})
basic.forever(function () {
    RingbitCar.turnright()
})
basic.forever(function () {
    RingbitCar.forward()
})
basic.forever(function () {
    RingbitCar.turnleft()
})
basic.forever(function () {
    RingbitCar.back()
})
