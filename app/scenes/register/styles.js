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
        color: Colors.white,
        letterSpacing: 0.66,
        opacity: 0.8
    },

    headerIcon: {
        color: Colors.white,
        fontSize: 40
    },

    content: {
        paddingLeft: 20,
        paddingRight: 20
    },

    btn: {
        height: 190,
        width: (width - 40),
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0
    },

    fbBtnContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    fbIcon: {
        width: 40,
        height: 65
    },

    twIcon: {
        width: 61,
        height: 54
    },

    urIcon: {
        width: 76,
        height: 58
    },

    btnText: {
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        fontSize: 16,
        letterSpacing: 0.81,
        color: Colors.white,
        marginTop: 20,
        lineHeight: 19
    },

    divider: {
        backgroundColor: '#03FAB4',
        height: 5,
        width: (width - 40)
    }
}