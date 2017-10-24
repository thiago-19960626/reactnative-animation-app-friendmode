import { Colors } from '../../../constants';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default{
    container: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        left: 0,
        top: 0,
        width: width,
        height: height,
        zIndex: 1000
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
        justifyContent: 'center',
        position: 'absolute',
        bottom: 15,
        left: (width - 220 - width / 10) / 2
    },

    icon: {
        color: '#FF714F',
        fontSize: 40
    },

    tipContainer: {
        backgroundColor: '#3d3d3d',
        borderRadius: 20,
        width: 180,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        position: 'absolute',
        bottom: 150,
        left: (width - 220 - width / 10) / 2 - 90 + 50,
        zIndex: 100
    },

    tipText: {
        color: Colors.main,
        fontSize: 13,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        marginBottom: 5,
        alignText: 'center'
    },

    tipArrow: {
        borderTopWidth: 15,
        borderTopColor: '#3d3d3d',
        borderLeftWidth: 14,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderRightWidth: 14,
        marginBottom: -20
    }
}