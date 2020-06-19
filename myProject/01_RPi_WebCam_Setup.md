# RPi WebCam Setup
RPi Cam Web Interface is a web interface for the Raspberry Pi Camera module. It can be used for a wide variety of applications including surveillance, dvr recording and time lapse photography. It is highly configurable and can be extended with the use of macro scripts.

## Setup commands

```bash
git clone https://github.com/silvanmelchior/RPi_Cam_Web_Interface.git

cd RPi_Cam_Web_Interface

cd bin

mv raspimjpeg raspimjpeg-buster

mv raspimjpeg-stretch raspimjpeg

cd ..

./install.sh
```

## Settings for Timelapse
After installing the web server, open the web-server using the link: http://hostname:80

Here you can setup the timelapse with few clicks. 

1. Expand **Camera Settings** button
2. Here you can choose the `Resolutions` and `Timelapse interval`
3. Click Ok and confirm the selection
4. Now just click `timelapse start` button