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
        zIndex: 1000
    },

    refreshBtn: {
        position: 'absolute',
        top: 395,
        right: (width - 76 - width/4)/2,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        width: 31,
        height: 57
    },

    refreshIcon: {
        width: 31,
        height: 57
    },

    tipContainer: {
        backgroundColor: '#3d3d3d',
        borderRadius: 20,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        position: 'absolute',
        top: 330,
        right: ((width - 76 - width/4)/2) - 75 + 16.5,
        zIndex: 1000
    },

    tipText: {
        color: Colors.main,
        fontSize: 13,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        marginBottom: 5
    },

    tipArrow: {
        borderTopWidth: 15,
        borderTopColor: '#3d3d3d',
        borderLeftWidth: 14,
        borderLeftColor: 'transparent',
        borderRightWidth: 14,
        borderRightColor: 'transparent',
        marginBottom: -20
    }
}