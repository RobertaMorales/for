for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
}
basic.forever(function () {
    for (let count = 0; count <= 4; count++) {
        count = 0
        basic.showNumber(count)
    }
})
