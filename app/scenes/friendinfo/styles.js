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

    username: {
        fontSize: 16,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        color: '#D7D3C5',
        textAlign: 'center'
    },

    profileContainer: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 40
    },

    profileWrapContainer: {
        flexDirection: 'row',
        marginLeft: 30
    },

    profileWrapper: {
        width: 179,
        height: 179,
        position: 'relative'
    },

    profileWrapper1: {
        width: 159,
        height: 159,
        position: 'relative',
        marginLeft: -30
    },

    profile1: {
        width: 150,
        height: 150
    },

    profile: {
        width: 170,
        height: 170
    },

    profilePercentContainer: {
        position: 'absolute',
        bottom: 25,
        left: -10,
        width: 47,
        height: 47,
        backgroundColor: 'rgba(0,0,0,0.05)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 23.5,
        borderWidth: 6,
        borderColor: 'rgba(0,0,0,0.05)'
    },

    profilePercentWrapper: {
        width: 35,
        height: 35,
        backgroundColor: '#3d3d3d',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 17.5
    },

    profilePercentText: {
        color: Colors.main,
        fontSize: 12,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        letterSpacing: 0.67
    },

    tabBtnText: {
        fontFamily: 'helvetica',
        fontSize: 13,
        fontWeight: 'normal',
        color: '#D7D3C5'
    },

    tabBtn: {
        borderBottomColor: 'transparent',
        borderBottomWidth: 5,
        borderRadius: 0
    },

    tabActiveBtn: {
        borderBottomColor: 'rgba(0,0,0,0.03)',
        borderBottomWidth: 5,
        borderRadius: 0
    },

    item: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20
    },

    itemIcon: {
        width: 24,
        height: 24
    },

    itemIcon1: {
        width: 24,
        height: 22
    },

    itemText1: {
        fontSize: 50,
        fontWeight: 'normal',
        fontFamily: 'helvetica',
        color: Colors.main
    },

    itemText2: {
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        fontSize: 13.4,
        color: '#3d3d3d',
        opacity: 0.5
    },

    itemContainer: {
        width: width
    }
}