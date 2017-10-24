import { Colors } from '../../constants';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default {
    container: {
        backgroundColor:  Colors.main
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

    mainContainer: {
        alignItems: 'center'
    },

    avatarContainer: {
        width: 180,
        height: 180,
        backgroundColor: '#0DC490',
        borderRadius: 90,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        position: 'relative'
    },

    avatarImg: {
        width: 160,
        height: 160,
        borderRadius: 80
    },

    avatarCamera: {
        position: 'absolute',
        width: 180,
        height: 180,
        borderRadius: 90,
        backgroundColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center'
    },

    avatarCamera2: {
        position: 'absolute',
        width: 160,
        height: 160,
        borderRadius: 90,
        backgroundColor: '#FFFAE9',
        alignItems: 'center',
        justifyContent: 'center',
        left: 10,
        top: 10
    },

    cameraIcon: {
        fontSize: 25,
        color: Colors.main
    },

    cameraIcon2: {
        fontSize: 25,
        color: Colors.white
    },

    formContainer: {
        paddingLeft: 40,
        paddingRight: 40,
        marginTop: 20
    },

    formItem: {
        marginLeft: 0,
        borderBottomWidth: 0
    },

    input: {
        fontSize: 35,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        color: Colors.white,
        textAlign: 'center',
        letterSpacing: -1.48,
        paddingLeft: 0,
        paddingRight: 0
    },

    input1: {
        fontSize: 25,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        color: Colors.white,
        textAlign: 'center',
        letterSpacing: -0.85,
        paddingLeft: 0,
        paddingRight: 0
    },

    divider: {
        backgroundColor: 'rgba(61,61,61,0.1)',
        height: 5,
        width: (width - 80),
        marginBottom: 15
    },

    controlContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        flexDirection: 'row'
    },

    controlItem: {
        width: 9,
        height: 9,
        backgroundColor: '#393939',
        opacity: 0.1,
        borderRadius: 4.5,
        marginRight: 5
    },

    controlActiveItem: {
        width: 9,
        height: 9,
        backgroundColor: '#393939',
        opacity: 0.5,
        borderRadius: 4.5,
        marginRight: 7
    },

    controlBtnContainer: {
        width: 108,
        height: 108,
        backgroundColor: 'rgba(61,61,61,0.1)',
        borderRadius: 54,
        paddingLeft: 7,
        paddingTop: 7
    },

    controlBtn: {
        width: 94,
        height: 94,
        borderRadius: 47,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0
    },

    controlBtnIcon: {
        color: Colors.main,
        fontSize: 40
    },

    controlDivider: {
        width: 30
    },

    controlDisableBtn: {
        width: 94,
        height: 94,
        borderRadius: 47,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.5,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0
    },

    ageContainer: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    ageBtn: {
        fontSize: 40,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        color: Colors.white,
        textAlign: 'center',
        opacity: 0.8
    },

    ageActiveBtn: {
        fontSize: 40,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        color: Colors.white,
        textAlign: 'center'
    },

    ageDivider: {
        fontSize: 16,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        color: Colors.white,
        textAlign: 'center',
        opacity: 0.8,
        letterSpacing: 0.81,
        paddingLeft: 5,
        paddingRight: 5
    },

    ageText: {
        fontSize: 40,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        color: Colors.white,
        letterSpacing: -1.48,
        textAlign: 'center'
    },

    createBtnText: {
        fontSize: 16,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        color: Colors.main,
        letterSpacing: 0.66
    }
}