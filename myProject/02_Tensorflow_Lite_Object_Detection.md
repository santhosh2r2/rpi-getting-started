# Tensorflow Lite Object Detection

TensorFlow Lite is an optimized framework for deploying lightweight deep learning models on resource-constrained edge devices. TensorFlow Lite models have faster inference time and require less processing power, so they can be used to obtain faster performance in realtime applications.

> Source link: https://github.com/EdjeElectronics/TensorFlow-Lite-Object-Detection-on-Android-and-Raspberry-Pi

## Setup Commands

- Update the Raspberry Pi

```bash
sudo apt-get update

sudo apt-get dist-upgrade
```

- Download this repository and create virtual environment

```bash
git clone https://github.com/EdjeElectronics/TensorFlow-Lite-Object-Detection-on-Android-and-Raspberry-Pi.git

mv TensorFlow-Lite-Object-Detection-on-Android-and-Raspberry-Pi tflite1
cd tflite1

sudo pip3 install virtualenv

python3 -m venv tflite1-env

source tflite1-env/bin/activate
```

- Install TensorFlow and OpenCV

```bash
bash get_pi_requirements.sh
```

- Set up TensorFlow Lite detection model

```bash
wget https://storage.googleapis.com/download.tensorflow.org/models/tflite/coco_ssd_mobilenet_v1_1.0_quant_2018_06_29.zip

unzip coco_ssd_mobilenet_v1_1.0_quant_2018_06_29.zip -d Sample_TFLite_model
```

- Run TensorFlow Lite model

```bash
python TFLite_detection_webcam.py --modeldir=Sample_TFLite_model
```
