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

    headerLeft: {
        flex: 0.2
    },

    headerRight: {
        flex: 0.2
    },

    title: {
        fontSize: 13,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        color: '#3d3d3d',
        opacity: 0.7,
        letterSpacing: 0.66
    },

    headerIcon: {
        color: Colors.main,
        fontSize: 40
    },

    mainContainer: {
        width: width,
        alignItems: 'center',
        justifyContent: 'center'
    },

    fbIcon: {
        width: 41,
        height: 66,
        marginTop: 20
    },

    fbText: {
        fontSize: 25,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        color: '#D7D3C5',
        letterSpacing: 1.26,
        marginTop: 20,
        marginBottom: 35
    },

    divider: {
        backgroundColor: '#F5F0E0',
        height: 5,
        width: (width - 64)
    },

    twIcon: {
        width: 66,
        height: 66,
        marginTop: 20
    },

    urIcon: {
        width: 77,
        height: 58,
        marginTop: 20
    }
}