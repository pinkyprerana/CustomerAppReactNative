import {
  Animated,
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import css from '../../themes/css';
import normalize from '../../utils/normalize';
import colors from '../../themes/colors';
import Txt from '../micro/Txt';
import icons from '../../themes/icons';
import DeviceInfo from 'react-native-device-info';

const Modalinput = props => {
  // title
  const {
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
    multiline,
    autoComplete,
    dolorVisible,
    editable,
    isDropDown,
    dropDownPress,
  } = props;

  const [isExpanded, setExpanded] = useState(false);
  const animatedHeight = new Animated.Value(100);
  const [isFocused, setIsFocused] = useState(false);

  const onFocusFunction = () => {
    setIsFocused(true);
  };

  const onBlurFunction = () => {
    setIsFocused(false);
  };

  return (
    <View style={[styles.inputContainer, containerStyle]}>
      <View style={[css.row]}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.grey}
          style={[styles.inputStyle]}
          onFocus={onFocus ? onFocus : onFocusFunction}
          onBlur={onBlur ? onBlur : onBlurFunction}
          autoCapitalize={autoCapitalize}
          autoComplete="off"
          enterKeyHint={enterKeyHint}
          inputMode={inputMode}
          keyboardType={keyboardType}
          multiline={multiline}
          editable={editable}
        />
        {isDropDown && (
          <TouchableOpacity onPress={dropDownPress} style={[css.jcc]}>
            <Image source={icons.arrowDown} style={[css.socialIcon, css.ml2]} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Modalinput;
const tablet = DeviceInfo.isTablet();
const styles = StyleSheet.create({
  inputContainer: {
    borderBottomWidth: 1,
    borderColor: colors.border_color,
    paddingBottom: 0,
    width: '100%',
    height: tablet ? normalize(23) : normalize(40),
    marginTop: normalize(10),
  },
  inputStyle: {
    color: colors.WHITE,
    fontSize: tablet ? normalize(8) : normalize(13),
    flex: 1,
    padding: 0,
    height: tablet ? normalize(15) : normalize(30),
  },
});
