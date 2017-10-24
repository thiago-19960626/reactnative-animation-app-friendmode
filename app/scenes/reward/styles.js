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

    rewardEmptyContainer: {
        width: width,
        height: 233,
        backgroundColor: Colors.main,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 26,
        paddingRight: 26
    },

    rewardEmptyText: {
        fontSize: 16,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        color: Colors.white,
        letterSpacing: 0.81,
        textAlign: 'center'
    },

    expiredContainer: {
        marginTop: 30
    },

    expiredText: {
        fontSize: 16,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        color: Colors.main,
        letterSpacing: 0.81,
        textAlign: 'center',
        marginBottom: 30,
        opacity: 0.7
    },

    rewardContainer: {
        width: width,
        height: 233,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },

    rewardImage: {
        width: width,
        height: 233
    },

    rewardBackdrop: {
        width: width,
        height: 233,
        backgroundColor: Colors.main,
        opacity: 0.9,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 26,
        paddingRight: 26
    },

    rewardTitle: {
        color: Colors.white,
        fontSize: 25,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        letterSpacing: 1.26
    },

    rewardDes: {
        color: Colors.white,
        fontSize: 16,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        letterSpacing: 0.81,
        marginTop: 8,
        marginBottom: 20
    },

    rewardBtnContainer: {
        width: 90
    },

    viewBtn: {
        borderColor: Colors.white,
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
        width: 90,
        height: 40,
        backgroundColor: 'transparent',
        borderRadius: 0
    },

    viewBtnText: {
        color: Colors.white,
        fontSize: 16,
        fontFamily: 'helvetica',
        fontWeight: 'normal'
    },

    expiredItem: {
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0,
        marginBottom: 15
    },

    expiredItemText: {
        fontSize: 25,
        width: 250,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        letterSpacing: 1.26,
        paddingLeft: 26,
        paddingRight: 26,
        textAlign: 'center',
        color: Colors.main,
        opacity: 0.6,
        lineHeight: 25
    }
}