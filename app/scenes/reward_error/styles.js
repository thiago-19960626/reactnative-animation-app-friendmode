import { Colors } from '../../constants';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default {
    container: {
        backgroundColor: Colors.white
    },

    header: {
        backgroundColor: 'transparent',
        borderBottomWidth: 0
    },

    headerLeft:  {
        flex: 0.2
    },

    headerRight: {
        flex: 0.2
    },

    title: {
        color: '#8B8982',
        letterSpacing: 0.81,
        fontSize: 16,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        opacity: 0.6
    },

    closeIcon: {
        fontSize: 35,
        color: Colors.main
    },

    mainContainer: {
        width: width,
        height: (height - 128),
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },

    text1: {
        color: Colors.main,
        fontSize: 37,
        fontWeight: 'normal',
        fontFamily: 'helvetica',
        letterSpacing: 2.1,
        marginBottom: 10
    },

    text2: {
        color: '#BFBAAC',
        fontSize: 16,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        letterSpacing: 0.89,
        width: 250,
        textAlign: 'center'
    },

    bottomContainer: {
        position: 'absolute',
        bottom: -30,
        left: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: width
    },

    bottomBtnContainer: {
        width: 110,
        height: 110,
        borderRadius: 55,
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: 5
    },

    bottomBtn: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0
    },

    bottomBtnText: {
        color: Colors.main,
        fontSize: 16,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        textAlign: 'center'
    },

    bottomDivider: {
        width: 5
    }
}