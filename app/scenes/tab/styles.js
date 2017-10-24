import { Colors } from '../../constants';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default {
    container: {
        backgroundColor: Colors.white
    },
    footer: {
        height: 60,
        borderTopWidth: 0,
        backgroundColor: Colors.white
    },

    footerContainer: {
        backgroundColor: '#3d3d3d',
        width: width,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 4,
        shadowOffset: {x: 0, y : 4},
        shadowColor: 'black',
        shadowOpacity: 0.4
    },

    tabBtn: {
        height: 60
    },

    tabBtnIcon: {
        width: 23,
        height: 23
    },

    tabBtnIcon1: {
        width: 23,
        height: 6
    },

    tabBtnIcon2: {
        width: 21,
        height: 21
    },

    playBtnContainer: {
        width: 108,
        height: 108,
        marginTop: -60,
        backgroundColor: 'rgba(0,0,0,0.04)',
        borderRadius: 54,
        padding: 5
    },

    playBtn: {
        width: 98,
        height: 98,
        backgroundColor: '#03FAB4',
        borderRadius: 49,
        alignItems: 'center',
        justifyContent: 'center'        
    },

    playBtnText: {
        fontSize: 26,
        fontFamily: 'helvetica',
        fontWeight: 'bold',
        color: '#3d3d3d',
        lineHeight: 26
    }
}