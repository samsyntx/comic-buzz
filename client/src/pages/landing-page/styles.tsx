import { StyleSheet, Dimensions } from 'react-native';
import { colors } from 'src/static/global-styles';

const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    width: windowWidth,
  },
});
