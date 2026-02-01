def on_button_pressed_a():
    basic.show_string("" + convert_to_text(input.temperature()) + "°C")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    basic.show_string("" + convert_to_text(Math.round(TempC)) + "°C")
input.on_button_pressed(Button.B, on_button_pressed_b)

TempK = 0
Rt = 0
Vout = 0
adc = 0
TempC = 0
Vin = 3.3
Ro = 10000
A = 0.001129148
B = 0.000234125
C = 8.76741e-8

def on_forever():
    global adc, Vout, Rt, TempK, TempC
    adc = pins.analog_read_pin(AnalogPin.P0)
    Vout = 3.3 / 1023 * adc
    Rt = Vout * Ro / (Vin - Vout)
    TempK = 1 / (A + B * Math.log(Rt) + C * Math.log(Rt) ** 3)
    TempC = TempK - 273.15
    basic.pause(5000)
basic.forever(on_forever)
