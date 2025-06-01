let kids_holidays: number[] = []
let directions: string[] = []
input.onPinPressed(TouchPin.P0, function () {
    music.play(music.stringPlayable("C C D C D C D C ", 120), music.PlaybackMode.InBackground)
    kids_holidays = [
    randint(0, 35),
    randint(0, 35),
    randint(0, 5432),
    randint(0, 435),
    randint(0, 344)
    ]
    for (let index = 0; index <= 4; index++) {
        basic.showString("" + (kids_holidays[index]))
    }
})
input.onPinPressed(TouchPin.P1, function () {
    directions = [
    "East",
    "North",
    "South",
    "West",
    ""
    ]
    for (let index = 0; index <= 4; index++) {
        basic.showString("" + (directions[index]))
    }
})
