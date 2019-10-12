input.onButtonPressed(Button.B, function () {  //B button is sleeping
    led.enable(false)
})
input.onButtonPressed(Button.A, function () {  //A button to start
    led.enable(true)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Screen Saver")
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # # # .
        # # . # #
        . . # . .
        . . . . .
        `)
})
let flip = 0
let acceleration = 11
basic.forever(function () {
    for (let index = 0; index < 6; index++) {
        for (let bRight = 0; bRight <= 4; bRight++) {
            flip = 4 - bRight
            for (let center = 0; center <= 4; center++) {
                led.plot(bRight, flip)
                basic.pause(acceleration)
                led.plot(flip, bRight)
                basic.pause(acceleration)
                led.plot(flip - center, flip)
                basic.pause(acceleration)
                led.plot(flip, flip - center)
                basic.pause(acceleration)
            }
        }
        for (let bRight2 = 0; bRight2 <= 4; bRight2++) {
            flip = 4 - bRight2
            for (let center2 = 0; center2 <= 4; center2++) {
                led.unplot(bRight2, flip)
                basic.pause(acceleration)
                led.unplot(flip, bRight2)
                basic.pause(acceleration)
                led.unplot(flip - center2, flip)
                basic.pause(acceleration)
                led.unplot(flip, flip - center2)
                basic.pause(acceleration)
            }
        }
    }
    led.enable(false)
})
