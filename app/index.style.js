import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  },
  operInputContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20
  },
  operButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;
