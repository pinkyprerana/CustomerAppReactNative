import NetInfo from '@react-native-community/netinfo';
import CustomToast from './Toast';

export default function connectionrequest() {
  return new Promise(function (resolve, reject) {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        resolve(state.isConnected);
      } else {
        reject(state.isConnected);
        CustomToast("Internet connection is not available!")
      }
    });
  });
}
