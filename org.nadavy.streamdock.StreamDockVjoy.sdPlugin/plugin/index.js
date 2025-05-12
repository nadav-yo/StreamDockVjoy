const { type } = require('os');
const { Plugins, Actions, log } = require('./utils/plugin');
const { execSync, spawn } = require('child_process');
const path = require('path');

const plugin = new Plugins('vjoy');


plugin.didReceiveGlobalSettings = ({ payload: { settings } }) => {
    log.info('didReceiveGlobalSettings', settings);
};

plugin.button = new Actions({
    default: {
      settings: {
        deviceId: 1,
        buttonId: 0
      }
    },
    async _willAppear({ context, payload }) {
    },

    _willDisappear({ context }) {
    },

    _propertyInspectorDidAppear({ context }) {
      // Optional: send settings to PI when it opens
    },

    sendToPlugin({ context, payload }) {
      if (payload.deviceId) {
        plugin.setSettings(context, { deviceId: payload.deviceId, buttonId: payload.buttonId });
      }
      if (payload.buttonId) {
        plugin.setSettings(context, { deviceId: payload.deviceId, buttonId: payload.buttonId });
      }
    },
    keyDown({ context, payload }) {
      const settings = payload.settings || {};
      const deviceId = settings.deviceId || 1;  // Default device 1 if not set
      const buttonId = settings.buttonId || 0;  // Default button 0 if not set

      // Path to the compiled C++ executable
      const exePath = path.join(__dirname, 'send_joystick_button.exe');
 
      // Spawn the executable with the deviceId and buttonId as arguments
      const child = spawn(exePath, [deviceId, buttonId, "1"], {
        windowsHide: true  // Hide the console window
      });

      // Log output from the executable for debugging
      child.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      child.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
        showAlert(context);
      });

      child.on('close', (code) => {
        console.log(`vJoy executable exited with code ${code}`);
        showOk(context);
      });
    },
    keyUp({ context, payload }) {
      const settings = payload.settings || {};
      const deviceId = settings.deviceId || 1;  // Default device 1 if not set
      const buttonId = settings.buttonId || 0;  // Default button 0 if not set

      // Path to the compiled C++ executable
      const exePath = path.join(__dirname, 'send_joystick_button.exe');
 
      // Spawn the executable with the deviceId and buttonId as arguments
      const child = spawn(exePath, [deviceId, buttonId, "0"], {
        windowsHide: true  // Hide the console window
      });

      // Log output from the executable for debugging
      child.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      child.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
        showAlert(context);
      });

      child.on('close', (code) => {
        console.log(`vJoy executable exited with code ${code}`);
        showOk(context);
      });
    }
});

plugin.axis = new Actions({
  default: {
    settings: {
      deviceId: 1,
      axisId: 0,
      axisValue: 0
    }
  },
  async _willAppear({ context, payload }) {
  },

  _willDisappear({ context }) {
  },

  _propertyInspectorDidAppear({ context }) {
    // Optional: send settings to PI when it opens
  },

  sendToPlugin({ context, payload }) {
    plugin.setSettings(context, { deviceId: payload.deviceId, axisId: payload.axisId, axisValue: payload.axisValue });
  },
  keyUp({ context, payload }) {
       // Retrieve settings from the Property Inspector
    const settings = payload.settings || {};
    const deviceId = settings.deviceId || 1;  // Default device 1 if not set
    const axisId = settings.axisId || 0;  // Default button 0 if not set
    const axisValue = settings.axisValue || 0;  // Default button 0 if not set

    // Path to the compiled C++ executable
    const exePath = path.join(__dirname, 'send_joystick_axis.exe');
    
    // Spawn the executable with the deviceId and buttonId as arguments
    const child = spawn(exePath, [deviceId, axisId, axisValue], {
      windowsHide: true  // Hide the console window
    });

    // Log output from the executable for debugging
    child.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    child.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    child.on('close', (code) => {
      console.log(`vJoy executable exited with code ${code}`);
    });
    }
});
