import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	screen: {
		flex: 1,
        gap: 16,
		justifyContent: 'center',
		alignItems: 'center',
        padding: 16,
        backgroundColor: '#0e162dff'
	},
    section: {
        display: 'flex',
        gap: 16,
        width: '100%',
        padding: 16,
        borderRadius: 16,
        backgroundColor: '#1d2c51ff'
    },
    text: {
        color: 'white',
    },
    textBold: {
        color: 'white',
        fontWeight: 'bold',
    },
    button: {
        padding: 8,
        paddingLeft: 16,
        paddingRight: 16,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#3c8ce1ff',
        borderRadius: 16,
    },
    textInput: {
        color: 'white',
        padding: 4,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: '#35446dff',
        borderRadius: 16,
    },
    textInputCta: {
        fontSize: 24,
    }
})