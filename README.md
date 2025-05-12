# VJoy Support for Mirabox Stream Dock

This repository provides VJoy integration for the Mirabox Stream Dock, allowing users to send virtual joystick inputs via two distinct actions:
1. **Button Support** – Simulates button presses.
2. **Axis Value Support** – Adjusts virtual joystick axis values.

## Prerequisites

Before using this project, make sure to download and install the latest VJoy driver from [here](https://github.com/BrunnerInnovation/vJoy/releases).  
Additionally, you will need to place the `vJoyInterface.dll` in the plugin directory.

The DLL can be found in either:
- If you downloaded the URL (required to compile the optional VJoyCpp) it will be under **SDK\\lib\\x64\\**
- If you downloaded the driver alone, it will be in **Program Files\\vJoy\x64\\**

## Installation

Clone the repository and install the required dependencies from above.
```sh
git clone https://github.com/nadav-yo/StreamDockVjoy.git
```

Copying the **vJoyInterface.dll** to the **org.nadavy.streamdock.StreamDockVjoy.sdPlugin/plugin** directory

To compile and deploy the plugin, run
```sh
cd org.nadavy.streamdock.StreamDockVjoy.sdPlugin/plugin
npm run build
```

## Building the Executables
This repository includes a VJoyCpp folder, which builds the executables.
For more details, please refer to the relevant README file inside VJoyCpp

## Usage

### Button Support
Use the provided method to send button events to vJoy. 
Up to 128 buttons are supported, Just make sure the to configure the amount required in the **Configure vJoy** app

### Axis Value Support
Modify joystick axis values to preset values.
8 Axis are supported, Just make sure the to configure the amount required in the **Configure vJoy** app. Axis values range is 0-65535.

The axis are:
- 0 = AxisX
- 1 = AxisY
- 2 = AxisZ
- 3 = AxisRx
- 4 = AxisRy
- 5 = AxisRz
- 6 = AxisSlider0
- 7 = AxisSlider1

## Contributing
Contributions are welcome! If you'd like to improve this repository, please submit a pull request.
