import { StyleSheet } from 'react-native';
import Color from '../../../theme/colors';

export default StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  body: {
    flex: 1,
  },
  from: {
    fontWeight: 'bold',
  },
  subject: {
    marginTop: 5,
  },
  metas: {
    width: 100,
    alignItems: 'flex-end',
  },
  receivedAt: {
    color: Color.MEDIUM_GREY,
  },
});
