import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import css from '../../themes/css';
import normalize from '../../utils/normalize';
import colors from '../../themes/colors';
import Txt from '../micro/Txt';
import icons from '../../themes/icons';
import DeviceInfo from 'react-native-device-info';

const SecureInput = props => {
  // title
  const {
    isSecure,
    containerStyle,
    titleStyle,
    title,
    value,
    onChangeText,
    placeholder,
    onFocus,
    onBlur,
    autoCapitalize,
    enterKeyHint,
    inputMode,
    keyboardType,
    secureTextEntry,
    onPressIcon,
  } = props;
  const width = Dimensions.get('screen').width;

  return (
    <View style={[styles.inputContainer, containerStyle, css.row]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.grey}
        secureTextEntry={secureTextEntry}
        onFocus={onFocus}
        onBlur={onBlur}
        autoCapitalize={autoCapitalize}
        enterKeyHint={enterKeyHint}
        inputMode={inputMode}
        keyboardType={keyboardType}
        style={[styles.inputStyle]}
      />

      <TouchableOpacity onPress={onPressIcon} style={[css.mb2, css.asc]}>
        <Image
          source={isSecure ? icons.eyeOpen : icons.eyeOff}
          style={[styles.eyeIconStyle]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SecureInput;

const tablet = DeviceInfo.isTablet();
const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.border_color,
    padding: normalize(10),
    paddingBottom: 0,
    borderRadius: tablet ? normalize(5) : normalize(15),
    width: '100%',
    backgroundColor: '#141414',
    height: tablet ? normalize(30) : normalize(55),
    marginTop: normalize(10),
    paddingLeft: tablet ? normalize(15) : normalize(25),
    paddingRight: tablet ? normalize(15) : normalize(25),
  },

  inputStyle: {
    color: colors.grey,
    fontSize: tablet ? normalize(8) : normalize(12),
    flex: 1,
    padding: 0,
    height: tablet ? normalize(10) : normalize(30),
  },
  eyeIconStyle: {
    width: tablet ? normalize(10) : normalize(17),
    height: tablet ? normalize(10) : normalize(17),
    resizeMode: 'contain',
    tintColor: colors.grey,
  },
});
