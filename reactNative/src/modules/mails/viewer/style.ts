import { StyleSheet } from 'react-native';
import Color from '../../../theme/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Color.LIGHT_GREY,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    paddingBottom: 20,
  },
  navigation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metas: {
    marginLeft: 20,
  },
  name: {
    color: Color.DARK_GREY,
    fontWeight: 'bold',
  },
  email: {
    color: Color.DARK_GREY,
    marginTop: 5,
  },
  time: {
    color: Color.MEDIUM_GREY,
  },
  subject: {
    color: Color.DARK_GREY,
    fontWeight: 'bold',
    fontSize: 22,
    paddingLeft: 30,
    paddingRight: 50,
    paddingTop: 10,
    paddingBottom: 30,
  },
  body: {
    paddingBottom: 200,
  },
  bodyPart: {
    backgroundColor: 'white',
    marginBottom: 20,
  },
  textBody: {
    padding: 20,
  },
});
