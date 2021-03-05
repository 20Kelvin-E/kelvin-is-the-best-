input.onButtonPressed(Button.A, function () {
    basic.showString("Hello!")
    basic.showString("How are you")
    for (let index = 0; index < 1; index++) {
        music.playMelody("C5 B A G F E D - ", 500)
        basic.showIcon(IconNames.Heart)
        led.stopAnimation()
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            `)
    }
    basic.showString("He is the best")
    basic.showIcon(IconNames.Heart)
})
