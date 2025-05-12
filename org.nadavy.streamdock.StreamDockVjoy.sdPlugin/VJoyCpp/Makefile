# Directories
SRC_DIR = .
OUT_DIR = $(SRC_DIR)
PLUGIN_DIR = ..\\plugin

# Compiler and flags
CXX = cl
CXXFLAGS = /I $(SRC_DIR)\\SDK\\inc /EHsc
LDFLAGS = $(SRC_DIR)\\SDK\\lib\\x64\\vJoyInterface.lib

# Source files
BUTTON_SRC = $(SRC_DIR)\\send_joystick_button.cpp
AXIS_SRC = $(SRC_DIR)\\send_joystick_axis.cpp

# Executables
BUTTON_EXE = $(OUT_DIR)\\send_joystick_button.exe
AXIS_EXE = $(OUT_DIR)\\send_joystick_axis.exe

# Default target
all: clean build_executables copy_executables

# Build targets
$(BUTTON_EXE): $(BUTTON_SRC)
    $(CXX) $(BUTTON_SRC) $(CXXFLAGS) $(LDFLAGS) /Fe$@

$(AXIS_EXE): $(AXIS_SRC)
    $(CXX) $(AXIS_SRC) $(CXXFLAGS) $(LDFLAGS) /Fe$@

build_executables: $(BUTTON_EXE) $(AXIS_EXE)

copy_executables:
    xcopy /Y $(OUT_DIR)\\*.exe $(PLUGIN_DIR)

clean:
    del /Q $(PLUGIN_DIR)\\*.exe