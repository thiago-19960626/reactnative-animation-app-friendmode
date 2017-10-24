import { Colors } from '../../constants';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default {
    container: {
        backgroundColor: Colors.main
    },

    header: {
        backgroundColor:  'transparent',
        borderBottomWidth: 0
    },

    headerLeft: {
        flex: 0.2
    },

    headerRight: {
        flex: 0.2
    },

    title: {
        color: '#fff',
        letterSpacing: 0.81,
        fontSize: 16,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        opacity: 0.6
    },

    closeIcon: {
        fontSize: 35,
        color: '#fff'
    },

    mainContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    topText: {
        color: '#05AF7F',
        fontSize: 16,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        letterSpacing: 0.89
    },

    tipContainer: {
        marginTop: 20,
        backgroundColor: '#3D3D3D',
        borderRadius: 20,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },

    tipText: {
        color: Colors.main,
        fontSize: 13,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        marginBottom: 5
    },

    tipArrow: {
        borderTopWidth: 15,
        borderTopColor: '#3D3D3D',
        borderLeftWidth: 14,
        borderLeftColor: 'transparent',
        borderRightWidth: 14,
        borderRightColor: 'transparent',
        marginBottom: -20
    },

    ageText: {
        marginTop: 20,
        fontSize: 37,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        color: Colors.white
    },

    ageValueText: {
        marginTop: 20,
        fontSize: 81,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        color: '#159370'
    },

    divider: {
        backgroundColor: '#3d3d3d',
        height: 5,
        width: (width - 80),
        opacity: 0.05
    },

    genderContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        flexDirection: 'row'
    },

    genderBtn: {
        width: 102,
        height: 98,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0
    },

    genderIcon: {
        width: 102,
        height: 98,
        opacity: 0.5
    },

    genderDivider: {
        fontSize: 16,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        letterSpacing: 0.91,
        color: '#05AF7F',
        marginLeft: 5,
        marginRight: 5,
        opacity: 0.7
    },

    activeGenderIcon: {
        opacity: 1
    },

    doneBtnContainer: {
        marginTop: 20,
        width: 106,
        height: 106,
        borderRadius: 53,
        borderWidth: 3,
        borderColor: 'rgba(0,0,0,0.1)'
    },

    doneBtn: {
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center'
    },

    doneBtnText: {
        fontSize: 16,
        fontWeight: 'normal',
        fontFamily: 'helvetica',
        color: Colors.main,
        letterSpacing: 0.66
    }
}