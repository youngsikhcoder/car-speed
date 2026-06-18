def on_gesture_shake():
    basic.show_number(5)
    basic.show_icon(IconNames.DIAMOND)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
