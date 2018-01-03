import React,{StyleSheet} from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	boxInput: {
		flex: 3.5,
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'flex-end'
	},
	boxResult:{
		flex: 5.5,
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingTop: 25
	},
	btnClearStyle:{
		width : 120,
		height: 40,
		backgroundColor: 'blue',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50
	},
	btnTextClearStyle: {
		color: 'white',
	}
});