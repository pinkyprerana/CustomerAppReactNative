import React, { useState } from 'react';
import { View, Alert , Image} from 'react-native';
import AppButton from '../components/buttons/AppButton';
import Input from '../components/forms/Input';
import css from '../themes/css';
import AppLogo from '../assets/images/logo.png';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'user@maxmobility.in' && password === 'Abc@#123') {
      navigation.replace('CustomerList');
    } else {
      Alert.alert('Invalid Credentials', 'Please enter the correct email and password.');
    }
  };

  return (
    <View style={[css.center, css.mt7]}>
      <Image source={AppLogo} style = {[css.mt1, css.mb5]}/>
      <View style={[css.w80]}>
        <Input
            placeholder={'User ID'}
            value={email}
            onChangeText={val => setEmail(val)}
          />
      </View>
      <View style={[css.w80]}>
        <Input
          placeholder={'Password'}
          value={password}
          onChangeText={val => setPassword(val)}
        />
      </View>

     <View style={[css.w80, css.mt6]}>
         <AppButton title={'Login'} onPress={handleLogin}/>
      </View>
    </View>
  );
};

export default LoginScreen;
