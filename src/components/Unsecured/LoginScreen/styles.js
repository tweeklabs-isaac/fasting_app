import { StyleSheet } from 'react-native';
import Colors from '../../../utils/colors';

export default StyleSheet.create({
  bgImage: { width: '100%', height: '100%' },
  appLogo: {
    alignSelf: 'center',
  },
  title: {
    textAlign: 'center',
    paddingVertical: 24,
    fontFamily: 'Interstate Bold',
    fontSize: 30,
    color: Colors.light_text2,
  },
  paragraph: {
    color: Colors.light_text1,
    paddingHorizontal: '10%',
    textAlign: 'center',
    marginBottom: 20,
  },
  sav: {
    justifyContent: 'center',
    height: '100%',
    backgroundColor: Colors.dark_bg,
  },
  google: { backgroundColor: '#db3236' },
});
