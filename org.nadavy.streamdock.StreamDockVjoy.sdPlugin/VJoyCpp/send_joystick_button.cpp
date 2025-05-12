#include <iostream>
#include <windows.h>
#include "vjoyinterface.h"

int main(int argc, char* argv[]) {
    if (argc < 4) {
        std::cerr << "Usage: send_joystick_button <joystick_id> <button_number> <value>" << std::endl;
        return 1;
    }

    UINT rID = std::atoi(argv[1]);  // vJoy device ID
    int buttonNumber = std::atoi(argv[2]);
    int value = std::atoi(argv[3]);  // Button value (0 or 1)

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

    // Press the button
    BOOL buttonValue = (value == 0) ? FALSE : TRUE;
    SetBtn(buttonValue, rID, buttonNumber);

    std::cout << "Pressed button " << buttonNumber << std::endl;
    return 0;
}