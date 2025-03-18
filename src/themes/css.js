import {Dimensions, Platform, StatusBar, StyleSheet} from 'react-native';
import normalize from '../utils/normalize';
import fonts from './fonts';
import colors from './colors';
import DeviceInfo from 'react-native-device-info';

export const width = Dimensions.get('screen').width;
export const height = Dimensions.get('screen').height;
const tablet = DeviceInfo.isTablet();

const css = StyleSheet.create({
  light: {
    fontFamily: fonts.LIGHT,
  },
  textLight: {
    color: '#fff',
  },
  textDark: {
    color: '#000',
  },
  regular: {
    fontFamily: fonts.REGULAR,
  },
  medium: {
    fontFamily: fonts.MEDIUM,
  },
  semibold: {
    fontFamily: fonts.SEMI_BOLD,
  },
  bold: {
    fontFamily: fonts.BOLD,
  },
  border: {
    borderWidth: 1,
    borderColor: '#dae7ef',
  },
  cardVertical: {
    backgroundColor: '#FFF',
    borderRadius: normalize(10),
  },
  modalCloseBtn: {
    position: 'absolute',
    top: normalize(10),
    right: normalize(10),
  },
  br6: {
    borderRadius: normalize(6),
  },
  topCircle: {
    position: 'absolute',
    width: width / 2,
    height: width / 2,
    borderRadius: width / 3,
    top: normalize(50),
    left: normalize(-50),
  },
  bottomRightCircle: {
    position: 'absolute',
    zIndex: -1,
    width: width / 2,
    height: width / 2,
    borderRadius: width / 3,
    bottom: normalize(10),
    right: normalize(-50),
  },
  bottomLeftCircle: {
    position: 'absolute',
    zIndex: 1,
    width: width / 1.1,
    height: width / 1.1,
    borderRadius: width,
    bottom: normalize(10),
    left: normalize(-100),
    transform: [{rotate: '50deg'}],
  },
  card: {
    borderRadius: normalize(10),
    backgroundColor: '#fff',
  },
  thumbnail: {
    width: normalize(40),
    height: normalize(40),
    resizeMode: 'contain',
  },
  tag: {
    backgroundColor: '#f6f6f6',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: normalize(3),
    paddingVertical: normalize(2),
    marginTop: normalize(5),
    borderRadius: normalize(50),
  },
  tagText: {
    color: '#797a7a',
    fontFamily: fonts.LIGHT,
    margin: 0,
    fontSize: Platform.OS === 'android' ? normalize(11) : normalize(10),
  },
  closeIcon: {
    width: tablet ? normalize(25) : normalize(38),
    height: tablet ? normalize(25) : normalize(38),
    resizeMode: 'contain',
  },
  iconSmall: {
    width: tablet ? normalize(8) : normalize(13),
    height: tablet ? normalize(8) : normalize(13),
    marginTop: normalize(2),
  },
  socialIcon: {
    width: tablet ? normalize(10) : normalize(20),
    height: tablet ? normalize(10) : normalize(20),
    resizeMode: 'contain',
  },
  cardSubheading: {
    color: '#797a7a',
    fontSize: Platform.OS === 'android' ? normalize(12) : normalize(11),
  },
  cardSubheadingValue: {
    fontSize: Platform.OS === 'android' ? normalize(12) : normalize(11),
  },
  shadowsm: {
    shadowColor: '#f8f8f8f8',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 1.51,
    elevation: 2,
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
  },
  shadowlg:
    Platform.OS === 'android'
      ? {
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,

          elevation: 24,
        }
      : {
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.39,
          shadowRadius: 8.3,

          elevation: 13,
        },
  ofh: {
    overflow: 'hidden',
  },
  tac: {
    textAlign: 'center',
  },
  jcse: {
    justifyContent: 'space-evenly',
  },
  jcsa: {
    justifyContent: 'space-around',
  },
  jcc: {
    justifyContent: 'center',
  },
  jcfe: {
    justifyContent: 'flex-end',
  },
  jcsb: {
    justifyContent: 'space-between',
  },
  jcfs: {
    justifyContent: 'flex-start',
  },
  aife: {
    alignItems: 'flex-end',
  },
  aifs: {
    alignItems: 'flex-start',
  },
  aic: {
    alignItems: 'center',
  },
  ass: {
    alignSelf: 'flex-start',
  },
  ase: {
    alignSelf: 'flex-end',
  },
  asc: {
    alignSelf: 'center',
  },
  op0: {
    opacity: 0,
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  lowercase: {
    textTransform: 'lowercase',
  },
  f1: {
    flex: 1,
  },
  fg1: {
    flexGrow: 1,
  },
  bgwhite: {
    backgroundColor: 'white',
  },
  bgblack: {
    backgroundColor: '#000',
  },
  bgred: {
    backgroundColor: 'red',
  },
  bgyellow: {
    backgroundColor: 'yellow',
  },
  whiteTxt: {
    color: 'white',
  },
  fw: {
    flexWrap: 'wrap',
  },
  rowTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  row: {
    flexDirection: 'row',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowBetweenTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  rowBetweenBottom: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  center: {
    alignItems: 'center',
  },
  flexEnd: {
    alignItems: 'flex-end',
  },
  underLine: {
    textDecorationLine: 'underline',
  },
  w10: {
    width: '10%',
  },
  w20: {
    width: '20%',
  },
  w25: {
    width: '25%',
  },
  w33: {
    width: '33%',
  },
  w30: {
    width: '30%',
  },
  w35: {
    width: '35%',
  },
  w40: {
    width: '40%',
  },
  w49: {
    width: '49%',
  },
  w50: {
    width: '50%',
  },
  w60: {
    width: '60%',
  },
  w65: {
    width: '65%',
  },
  w70: {
    width: '70%',
  },
  w76: {
    width: '76%',
  },
  w80: {
    width: '80%',
  },
  w90: {
    width: '90%',
  },
  w98: {
    width: '98%',
  },
  w100: {
    width: '100%',
  },
  h1: {
    fontSize: Platform.OS === 'android' ? normalize(32) : normalize(30),
  },
  h2: {
    fontSize: Platform.OS === 'android' ? normalize(24) : normalize(22),
  },
  h3: {
    fontSize: Platform.OS === 'android' ? normalize(18) : normalize(16),
  },
  h4: {
    fontSize: Platform.OS === 'android' ? normalize(16) : normalize(14),
  },
  h5: {
    fontSize: Platform.OS === 'android' ? normalize(13) : normalize(11),
  },
  h6: {
    fontSize: Platform.OS === 'android' ? normalize(10) : normalize(8),
  },
  z_1: {
    zIndex: -1,
  },
  z1: {
    zIndex: 1,
  },
  z2: {
    zIndex: 2,
  },
  z3: {
    zIndex: 3,
  },
  z4: {
    zIndex: 4,
  },
  z5: {
    zIndex: 5,
  },
  z6: {
    zIndex: 6,
  },
  z7: {
    zIndex: 7,
  },
  z8: {
    zIndex: 8,
  },
  z9: {
    zIndex: 9,
  },
  z10: {
    zIndex: 10,
  },
  z50: {
    zIndex: 50,
  },
  z75: {
    zIndex: 75,
  },
  z99: {
    zIndex: 99,
  },
  m0: {
    margin: 0,
  },
  m1: {
    margin: normalize(4),
  },
  m2: {
    margin: normalize(8),
  },
  m3: {
    margin: normalize(12),
  },

  mx0: {
    marginHorizontal: 0,
  },

  mt1: {
    marginTop: normalize(4),
  },
  mt6px: {
    marginTop: normalize(6),
  },
  mt2: {
    marginTop: normalize(8),
  },
  mt3: {
    marginTop: normalize(12),
  },
  mt4: {
    marginTop: normalize(16),
  },
  mt5: {
    marginTop: normalize(20),
  },
  mt6: {
    marginTop: normalize(30),
  },
  mt7: {
    marginTop: normalize(50),
  },
  mx1: {
    marginHorizontal: normalize(4),
  },
  mx2: {
    marginHorizontal: normalize(8),
  },
  mx3: {
    marginHorizontal: normalize(12),
  },
  mx4: {
    marginHorizontal: normalize(16),
  },
  mx5: {
    marginHorizontal: normalize(20),
  },
  mx6: {
    marginHorizontal: normalize(24),
  },
  mx7: {
    marginHorizontal: normalize(28),
  },
  mx8: {
    marginHorizontal: normalize(32),
  },
  mx9: {
    marginHorizontal: normalize(36),
  },
  mx10: {
    marginHorizontal: normalize(40),
  },

  mt0: {
    marginTop: 0,
  },
  mb0: {
    marginBottom: normalize(0),
  },
  mb1: {
    marginBottom: normalize(4),
  },
  mb2: {
    marginBottom: normalize(8),
  },
  mb3: {
    marginBottom: normalize(16),
  },
  mb4: {
    marginBottom: normalize(20),
  },
  mb5: {
    marginBottom: normalize(25),
  },
  ml1: {
    marginLeft: normalize(4),
  },
  ml2: {
    marginLeft: normalize(8),
  },
  ml3: {
    marginLeft: normalize(16),
  },
  ml4: {
    marginLeft: normalize(20),
  },
  ml5: {
    marginLeft: normalize(25),
  },
  mr1: {
    marginRight: normalize(4),
  },
  mr2: {
    marginRight: normalize(8),
  },
  mr3: {
    marginRight: normalize(16),
  },
  mr4: {
    marginRight: normalize(20),
  },
  mr5: {
    marginRight: normalize(35),
  },
  mr6: {
    marginRight: normalize(48),
  },
  my0: {
    marginVertical: 0,
  },
  my1: {
    marginVertical: normalize(3),
  },
  my2: {
    marginVertical: normalize(8),
  },
  my3: {
    marginVertical: normalize(16),
  },
  my4: {
    marginVertical: normalize(20),
  },
  my5: {
    marginVertical: normalize(25),
  },
  p0: {
    padding: 0,
  },
  px0: {
    paddingHorizontal: 0,
  },
  py0: {
    paddingVertical: 0,
  },
  p1: {
    padding: normalize(2),
  },
  p2: {
    padding: normalize(4),
  },
  p3: {
    padding: normalize(8),
  },
  p4: {
    padding: normalize(16),
  },
  p5: {
    padding: normalize(24),
  },
  px1: {
    paddingHorizontal: normalize(4),
  },
  px2: {
    paddingHorizontal: normalize(8),
  },
  px3: {
    paddingHorizontal: normalize(16),
  },
  px4: {
    paddingHorizontal: normalize(24),
  },
  px5: {
    paddingHorizontal: normalize(32),
  },
  py1: {
    paddingVertical: normalize(4),
  },
  py2: {
    paddingVertical: normalize(8),
  },
  py3: {
    paddingVertical: normalize(16),
  },
  py4: {
    paddingVertical: normalize(24),
  },
  py5: {
    paddingVertical: normalize(32),
  },
  pl1: {
    paddingLeft: normalize(4),
  },
  pl2: {
    paddingLeft: normalize(8),
  },
  pl3: {
    paddingLeft: normalize(16),
  },
  pl4: {
    paddingLeft: normalize(20),
  },
  pl5: {
    paddingLeft: normalize(25),
  },
  pr1: {
    paddingRight: normalize(4),
  },
  pr2: {
    paddingRight: normalize(8),
  },
  pr3: {
    paddingRight: normalize(16),
  },
  pr4: {
    paddingRight: normalize(20),
  },
  pr5: {
    paddingRight: normalize(25),
  },
  pt1: {
    paddingTop: normalize(4),
  },
  pt2: {
    paddingTop: normalize(8),
  },
  pt3: {
    paddingTop: normalize(16),
  },
  pt4: {
    paddingTop: normalize(20),
  },
  pt5: {
    paddingTop: normalize(25),
  },
  pb1: {
    paddingBottom: normalize(4),
  },
  pb2: {
    paddingBottom: normalize(8),
  },
  pb3: {
    paddingBottom: normalize(16),
  },
  pb4: {
    paddingBottom: normalize(20),
  },
  pb5: {
    paddingBottom: normalize(25),
  },
  fs5: {
    fontSize: normalize(5),
  },
  fs6: {
    fontSize: normalize(6),
  },
  fs7: {
    fontSize: normalize(7),
  },
  fs8: {
    fontSize: normalize(8),
  },
  fs10: {
    fontSize: tablet ? normalize(7) : normalize(10),
  },
  fs11: {
    fontSize: tablet ? normalize(8) : normalize(11),
  },
  fs12: {
    fontSize: normalize(12),
  },
  fs14: {
    fontSize: normalize(14),
  },
  fs16: {
    fontSize: normalize(16),
  },
  fs18: {
    fontSize: tablet ? normalize(10) : normalize(18),
  },
  fs20: {
    fontSize: normalize(20),
  },
  fs22: {
    fontSize: normalize(22),
  },
  fs24: {
    fontSize: normalize(24),
  },
  fs26: {
    fontSize: normalize(26),
  },
  fs28: {
    fontSize: normalize(28),
  },
  fs30: {
    fontSize: normalize(30),
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  backDrop: {
    position: 'absolute',
    width: width,
    height: height,
    backgroundColor: 'transparent',
    zIndex: 5,
  },
  avoidStatusBar: {
    paddingTop:
      Platform.OS === 'android'
        ? StatusBar.currentHeight + normalize(12)
        : null,
  },

  txtwhite: {
    color: colors.WHITE,
  },
  TxtHeader: {
    fontSize: tablet ? normalize(16) : normalize(26),
    fontFamily: fonts.Oswald,
    letterSpacing: 0.5,
    color: colors.WHITE,
    // textAlign: 'center',
  },
  emptyComp: {
    padding: normalize(10),
    backgroundColor: colors.backGrey,
    borderRadius: normalize(10),
    paddingHorizontal: normalize(15),
    alignItems: 'center',
  },
  paZ9: {zIndex: 999, position: 'absolute'},
});

export default css;
