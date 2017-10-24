import { Colors } from '../../../constants';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default {
    container: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        position: 'absolute',
        left: 0,
        top: 0,
        width: width,
        height: height,
        zIndex: 100
    },

    list: {
        backgroundColor: Colors.white,
        shadowOffset: {x: 0, y: -3},
        shadowColor: 'black',
        shadowOpacity: 0.6,
        shadowRadius: 4
    },

    listItem: {        
        marginLeft: 0,
        paddingLeft: 15,
        marginTop: 20
    },

    avatar: {
        width: 55,
        height: 55
    },

    title: {
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        fontSize: 16,
        color: '#878787',
        letterSpacing: 0.41
    },

    desc: {
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        fontSize: 16,
        color: '#878787',
        opacity: 0.71
    },

    icon: {
        color: Colors.main,
        fontSize: 30
    },

    rightItem: {
        position: 'absolute',
        top: 0,
        right: 0,
        paddingLeft: 12,
        paddingRight: 12
    }
}