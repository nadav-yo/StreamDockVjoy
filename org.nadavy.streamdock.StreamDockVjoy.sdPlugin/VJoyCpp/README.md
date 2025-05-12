# VJoyCpp - Build & Deployment

This folder contains the core C++ implementation for VJoy integration with the Mirabox Stream Dock. It includes two C++ source files that handle virtual joystick interactions.


## Build Process

To compile the executables and copy them to the appropriate directory, follow these steps:

1. Open the project in **Visual Studio Code**.
2. Ensure that the necessary dependencies for VJoy are installed.
3. to compile and copy the output by either:
   - Use the **VS Code Build Task**  by pressing `Ctrl + Shift + B` to trigger the build process.
   - run `nmake` in the terminal.
4. The build task will automatically compile the files and move the executable to the correct location (plugin).

## Dependencies

- Requires the VJoy SDK from [here](https://github.com/BrunnerInnovation/vJoy/releases). place it under VJoyCpp/SDK
- Copy the **VJoyInterface.dll** from the **SDK\\lib\\x64\\** folder to the **plugin** directory
- (optinal) Copy the **VJoyInterface.dll** under **VJoyCPP** if you want to test it locally.

## Additional Information

For more details about usage and integration, refer to the main repository `README.md`.

---

Let me know if you’d like any refinements! 🚀