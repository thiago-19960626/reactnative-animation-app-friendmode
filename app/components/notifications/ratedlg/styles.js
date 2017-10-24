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

    starContainer: {
        width: 250,
        height: 35,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 40,
        marginBottom: 40
    },

    subtitle: {
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        fontSize: 16,
        color: '#878787',
        opacity: 0.71,
        textAlign: 'center',
        marginLeft: 40,
        marginRight: 40
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
    },

    starIcon: {
        width: 35,
        height: 35
    }
}