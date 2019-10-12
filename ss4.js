input.onButtonPressed(Button.B, function () { //B to stop
    led.enable(false)
})
input.onButtonPressed(Button.A, function () {  // A to start
    led.enable(true)
input.onGesture(Gesture.LogoUp, function () {
    screenNumber = 2
})
input.onGesture(Gesture.TiltRight, function () {
    screenNumber = 3
})
input.onGesture(Gesture.TiltLeft, function () {
    screenNumber = 4
})
input.onGesture(Gesture.LogoDown, function () {
    screenNumber = 5
})
function randomTog() {
    led.toggle(Math.randomRange(0, 4), Math.randomRange(0, 4))
    basic.pause(30)
}
function rain() {
    basic.clearScreen()
    xCoord = Math.randomRange(0, 4)
    led.toggle(xCoord, 0)
    basic.pause(100)
    led.toggle(xCoord, 0)
    led.toggle(xCoord, 2)
    basic.pause(100)
    led.toggle(xCoord, 2)
    led.toggle(xCoord, 4)
    basic.pause(100)
    led.toggle(xCoord, 4)
}
function spin() {
    led.toggle(xCoord, 0)
    led.toggle(xCoord - 1, 0)
    led.toggle(xCoord, 1)
    led.toggle(xCoord - 1, 1)
    led.toggle(4, yCoord)
    led.toggle(4, yCoord - 1)
    led.toggle(3, yCoord)
    led.toggle(3, yCoord - 1)
    led.toggle(4 - xCoord, 4)
    led.toggle(5 - xCoord, 4)
    led.toggle(4 - xCoord, 3)
    led.toggle(5 - xCoord, 3)
    led.toggle(0, 4 - yCoord)
    led.toggle(0, 5 - yCoord)
    led.toggle(1, 4 - yCoord)
    led.toggle(1, 5 - yCoord)
    xCoord += 1
    yCoord += 1
    basic.pause(100)
    if (xCoord == 6) {
        xCoord = 0
        yCoord = 0
        led.toggle(2, 2)
    }
}
function snake() {
    if (yCoord == 0 || yCoord == 2 || yCoord == 4) {
        for (let i = 0; i <= 5 - 1; i++) {
            led.toggle(i, yCoord)
            led.toggle(4 - i, yCoord - 1)
            basic.pause(100)
            xCoord = i
        }
        yCoord += 1
    }
    if (yCoord == 1 || yCoord == 3 || yCoord == 5) {
        for (let j = 4; j > -1; j--) {
            led.toggle(j, yCoord)
            led.toggle(4 - j, yCoord - 1)
            basic.pause(100)
            xCoord = j
        }
        yCoord += 1
    } else {
        yCoord = 0
        basic.clearScreen()
        basic.pause(50)
    }
}
function spectrogram() {
    basic.clearScreen()
    for (let k = 4; k > Math.randomRange(-1, 3); k--) {
        led.toggle(4, k)
        led.toggle(3, k)
        led.toggle(2, k)
        led.toggle(1, k)
        led.toggle(0, k)
        basic.pause(100)
    }
}
// wakeup
input.onButtonPressed(Button.B, function () {
    screenNumber = 0
    isAsleep = false
    basic.clearScreen()
    basic.showString("Awake")
    led.plotAll()
})
// go to sleep
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    isAsleep = true
    while (isAsleep) {
        // screensaver 1
        if (screenNumber == 1) {
            basic.clearScreen()
            while (screenNumber == 1) {
                randomTog()
            }
        }
        // screensaver 2
        if (screenNumber == 2) {
            basic.clearScreen()
            while (screenNumber == 2) {
                rain()
            }
        }
        // screensaver 3
        if (screenNumber == 3) {
            basic.clearScreen()
            xCoord = 0
            yCoord = 0
            while (screenNumber == 3) {
                spin()
            }
        }
        // screensaver 4
        if (screenNumber == 4) {
            basic.clearScreen()
            xCoord = 0
            yCoord = 0
            while (screenNumber == 4) {
                snake()
            }
        }
        // screensaver 5
        if (screenNumber == 5) {
            basic.clearScreen()
            while (screenNumber == 5) {
                spectrogram()
            }
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    screenNumber = 1
})
let isAsleep = false
let screenNumber = 0
let yCoord = 0
let xCoord = 0
basic.showString("BAO")
led.plotAll()
