import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Txt from '../micro/Txt';
import colors from '../../themes/colors';
import normalize from '../../utils/normalize';
import css from '../../themes/css';
import DeviceInfo from 'react-native-device-info';

const DropdownInput = ({
  placeholder,
  value,
  onPress,
  disabled,
  IconStyle,
  leftIcon,
}) => {
  // title

  const [isExpanded, setExpanded] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const onFocusFunction = () => {
    setIsFocused(true);
  };

  const onBlurFunction = () => {
    setIsFocused(false);
  };
  // console.log("statussss", status)
  return (
    <View style={[styles.containerStyle]}>
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={0.7}
        onPress={onPress}
        style={[styles.containerInnerStyle]}>
        {value ? (
          <Txt style={[styles.valueStyle]}>{value}</Txt>
        ) : (
          <Txt style={[styles.placeholderStyle]}>{placeholder}</Txt>
        )}
        <TouchableOpacity onPress={onPress} style={[css.jcc]}>
          <Image
            source={leftIcon}
            style={[css.socialIcon, css.ml2, IconStyle]}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export default DropdownInput;
const tablet = DeviceInfo.isTablet();
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    marginTop: normalize(10),
  },
  containerInnerStyle: {
    flex: 1,
    borderRadius: tablet ? normalize(8) : normalize(12),
    alignItems: 'center',
    backgroundColor: '#141414',
    borderWidth: 1,
    borderColor: colors.border_color,
    padding: tablet ? normalize(10) : normalize(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  valueStyle: {
    fontSize: tablet ? normalize(8) : normalize(12),
    color: colors.WHITE,
  },
  placeholderStyle: {
    fontSize: tablet ? normalize(8) : normalize(12),
    color: colors.grey,
  },
  leftIconStyle: {
    width: normalize(15),
    height: normalize(15),
    resizeMode: 'contain',
  },
  labelStyle: {
    fontSize: normalize(12),
    color: '#51B2E4',
  },
  labelWrap: {
    position: 'absolute',
    top: -8,
    left: normalize(20),
    zIndex: 99,
    paddingHorizontal: normalize(3),
  },
});
