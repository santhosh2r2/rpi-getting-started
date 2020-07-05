# Setting Up

For getting started with Raspberry Pi, starter kits are generally recommended.

> For RPi 4 Model B - with 64GB SD and 4GB RAM
> https://www.amazon.de/gp/product/B07YYWZDX7/ref=ppx_yo_dt_b_asin_title_o03_s00?ie=UTF8&psc=1

> For RPi Camera Module: 
> https://www.amazon.de/gp/product/B07TWHCSMT/ref=ppx_yo_dt_b_asin_title_o04_s00?ie=UTF8&psc=1

> It depends on the type of application you are planning to run. For machine learning apps, RPi 4 Model B with min. 4 GB RAM is recommended.

If this is not preferred, then avail the following parts in order to continue with the instructions.

- 1 x Raspberry Pi 4 (4GB RAM).
- 1 x 3A USB C power supply with on/off switch.
- 1 x SanDisk + 64 GB class 10 micro SD card
- 1 x micro HDMI to HDMI cable.
- 1 x card reader compatible with USB-A and USB-C
- 3 x premium copper heat sink.
- 1 x fan.
- _optional:_ 1 x premium Raspberry Pi 4b case for Raspberry Pi 4 model B.
- _optional:_ 1 x Raspberri Pi Camera Module

## 1. Installing Raspbian OS, now called **Raspberry Pi OS**

If you have purchased a starter kit, the Raspbian OS will be pre-installed.

This link contains the instructions to install OS to SD card. https://projects.raspberrypi.org/en/projects/raspberry-pi-setting-up/2

> If you have an SD card that doesn’t have the Raspbian operating system on it yet, or if you want to reset your Raspberry Pi, you can easily install Raspbian yourself. To do so, you need a computer that has an SD card port — most laptop and desktop computers have one.

**The Raspbian operating system via the Raspberry Pi Imager**
Using the Raspberry Pi Imager is the easiest way to install Raspbian on your SD card.

- Download the latest version of Raspberry Pi Imager and install it.
  - https://www.raspberrypi.org/downloads/
  - Click on the link for the Raspberry Pi Imager that matches your operating system
  - When the download finishes, click it to launch the installer
- Connect an SD card reader with the SD card inside.
- Open Raspberry Pi Imager and choose the required OS from the list presented.
- Choose the SD card you wish to write your image to.
- Review your selections and click 'WRITE' to begin writing data to the SD card.

## 2. Mounting the Raspberry Pi 4 Model B from the starter kit

Since the components are small, spread the components from the starter kit on to a white/light background to identify them easily.

- Heat sinks: Remove the cover from heat sinks and mount them
- Fan: Mount the fan on the case
  - For 3.3 V: connect red cable to GPIO-Pin 1 and black cable to GPIO-Pin 6
  - For 5 V: connect red cable to GPIO-Pin 2 and black cable to GPIO-Pin 6 - the fan will operate with less noise and high speed
- Camera Module: care should be taken while connecting the cable to the RPi. In the camera slot, lift the black holder carefully. Make sure the white stripes are facing the USB slots. Then finally, mount the camera onto the case.
- RPi: Using the screws give, afix the RPi to the case. Make sure it sits while in the case. Close the case.
  > **Attention**: Care should be taken while closing the case, the camera cable should not have a sharp folding.
- Once the steps above are completed, connect the power supply cable to the USB-C slot.

## 3. First steps

After mounting the RPi and with the Rasbian OS installed in the SD-Card, now we are ready to turn on the RPi.

> **Attention**: For the initial setup, connect the mini-HMDI cable to a monitor. Make sure keyboard and mouse is connected to the RPi.

Now you should be able to see the start-up screen, followed by the desktop view.

The RPi asks you do define certain settings.

- Update the pi user's password
- Setup the country/region and keyboard layout <br>
  `All these configurations can be changed anytime using the Raspberry Configuration.`

Now configure the Wifi Network (found on the top-right corner of the window). After this setup, theoretically, you could use **ssh** from any terminal to access the RPi.

> Enable the camera module under Programs -> Preferences -> Raspberry Pi Configuration -> Interfaces.

You could also define a hostname, for easy access via terminal.

After starting the RPi, there are few initial commands to be executed. 

```bash
sudo apt-get update -y && sudo apt-get upgrade -y

sudo apt-get install --reinstall pcmanfm -y 
```` 