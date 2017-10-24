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

    title: {
        fontSize: 13,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        color: '#3D3D3D',
        opacity: 0.7,
        letterSpacing: 0.66
    },

    headerIcon: {
        color: Colors.main,
        fontSize: 40
    },

    listItem: {
        marginLeft: 0,
        paddingLeft: 22,
        height: 103,
        borderBottomWidth: 0
    },

    listItem1: {
        backgroundColor: '#FCF5E3',
        marginLeft: 0,
        paddingLeft: 22,
        height: 103,
        borderBottomWidth: 0
    },

    listItemIcon: {
        width: 55,
        height: 55,
        marginRight: 38
    },

    listItemTitle: {
        fontSize: 16,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        color: '#878787',
        marginLeft: 0,
        marginBottom: 1
    },

    listItemDes: {
        fontSize: 16,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        color: '#878787',
        opacity: 0.7,
        marginLeft: 0,
        marginBottom: 3
    },

    listItemTime: {
        fontSize: 13,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        color: '#878787',
        opacity: 0.7,
        marginLeft: 0
    },

    listItemTimeIcon: {
        fontSize: 12,
        color: '#000'
    },

    headerdrop: {
        width: width,
        height: 136 * (width / 750),        
        position: 'absolute',
        top: 64,
        left: 0,
        zIndex: 100
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