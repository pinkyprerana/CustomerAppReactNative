import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Txt from '../micro/Txt';
import colors from '../../themes/colors';
import normalize from '../../utils/normalize';
import DeviceInfo from 'react-native-device-info';

const DateInput = ({placeholder, time_value, onPress, disabled}) => {
  const tablet = DeviceInfo.isTablet();
  return (
    <View style={[styles.containerStyle]}>
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={0.7}
        onPress={onPress}
        style={[styles.containerInnerStyle]}>
        {time_value ? (
          <Txt style={[styles.valueStyle]}>{time_value}</Txt>
        ) : (
          <Txt style={[styles.placeholderStyle]}>{placeholder}</Txt>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default DateInput;
const tablet = DeviceInfo.isTablet();
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    marginTop: normalize(10),
    flexDirection: 'row',
  },
  containerInnerStyle: {
    flex: 1,
    borderRadius: tablet ? normalize(8) : normalize(12),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#141414',
    borderWidth: 1,
    borderColor: colors.border_color,
    padding: tablet ? normalize(5) : normalize(10),
  },
  valueStyle: {
    fontSize: tablet ? normalize(8) : normalize(12),
    color: colors.WHITE,
  },
  placeholderStyle: {
    fontSize: tablet ? normalize(8) : normalize(12),
    color: colors.grey,
  },
});
