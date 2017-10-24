import { Colors } from '../../../constants';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default {
    container: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        left: 0,
        top: 0,
        width: width,
        height: height,
        zIndex: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },

    content: {
        backgroundColor: Colors.white,
        paddingTop: 20,
        paddingBottom: 20,
        width: width,
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        fontSize: 16,
        color: '#878787'
    },

    avatarContainer: {
        width: 112,
        height: 112,
        marginTop: 20,
        marginBottom: 20,
        position: 'relative'
    },

    profile: {
        width: 102,
        height: 102
    },

    initialNameText: {
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        fontSize: 36,
        color: Colors.white,
        letterSpacing: 2,
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'transparent',
        lineHeight:112,
        width: 112,
        textAlign: 'center'
    },

    title: {
        fontFamily: 'helvetica',
        fontSize: 22,
        fontWeight: 'normal',
        color: '#878787',
        letterSpacing: 0.56
    },

    desc: {
        textAlign: 'center',
        fontFamily: 'helvetica',
        fontSize: 16,
        fontWeight: 'normal',
        opacity: 0.71,
        paddingLeft: 15,
        paddingRight: 15,
        color: '#878787',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10
    },

    rightItem: {
        position: 'absolute',
        top: 0,
        right: 0,
        paddingLeft: 12,
        paddingRight: 12
    },

    icon: {
        color: Colors.main,
        fontSize: 30
    }
}