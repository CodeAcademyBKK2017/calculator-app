import {
  StyleSheet
} from 'react-native';
      
const operButtonStyles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20
  },
  operatorBox: {
    fontWeight: 'bold',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 20
  }
});
      
export default operButtonStyles;