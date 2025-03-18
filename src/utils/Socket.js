import io from 'socket.io-client';
import constants from './constants';

const createSocketConnection = token => {
  // console.log('token-->',token)
  const socket = io(constants.SOCKET_URL, {
    extraHeaders: {
      'x-access-token': token != null ? token : '',
    },
  });
  return socket;
};

export default createSocketConnection;
