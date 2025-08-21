import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	screen: {
		flex: 1,
        gap: 16,
		justifyContent: 'flex-start',
		alignItems: 'center',
        padding: 24,
        paddingTop: 64,
        backgroundColor: '#0e162dff'
	},
    section: {
        display: 'flex',
        gap: 16,
        width: '100%',
        padding: 16,
        borderRadius: 16,
        backgroundColor: '#141f41ff'
    },
    sectionMain: {
        display: 'flex',
        gap: 16,
        width: '100%',
        padding: 32,
        paddingTop: 64,
        paddingBottom: 64,
        borderRadius: 16,
        backgroundColor: '#0e162dff'
    },
    text: {
        color: 'white',
        fontSize: 16,
    },
    textBold: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    textBig: {
        color: 'white',
        fontSize: 32,
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
    buttonHovering: {
        position: 'absolute',
        bottom: 32,
        right: 32,
        width: 48,
        height: 48,
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3c8ce1ff',
        borderRadius: 48,
    },
    pressed: {
        backgroundColor: '#67a7ebff',
    },
    textInput: {
        color: 'white',
        fontSize: 16,
        padding: 8,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: '#27314cff',
        borderRadius: 16,
    },
    textInputCta: {
        color: 'white',
        fontSize: 40,
        textAlign: 'center',
    }
})