import React from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import colors from '../themes/colors';

// import { Colors } from '../../themes/ImagePath';

export default function Loader(props) {
  return props.visible ? (
    <SafeAreaView
      style={{
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        // backgroundColor: 'Transperant',
        zIndex: 999,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ActivityIndicator size="large" color={colors.LIGHT_GREY} />
    </SafeAreaView>
  ) : null;
}

Loader.propTypes = {
  visible: PropTypes.bool,
};

Loader.defaultProps = {
  visible: true,
};
