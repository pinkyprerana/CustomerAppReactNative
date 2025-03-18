import React from 'react';
import {Platform} from 'react-native';
// import { AccessToken, GraphRequest, GraphRequestManager, LoginManager } from 'react-native-fbsdk'

export default function onFacebookLogin() {
  return new Promise((resolve, reject) => {
    LoginManager.logOut();
    if (Platform.OS === 'android') {
      LoginManager.setLoginBehavior('web_only');
    }
    LoginManager.logInWithPermissions(['public_profile', 'email'])
      .then(result => {
        if (result.isCancelled) {
          //console.log('Cancelled')
          reject(result);
          //showErrorAlert('Failed', 'Login Cancelled')
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            let accessToken = data.accessToken;
            //resolve(data)
            const responseInfoCallback = (error, result) => {
              if (error) {
                reject(error);
                // console.log(error)
                //alert('Error fetching data: ' + error.toString());
              } else {
                // console.log(result)
                resolve(result);
                //createFacebookRegistrationObject(result)
                //alert('Success fetching data: ' + result.toString());
              }
            };

            const infoRequest = new GraphRequest(
              '/me',
              {
                accessToken: accessToken,
                parameters: {
                  fields: {
                    string: 'email,name,first_name,middle_name,last_name',
                  },
                },
              },
              responseInfoCallback,
            );

            new GraphRequestManager().addRequest(infoRequest).start();
          });
        }
      })
      .catch(error => {
        reject(error);
      });
  });
}
