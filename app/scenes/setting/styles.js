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
        alignItems: 'center',
        justifyContent: 'center'
    },

    photoContainer: {
        marginTop: 40,
        width: 170,
        height: 170,
        backgroundColor: Colors.main,
        borderRadius: 85,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },

    photo: {
        width: 156,
        height: 156,
        borderRadius: 78
    },

    photoEditBtn: {
        position: 'absolute',
        left: 7,
        top: 7,
        width: 156,
        height: 156,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 85,
        alignItems: 'center',
        justifyContent: 'center'
    },

    photoIcon: {
        fontSize: 25
    },

    formContainer: {
        paddingLeft: 25,
        paddingRight: 25,
        marginTop: 30
    },

    formItem: {
        borderBottomWidth: 5,
        borderBottomColor: 'rgba(0,0,0,0.05)',
        height: 40,
        marginBottom: 20,
    },

    formItem1: {
        borderBottomWidth: 0,
        height: 40,
        marginBottom: 20
    },

    formItem2: {
        borderBottomWidth: 5,
        borderBottomColor: 'rgba(0,0,0,0.05)',
        height: 40,
        marginBottom: 20,
        zIndex: 100
    },

    formInput: {
        textAlign: 'right',
        height: 40,
        fontFamily: 'helvetica',
        fontSize: 16,
        fontWeight: 'normal',
        color: '#878787',
        opacity: 0.7
    },

    itemLabel: {
        fontFamily: 'helvetica',
        fontSize: 16,
        fontWeight: 'normal',
        color: '#878787'
    },

    itemBtn: {
        paddingLeft: 0,
        paddingRight: 0,
        zIndex: 1000
    },

    itemBtnText: {
        color: Colors.main
    },

    bottomContainer: {
        paddingLeft: 25,
        paddingRight: 25,
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    bottomText: {
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        fontSize: 16,
        color: '#878787',
        textAlign: 'center',
        marginTop: 20
    },

    bottomBtn: {
        borderWidth: 4,
        borderColor: 'rgba(0,0,0,0.05)',
        backgroundColor: 'transparent',
        height: 64,
        width: (width - 70)/2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 0
    },

    bottomBtn1: {
        borderWidth: 4,
        borderColor: 'rgba(0,0,0,0.05)',
        backgroundColor: 'transparent',
        height: 98,
        width: 98,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 49
    },

    bottomActiveBtn: {
        borderWidth: 4,
        borderColor: Colors.main,
        backgroundColor: Colors.main
    },

    bottomBtnText: {
        color: 'rgba(0,0,0,0.4)',
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        fontSize: 16
    },

    bottomActiveBtnText: {
        color: Colors.white
    },

    bottomDivider: {
        width: 20
    },

    bottomFbIcon: {
        width: 22.57,
        height: 36.86
    },

    bottomTwIcon: {
        width: 34.09,
        height: 30.69
    },

    bottomText1: {
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        fontSize: 16,
        color: Colors.main,
        textAlign: 'center',
        marginTop: 20
    },

    bottomBtnIcon: {
        color: Colors.main,
        fontSize: 35
    },

    bottomBtnText1: {
        color: Colors.main,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        fontSize: 16        
    },

    bottomBtn1Container: {
        width: 98,
        height: 98
    },

    backdrop: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.7)',
        zIndex: 0
    }

}