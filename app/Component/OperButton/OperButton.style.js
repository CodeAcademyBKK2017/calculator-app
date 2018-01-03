import React,{StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
		flex: 1,
		width: '100%',
		flexDirection: 'row',
		marginTop: 10,
		marginBottom: 10,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center'
	},
	btnStyle: {
		width: 30,
		height: 30,
		marginLeft: 5,
		marginRight: 5,
		backgroundColor: 'black',
		borderRadius: 25,
		justifyContent: 'center',
		alignItems: 'center'
	},
	btnFuncStyle: {
		color: 'white'
	}
});