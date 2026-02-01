input.onButtonPressed(Button.A, function () {
    basic.showString("" + convertToText(input.temperature()) + "°C")
    basic.showString("" + convertToText(input.temperature() * (9 / 5) + 32) + "°F")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + convertToText(Math.round(TempC)) + "°C")
    basic.showString("" + convertToText(Math.round(TempC * (9 / 5) + 32)) + "°F")
})
let TempK = 0
let Vout = 0
let adc = 0
let TempC = 0
let Rt = 0
let Vin = 3.3
let Ro = 10000
let A = 0.001129148
let B = 0.000234125
let C = 8.76741e-8
basic.forever(function () {
    adc = pins.analogReadPin(AnalogPin.P0)
    Vout = 3.3 / 1023 * adc
    Rt = Vout * Ro / (Vin - Vout)
    TempK = 1 / (A + B * Math.log(Rt) + C * Math.log(Rt) ** 3)
    TempC = TempK - 273.15
    basic.pause(5000)
})
