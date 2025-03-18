import AsyncStorage from '@react-native-async-storage/async-storage';
import {io} from 'socket.io-client';

const SOCKET_URL = 'https://deathmessage.dedicateddevelopers.us';

// let socket
let socketInstance = null;

class WSservice {
  initialize = async () => {
    let Token = await AsyncStorage.getItem('TOKEN');
    try {
      this.socket = io(SOCKET_URL, {
        autoConnect: true,
        extraHeaders: {
          'x-access-token': Token,
        },
      });
      console.log('Initialize Socket Connection', this.socket);
      this.socket.on('connected', data => {
        console.log('==== Socket Connected ====', data);
      });
      this.socket.on('disconnect', data => {
        console.log('==== Socket Disconnected ====');
      });
      this.socket.on('error', data => {
        console.log('==== Socket Connection Error ====', data);
      });
    } catch (err) {
      console.log('Socket Error', err);
    }
  };

  emit(event, data = {}) {
    console.log(data);
    this.socket.emit(event, data);
  }
  on(event, cb) {
    this.socket.on(event, cb);
  }
  removeEventListener(listener) {
    this.socket.removeEventListener(listener);
  }
}
export const userevents = {
  send_message: 'send_message_usr',
  receive_message: 'recv_message_usr',
  // login: 'new_login',
  
};

export const events = {
  send_message: 'send_message_adm',
  receive_message: 'recv_message_adm',
  login: 'new_login',
  
};

export default () => {
  if (socketInstance == null) {
    socketInstance = new WSservice();
    socketInstance.initialize();
    return socketInstance;
  } else {
    return socketInstance;
  }
};
