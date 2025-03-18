import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import normalize from '../../utils/normalize';
import DeviceInfo from 'react-native-device-info';

const AppButton = ({onPress, title, fontSize, loading, style, height}) => {
  return (
    <TouchableOpacity
      disabled={loading}
      style={[
        styles.BtnStyle,
        {height: height ? height : tablet ? normalize(27) : normalize(50)},
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.9}>
      {loading ? (
        <ActivityIndicator size="large" color={colors.backGrey} />
      ) : (
        <Text
          style={[
            styles.buttonText,
            {
              fontSize: fontSize
                ? fontSize
                : tablet
                ? normalize(8)
                : normalize(13),
            },
          ]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;

const tablet = DeviceInfo.isTablet();
const styles = StyleSheet.create({
  BtnStyle: {
    zIndex: 99,
    backgroundColor: colors.PrimaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: tablet ? normalize(5) : normalize(8),
    width: '100%',
  },
  buttonText: {
    color: colors.BLACK,
    fontFamily: fonts.BOLD,
    textTransform: 'uppercase',
  },
});
