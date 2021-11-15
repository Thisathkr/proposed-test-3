let Roll = 0
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    Roll = randint(0, 5)
    Roll += 1
    basic.showNumber(Roll)
    basic.pause(2000)
})
