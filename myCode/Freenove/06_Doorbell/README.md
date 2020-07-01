# 06. Doorbell

> **_WARNING:_** Basic knowledge and working of different electronic components such as LEDs, Resistors is expected to proceed with these projects. I will try to explain the components and their working in this repo in the [Components](../00_Components/README.md) section. If you require assistance, just drop an issue.

## Goal

To make a kind of doorbell: when the button is pressed, the buzzer sounds; and when the button is released, the buzzer stops sounding.

## Componets required

- 1 x RPi 4B
- 1 x GPIO Extension Board & Wire
- 1 x Breadboard
- 1 x NPN transistor (S8050)
- 1 x Active buzzer
- 1 x Push button
- 1 x Resistor 1kΩ
- 2 x Resistor 10kΩ
- 8 x Jumper

## Program code

```python
import RPi.GPIO as GPIO

buzzerPin = 11
buttonPin = 12


def setup():
    GPIO.setmode(GPIO.BOARD)
    GPIO.setup(buzzerPin, GPIO.OUT)
    GPIO.setup(buttonPin, GPIO.IN, pull_up_down=GPIO.PUD_UP)

def loop():
    while True:
        if GPIO.input(buttonPin)==GPIO.LOW : #button pressed
            GPIO.output(buzzerPin, GPIO.HIGH)
            print('buzzer ON >>')
        else :
            GPIO.output(buzzerPin, GPIO.LOW)
            print('buzzer OFF <<')


def destroy():
    GPIO.cleanup()

if __name__ == '__main__':
    print('Program is starting ... \n')
    setup()
    try:
        loop()
    except KeyboardInterrupt:
        destroy()

```

### Circuit diagram

<img src="./img/01_circuit_diagram.png" alt="circuit_diagram" height=250></img>

### Practical

| Step                       | Screenshot                           |
| -------------------------- | ------------------------------------ |
| Components                 | ![](./img/02_components.jpg)         |
| Complete ciruct connection | ![](./img/03_circuit_connection.jpg) |
| Working                    | [video](./img/04_working.mp4)            |
