import {Platform, ToastAndroid } from 'react-native'
import Toast from 'react-native-simple-toast';

export default function CustomToast(message) {

    if (Platform.OS == "android") {
        Toast.show(message, Toast.LONG);
    } else {
     Toast.show(message,Toast.LONG)
    }
  }