import {
  StyleSheet
} from 'react-native';
    
const operInputStyles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20
  },
  inputBox1: {
    minWidth: '20%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    backgroundColor: 'white',
    padding: 10,
    textAlign: 'center'
  }
});
    
export default operInputStyles;