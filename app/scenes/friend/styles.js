import { Colors } from '../../constants';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default {
    container: {
        backgroundColor:  Colors.white
    },

    header: {
        backgroundColor: 'transparent',
        borderBottomWidth: 0
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

    searchContainer: {
        height: 30
    },

    searchInput: {
        backgroundColor: '#FCF5E3',
        height: 30,
        textAlign: 'center',
        color: '#878787',
        fontFamily: 'helvetica',
        fontSize: 12,
        fontWeight: 'normal'
    },

    itemText1: {
        color: Colors.main,
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
        backgroundColor: '#5A5A5A',
        marginRight: 20,
        marginTop: 8,
        marginBottom: 8
    },

    itemProgressValue: {
        height: 5,
        backgroundColor: Colors.main
    },

    item: {
        paddingTop: 10,
        paddingBottom: 10
    },

    item1: {
        backgroundColor: '#FCF5E3'
    },

    itemBody: {
        borderBottomWidth: 0
    },

    itemIconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 50
    },

    itemIconText: {
        fontSize: 12,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        color: '#878787',
        letterSpacing: 0.61
    },

    itemIcon: {
        color: '#878787',
        fontSize: 17
    },

    bottomBtn: {
        backgroundColor: Colors.main,
        width: width,
        borderRadius: 0,
        height: 56
    },

    bottomBtnText: {
        fontFamily: 'helvetica',
        fontSize: 25,
        fontWeight: 'normal',
        lineHeight: 25
    },

    footer: {
        height: 113
    },

    footerDivider: {
        height: 1,
        backgroundColor: '#979797',
        opacity: 0.6
    },

    mainContainer: {
        width: width,
        height: height - 64 - 113,
        alignItems: 'center',
        justifyContent: 'center'
    },

    mainText1: {
        fontSize: 16,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        letterSpacing: 0.81,
        color: '#878787'
    },

    bottomBtn1: {
        backgroundColor: Colors.main,
        width: width,
        borderRadius: 0,
        height: 113
    }
}