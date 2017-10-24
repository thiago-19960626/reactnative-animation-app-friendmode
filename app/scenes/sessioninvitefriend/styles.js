import { Colors } from '../../constants';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default {
    container: {
        backgroundColor: '#FF714F'
    },

    header: {
        backgroundColor: 'transparent',
        borderBottomWidth: 0
    },

    qrIcon: {
        width: 34,
        height: 33
    },

    appIcon: {
        width: 121,
        height: 141,
        marginTop: 70
    },

    blockContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    timeText: {
        fontFamily: 'helvetica',
        fontSize: 85,
        fontWeight: 'normal',
        color: 'white',
        marginTop: 10
    },

    desc: {
        fontFamily: 'helvetica',
        fontSize: 13,
        fontWeight: 'normal',
        letterSpacing: 0.66,
        opacity: 0.75,
        color: 'white'
    },

    footer: {
        height: 130,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'transparent',
        borderTopWidth: 0
    },

    btnContainer: {
        width: 110,
        height: 110,
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 55
    },

    bottomDivider: {
        width: width / 10
    },

    btn: {
        width: 100,
        height: 100,
        backgroundColor: Colors.white,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        borderRadius: 50,
        marginLeft: 5,
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    btnIcon: {
        color: '#FF714F',
        fontSize: 40
    }
}