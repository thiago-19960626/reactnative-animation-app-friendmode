import { Colors } from '../../constants';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default {
    mapview: {
        width: width,
        height: height
    },

    bottomContainer: {
        position: 'absolute',
        left: 0,
        bottom: 10,
        width: width,
        alignItems: 'center',
        justifyContent: 'center'
    },

    bottomBtnContainer: {
        width: 100,
        height: 100
    },

    bottomBtn: {
        width: 100,
        height: 100,
        backgroundColor: Colors.white,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0
    },

    bottomBtnText: {
        fontSize: 26,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        color:  Colors.main,
        lineHeight: 26
    }
}