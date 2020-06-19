# Freenove Starter Kit Installation

1. Normally, WiringPI is pre-installed in the newer versions of RPi. If not follow the below steps.

   ```bash
   sudo apt-get update
   sudo apt-get upgrade
   sudo apt-get install wiringpi
   gpio -v # to check the installed version
   ```

2. If you want to use editor Geany or Thonny, you need set Python3 as default Python first, please follow
   the steps below.

   - Enter directory /usr/bin <br>
     `cd /usr/bin`
   - Delete the old python link. <br>
     `sudo rm python`
   - Creat new python links to python3. <br>
     `sudo ln -s python3 python`
   - Execute python to check whether the link succeeds. <br>
     `python`

3. If you are using Raspberry Pi 4B, there will be errors when executing command “gpio readall”. As is below:

   This is because the official version of the library supporting 4B has not yet been released, which result in some commands can not be used properly. But it won't affect the next project. For this problem, you can solve it by installing a patch. Just execute the commands below in the terminal.

   ```bash
   sudo wget https://project-downloads.drogon.net/wiringpi-latest.deb
   sudo dpkg -i wiringpi-latest.deb
   ```
