import {Platform} from 'react-native';
import {
  ICommonTheme,
  ThemeAssets,
  ThemeFonts,
  ThemeIcons,
  ThemeWeights,
} from '../types/Theme';

export const WEIGHTS: ThemeWeights = {
  text: 'normal',
  h1: Platform.OS === 'ios' ? '700' : 'normal',
  h2: Platform.OS === 'ios' ? '700' : 'normal',
  h3: Platform.OS === 'ios' ? '700' : 'normal',
  h4: Platform.OS === 'ios' ? '700' : 'normal',
  h5: Platform.OS === 'ios' ? '600' : 'normal',
  p: 'normal',

  thin: Platform.OS === 'ios' ? '100' : 'normal',
  extralight: Platform.OS === 'ios' ? '200' : 'normal',
  light: Platform.OS === 'ios' ? '300' : 'normal',
  normal: Platform.OS === 'ios' ? '400' : 'normal',
  medium: Platform.OS === 'ios' ? '500' : 'normal',
  semibold: Platform.OS === 'ios' ? '600' : 'normal',
  bold: Platform.OS === 'ios' ? '700' : 'normal',
  extrabold: Platform.OS === 'ios' ? '800' : 'normal',
  black: Platform.OS === 'ios' ? '900' : 'normal',
};

export const ICONS: ThemeIcons = {
  arrow: require('../../assets/icons/arrow.png'),
  basket: require('../../assets/icons/basket.png'),
  calendar: require('../../assets/icons/calendar.png'),
  check: require('../../assets/icons/check.png'),
  clock: require('../../assets/icons/clock.png'),
  close: require('../../assets/icons/close.png'),
  components: require('../../assets/icons/components.png'),
  document: require('../../assets/icons/document.png'),
  extras: require('../../assets/icons/extras.png'),
  home: require('../../assets/icons/home.png'),
  image: require('../../assets/icons/image.png'),
  location: require('../../assets/icons/location.png'),
  menu: require('../../assets/icons/menu.png'),
  more: require('../../assets/icons/more.png'),
  notification: require('../../assets/icons/notification.png'),
  payment: require('../../assets/icons/payment.png'),
  profile: require('../../assets/icons/profile.png'),
  register: require('../../assets/icons/register.png'),
  search: require('../../assets/icons/search.png'),
  settings: require('../../assets/icons/settings.png'),
  users: require('../../assets/icons/users.png'),
  warning: require('../../assets/icons/warning.png'),
};

export const ASSETS: ThemeAssets = {
  // fonts
  OpenSansLight: require('../../assets/fonts/OpenSans-Light.ttf'),
  OpenSansRegular: require('../../assets/fonts/OpenSans-Regular.ttf'),
  OpenSansSemiBold: require('../../assets/fonts/OpenSans-SemiBold.ttf'),
  OpenSansExtraBold: require('../../assets/fonts/OpenSans-ExtraBold.ttf'),
  OpenSansBold: require('../../assets/fonts/OpenSans-Bold.ttf'),

  // backgrounds/logo
  logo: require('../../assets/images/logo.png'),
  header: require('../../assets/images/header.png'),
  background: require('../../assets/images/background.png'),
  ios: require('../../assets/images/ios.png'),
  android: require('../../assets/images/android.png'),

  // cards
  card1: require('../../assets/images/card1.png'),
  card2: require('../../assets/images/card2.png'),
  card3: require('../../assets/images/card3.png'),
  card4: require('../../assets/images/card4.png'),
  card5: require('../../assets/images/card5.png'),

  // gallery photos
  photo1: require('../../assets/images/photo1.png'),
  photo2: require('../../assets/images/photo2.png'),
  photo3: require('../../assets/images/photo3.png'),
  photo4: require('../../assets/images/photo4.png'),
  photo5: require('../../assets/images/photo5.png'),
  photo6: require('../../assets/images/photo6.png'),

  // avatars
  avatar1: require('../../assets/images/avatar1.png'),
  avatar2: require('../../assets/images/avatar2.png'),
};

export const FONTS: ThemeFonts = {
  // based on font size
  text: 'OpenSans-Regular',
  h1: 'OpenSans-Bold',
  h2: 'OpenSans-Bold',
  h3: 'OpenSans-Bold',
  h4: 'OpenSans-Bold',
  h5: 'OpenSans-SemiBold',
  p: 'OpenSans-Regular',

  // based on fontWeight
  thin: 'OpenSans-Light',
  extralight: 'OpenSans-Light',
  light: 'OpenSans-Light',
  normal: 'OpenSans-Regular',
  medium: 'OpenSans-SemiBold',
  semibold: 'OpenSans-SemiBold',
  bold: 'OpenSans-Bold',
  extrabold: 'OpenSans-ExtraBold',
  black: 'OpenSans-ExtraBold',
};

export const THEME: ICommonTheme = {
  icons: ICONS,
  assets: {...ICONS, ...ASSETS},
  fonts: FONTS,
  weights: WEIGHTS,
};
