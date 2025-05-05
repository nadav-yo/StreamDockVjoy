/// <reference path="../utils/common.js" />
/// <reference path="../utils/action.js" />

const $local = true, $back = false;

const $dom = {
    main: document.querySelector('.sdpi-wrapper'),
    deviceId: document.getElementById('deviceId'),
    buttonId: document.getElementById('buttonId'),
};

const $propEvent = {
    didReceiveSettings(data) {
        console.log('didReceiveSettings', data);
        const settings = data.settings || {};

        if (settings.deviceId) {
            $dom.deviceId.value = settings.deviceId;
        }
        if (settings.buttonId) {
            $dom.buttonId.value = settings.buttonId;
        }
    },
    sendToPropertyInspector(data) {
        console.log('sendToPropertyInspector', data);
        // optional: handle plugin → property messages
    }
};

$dom.deviceId.addEventListener('change', function () {
    console.log('deviceId changed', $dom.deviceId.value);
    $websocket.sendToPlugin({ deviceId: $dom.deviceId.value, buttonId: $dom.buttonId.value });
});

$dom.buttonId.addEventListener('change', function () {
    console.log('buttonId changed', $dom.buttonId.value);
    $websocket.sendToPlugin({ deviceId: $dom.deviceId.value, buttonId: $dom.buttonId.value });
});
