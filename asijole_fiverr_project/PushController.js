import React, { Component } from "react";
import PushNotification from "react-native-push-notification";

PushNotification.getChannels(function (channel_ids) {
    console.log(channel_ids);
});

PushNotification.configure({
    onRegister: function (token) {
    },

    onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);

        PushNotification.localNotification({
            channelId: notification.channelId,
            title: notification.title,
            message: notification.message,
            allowWhileIdle: false,
            repeatTime: 1
        })

    },
    senderID: "162022891473",

    popInitialNotification: true,
    requestPermissions: true
});



export default class PushController extends Component {


    render() {
        return null;
    }
}