/// <reference path="../utils/common.js" />
/// <reference path="../utils/action.js" />

const $local = true, $back = false;

const $dom = {
    main: document.querySelector('.sdpi-wrapper'),
    deviceId: document.getElementById('deviceId'),
    axisId: document.getElementById('axisId'),
    axisValue: document.getElementById('axisValue'),
    axisActionType: document.getElementById('axisActionType'),
};

const $propEvent = {
    didReceiveSettings(data) {
        console.log('didReceiveSettings', data);
        const settings = data.settings || {};

        if (settings.deviceId) {
            $dom.deviceId.value = settings.deviceId;
        }
        if (settings.axisId) {
            $dom.axisId.value = settings.axisId;
        }
        if (settings.axisValue) {
            $dom.axisValue.value = settings.axisValue;
        }
        if (settings.axisActionType) {
            $dom.axisActionType.value = settings.axisActionType;
        }
    },
    sendToPropertyInspector(data) {
        console.log('sendToPropertyInspector', data);
    }
};

$dom.deviceId.addEventListener('change', function () {
    console.log('deviceId changed', $dom.deviceId.value);
    $websocket.sendToPlugin({ deviceId: $dom.deviceId.value, axisId: $dom.axisId.value, axisValue: $dom.axisValue.value, axisActionType: $dom.axisActionType.value });
});

$dom.axisId.addEventListener('change', function () {
    console.log('axisId changed', $dom.axisId.value);
    $websocket.sendToPlugin({ deviceId: $dom.deviceId.value, axisId: $dom.axisId.value, axisValue: $dom.axisValue.value, axisActionType: $dom.axisActionType.value });
});

$dom.axisValue.addEventListener('change', function () {
    console.log('axisValue changed', $dom.axisValue.value);
    $websocket.sendToPlugin({ deviceId: $dom.deviceId.value, axisId: $dom.axisId.value, axisValue: $dom.axisValue.value, axisActionType: $dom.axisActionType.value });
});
$dom.axisActionType.addEventListener('change', function () {
    console.log('axisActionType changed', $dom.axisActionType.value);
    $websocket.sendToPlugin({ deviceId: $dom.deviceId.value, axisId: $dom.axisId.value, axisValue: $dom.axisValue.value, axisActionType: $dom.axisActionType.value });
});
