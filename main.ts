input.onButtonPressed(Button.A, function () {
    RingbitCar.forward()
    music.play(music.stringPlayable("C D E D E F G E ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    RingbitCar.brake()
    radio.setGroup(100)
    RingbitCar.brake()
})
input.onButtonPressed(Button.B, function () {
    RingbitCar.back()
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.LoopingInBackground)
})
