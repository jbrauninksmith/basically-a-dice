input.onGesture(Gesture.Shake, function () {
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
let teststring = "hello world"
basic.forever(function () {
	
})
