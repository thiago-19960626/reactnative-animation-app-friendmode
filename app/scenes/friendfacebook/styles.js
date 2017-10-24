import { Colors } from '../../constants';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default {
    container: {
        backgroundColor: Colors.white
    },

    header: {
        backgroundColor: '#2E4686',
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
        letterSpacing: 0.66
    },

    headerIcon: {
        color: Colors.white,
        fontSize: 40
    },

    syncContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: '#F5F0E0',
        paddingLeft: 20,
        paddingRight: 15
    },

    syncText1: {
        fontFamily: 'helvetica',
        fontSize: 16,
        fontWeight: 'normal',
        color: '#8B8982'
    },

    userTitle: {
        fontFamily: 'helvetica',
        fontSize: 16,
        letterSpacing: 0.81,
        color: '#8B8982',
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 15
    },

    emptyContainer: {
        width: width,
        alignItems: 'center',
        paddingTop: 70
    },

    emptyText: {
        fontSize: 16,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        letterSpacing: 0.81,
        color: '#878787',
        letterSpacing: 0.81,
        textAlign: 'center'
    },

    divider: {
        height: 20
    },

    footer: {
        height: 110
    },

    footerBtn: {
        backgroundColor: '#2E4686',
        width: width,
        height: 110,
        borderRadius: 0
    },

    footerBtnText: {
        fontSize: 25,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        color: Colors.white,
        lineHeight: 25,
        letterSpacing: 1.26
    },

    itemText1: {
        color: '#8B8982',
        fontSize: 16,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        letterSpacing: 0.41
    },

    itemAvatar: {
        width: 42,
        height: 42,
        borderRadius: 21
    },

    itemProgress: {
        height: 5,
        backgroundColor: '#EBE6D7',
        marginRight: 20,
        marginTop: 8,
        marginBottom: 8
    },

    itemProgressValue: {
        height: 5,
        backgroundColor: '#8B8982'
    },

    listItem: {
        paddingTop: 10,
        paddingBottom: 10
    },

    listItem1: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#FCF5E3'
    },

    itemBody: {
        borderBottomWidth: 0
    },

    itemText2: {
        fontFamily: 'helvetica',
        fontSize: 12,
        fontWeight: 'normal',
        color: '#878787',
        letterSpacing: 0.61
    },

    itemIcon: {
        color: '#878787',
        fontSize: 16
    },

    itemRight: {
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0
    },

    footerdrop: {
        width: width,
        height: 136 * ( width / 750),
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: 100
    }
}