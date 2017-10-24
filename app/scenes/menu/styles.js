import { Colors } from '../../constants';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default {
    container: {
        backgroundColor: Colors.main
    },

    header: {
        backgroundColor: 'transparent',
        borderBottomWidth: 0
    },

    title: {
        color: '#FFF',
        letterSpacing: 0.81,
        fontSize: 16,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        opacity: 0.6
    },

    closeIcon: {
        fontSize: 35,
        color: '#FFF'
    },

    body: {
        marginLeft: 16,
        marginRight: 16,
        width: width - 32,
        height: height - 128,
        alignItems: 'center',
        justifyContent: 'center'
    },

    btn: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },

    btnText: {
        fontSize: 37,
        lineHeight: 50,
        color: '#FFF',
        letterSpacing: 2.1,
        fontFamily: 'helvetica',
        fontWeight: 'normal'
    }
}