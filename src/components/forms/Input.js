import {
  Animated,
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import css from '../../themes/css';
import normalize from '../../utils/normalize';
import colors from '../../themes/colors';
import DeviceInfo from 'react-native-device-info';

const Input = props => {
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
    height,
    paddingLeft,
    isDropDown,
    dropDownPress,
    leftIcon,
    IconStyle,
  } = props;
  const width = Dimensions.get('screen').width;

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
    <View
      style={[
        styles.inputContainer,
        containerStyle,
        {
          height: height ? height : tablet ? normalize(30) : normalize(55),
          paddingLeft: paddingLeft
            ? paddingLeft
            : tablet
            ? normalize(15)
            : normalize(25),
        },
      ]}>
      <View style={[css.row]}>
        <TextInput
          value={value}
          selectionColor={colors.grey}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.grey}
          style={[
            styles.inputStyle,
            {
              height: height
                ? height - 30
                : tablet
                ? normalize(10)
                : normalize(30),
            },
          ]}
          onFocus={onFocus ? onFocus : onFocusFunction}
          onBlur={onBlur ? onBlur : onBlurFunction}
          autoCapitalize={autoCapitalize}
          autoComplete="off"
          enterKeyHint={enterKeyHint}
          inputMode={inputMode}
          keyboardType={keyboardType}
          multiline={multiline}
          editable={editable}
          textAlignVertical={multiline && 'top'}
        />

        {isDropDown && (
          <TouchableOpacity onPress={dropDownPress} style={[css.jcc]}>
            <Image
              source={leftIcon}
              style={[css.socialIcon, css.ml2, IconStyle]}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Input;

const tablet = DeviceInfo.isTablet();
const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.border_color,
    paddingVertical: normalize(10),
    borderRadius: tablet ? normalize(5) : normalize(15),
    width: '100%',
    backgroundColor: '#141414',
    marginTop: tablet ? normalize(5) : normalize(10),
    paddingRight: tablet ? normalize(10) : normalize(20),
  },
  inputStyle: {
    color: colors.WHITE,
    fontSize: tablet ? normalize(8) : normalize(13),
    flex: 1,
    padding: 0,
  },
});
