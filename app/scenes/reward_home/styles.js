import { Colors } from '../../constants';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default {
    container: {
       
    },

    backdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        width: width,
        height: height
    },

    backdrop1: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        width: width,
        height: height,
        backgroundColor: 'rgba(0,0,0,0.6)'
    },

    header: {
        backgroundColor: 'transparent',
        borderBottomWidth: 0
    },

    headerIcon: {
        color: Colors.white
    },

    title: {
        fontSize: 13,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        color: Colors.white,
        letterSpacing: 0.66
    },

    text1: {
        fontSize: 48,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        color: Colors.white,
        textAlign: 'center',
        marginTop: 20
    },

    text2: {
        fontSize: 16,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        color: Colors.white,
        letterSpacing: 0.81,
        marginTop: 20,
        textAlign: 'center'
    },

    locationBtnText: {
        color: Colors.white
    },

    pin: {
        color: Colors.white,
        fontSize: 18
    },

    mainContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    mainText1: {
        marginTop: 20,
        backgroundColor: Colors.white,
        color: Colors.main,
        fontSize: 16,
        fontWeight: 'normal',
        fontFamily: 'helvetica',
        textAlign: 'center',
        width: 250,
        paddingTop:  15,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15
    },

    mainText2: {
        marginTop: 20,
        color: Colors.white,
        fontSize: 16,
        fontWeight: 'normal',
        fontFamily: 'helvetica',
        textAlign: 'center',
        width: 250,
        letterSpacing: 1.17        
    },

    mainText3: {
        marginTop: 30,
        color: Colors.white,
        fontSize: 13,
        fontWeight: 'normal',
        fontFamily: 'helvetica',
        textAlign: 'center',
        width: 250,
        letterSpacing: 0.66
    },

    bottomBtnContainer: {
        width: 100,
        height: 100,
        margin: 10
    },

    bottomBtn: {
        width: 100,
        height: 100,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
        borderRadius: 50
    },

    bottomBtnText: {
        fontSize: 26,
        color: Colors.main,
        textAlign: 'center',
        letterSpacing: 1.07,
        fontWeight: 'normal',
        fontFamily: 'helvetica',
        lineHeight: 26
    }
}