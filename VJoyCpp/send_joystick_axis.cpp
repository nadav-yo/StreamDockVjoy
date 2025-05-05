#include <iostream>
#include <windows.h>
#include "vjoyinterface.h"

int main(int argc, char* argv[]) {
    if (argc < 4) {
        std::cerr << "Usage: send_joystick_axis <joystick_id> <axis_id> <value>" << std::endl;
        return 1;
    }

    UINT rID = std::atoi(argv[1]);  // vJoy device ID
    UINT axisNumber = std::atoi(argv[2]);
    if (GetVJDAxisExist(rID, axisNumber) == FALSE) {
        std::cerr << "Axis " << axisNumber << " does not exist on vJoy device " << rID << "." << std::endl;
        return 1;
    }
    int axisValue = std::atoi(argv[3]);
    if (axisValue < 0 || axisValue > 65535) {
        std::cerr << "Invalid axis value. Must be between 0 and 65535." << std::endl;
        return 1;
    }

    // Check if vJoy is enabled and the device is available
    if (!vJoyEnabled()) {
        std::cerr << "vJoy driver not enabled." << std::endl;
        return 1;
    }

    VjdStat status = GetVJDStatus(rID);
    if (status != VJD_STAT_OWN && status != VJD_STAT_FREE) {
        std::cerr << "vJoy device not available or not free." << std::endl;
        return 1;
    }

    // Acquire the vJoy device
    if (!AcquireVJD(rID)) {
        std::cerr << "Failed to acquire vJoy device." << std::endl;
        return 1;
    }
    switch (axisNumber) {
        case 0:
            SetAxis(axisValue, rID, HID_USAGE_X);
            std::cout << "Axis X set to " << axisValue << std::endl;
            break;
        case 1:
            SetAxis(axisValue, rID, HID_USAGE_Y);
            std::cout << "Axis Y set to " << axisValue << std::endl;
            break;
        case 2:
            SetAxis(axisValue, rID, HID_USAGE_Z);
            std::cout << "Axis Z set to " << axisValue << std::endl;
            break;
        case 3:
            SetAxis(axisValue, rID, HID_USAGE_RX);
            std::cout << "Axis RX set to " << axisValue << std::endl;
            break;
        case 4:
            SetAxis(axisValue, rID, HID_USAGE_RY);
            std::cout << "Axis RY set to " << axisValue << std::endl;
            break;
        case 5:
            SetAxis(axisValue, rID, HID_USAGE_RZ);
            std::cout << "Axis RZ set to " << axisValue << std::endl;
            break;
        case 6:
            SetAxis(axisValue, rID, HID_USAGE_SL0);
            std::cout << "Axis SL0 set to " << axisValue << std::endl;
            break;
        case 7:
            SetAxis(axisValue, rID, HID_USAGE_SL1);
            std::cout << "Axis SL1 set to " << axisValue << std::endl;
            break;
        default:
            std::cerr << "Invalid axis number. Must be between 1 and 6." << std::endl;
            return 1;
    }
    return 0;
}