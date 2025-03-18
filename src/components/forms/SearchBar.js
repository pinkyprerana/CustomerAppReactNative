import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import colors from '../../themes/colors';
import normalize from '../../utils/normalize';
import icons from '../../themes/icons';
import Txt from '../micro/Txt';
import css from '../../themes/css';
import DeviceInfo from 'react-native-device-info';

const SearchBar = props => {
  return (
    <View style={styles.SearchContainer}>
      <Image source={icons.search} style={[styles.icons]} />
      {props?.isTouchable ? (
        <TouchableOpacity
          onPress={props?.onPress}
          style={[css.jcc, styles.inputStyle]}>
          <Txt>{props?.placeholder ? props?.placeholder : 'Search Here'}</Txt>
        </TouchableOpacity>
      ) : (
        <TextInput
          placeholder={props?.placeholder ? props?.placeholder : 'Search Here'}
          placeholderTextColor={colors.txtColor}
          value={props?.value}
          onChangeText={props?.onChangeText}
          style={[styles.inputStyle]}
          onFocus={props?.onFocus}
        />
      )}
    </View>
  );
};

export default SearchBar;
const tablet = DeviceInfo.isTablet();
const styles = StyleSheet.create({
  inputStyle: {
    flex: 1,
    height: tablet ? normalize(20) : normalize(40),
    color: colors.WHITE,
    paddingHorizontal: normalize(10),
    fontSize: tablet ? normalize(8) : normalize(13),
  },
  SearchContainer: {
    borderWidth: 1,
    borderColor: colors.border_color,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: normalize(10),
    borderRadius: tablet ? normalize(5) : normalize(14),
    backgroundColor: colors.backGrey,
  },
  icons: {
    height: tablet ? normalize(9) : normalize(15),
    width: tablet ? normalize(9) : normalize(15),
    resizeMode: 'contain',
  },
  SearchIconCon: {
    backgroundColor: colors.border_color,
    padding: normalize(8),
    borderRadius: normalize(8),
  },
});
