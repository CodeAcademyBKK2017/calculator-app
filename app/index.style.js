import {
  StyleSheet
} from 'react-native';
      
const indexStyles = StyleSheet.create({
  containerInput: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20
  },
  containerOperator: {
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
      
export default indexStyles;