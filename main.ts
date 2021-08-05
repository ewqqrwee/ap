input.onButtonPressed(Button.A, function () {
    basic.showString(KSRobot_IOT.Get_IP())
})
input.onButtonPressed(Button.B, function () {
    basic.showString(KSRobot_IOT.AP_Name())
})
KSRobot_IOT.Wifi_setup(
SerialPin.P15,
SerialPin.P8,
"CHT",
"mark81330",
KSRobot_IOT.IOT_Config.STATION_AP
)
