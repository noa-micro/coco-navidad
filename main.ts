input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Snake)
    music.playMelody("B D G E A F C5 C ", 130)
    basic.showIcon(IconNames.Happy)
    music.playMelody("C F G E A C5 G D ", 130)
    basic.showLeds(`
        . # # # .
        . . # . .
        . # # # .
        . # # # .
        . . # . .
        `)
    music.playMelody("E F D B G C B C5 ", 130)
    music.playMelody("E F D B G C B C5 ", 130)
    music.playMelody("E F D B G C B C5 ", 130)
})
basic.forever(function () {
	
})
