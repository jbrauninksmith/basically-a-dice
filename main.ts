let teststring = "hello world"
basic.forever(function () {
	
})
loops.everyInterval(5000, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(50)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(50)
    basic.showIcon(IconNames.Diamond)
    basic.pause(50)
    basic.showNumber(randint(1, 6))
})
