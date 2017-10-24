import { Colors } from '../../constants';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default {
    header: {
        backgroundColor: 'transparent',
        borderBottomWidth: 0
    },

    title: {
        fontSize: 16,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        color: '#3d3d3d',
        letterSpacing: 0.81,
        opacity: 0.8
    },

    emptyContainer: {
        width: width,
        height: height
    },

    mainContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width
    },

    icon1: {
        width: 25,
        height: 28
    },

    icon2: {
        width: 28,
        height: 28
    },

    icon3: {
        width: 29,
        height: 26
    },

    valueText: {
        fontSize: 60,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        color: '#0BE2A5'
    },

    fieldText: {
        fontSize: 16,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        color: '#3d3d3d',
        opacity: 0.5
    },

    divider: {
        height: 4,
        width: width - 60,
        backgroundColor:  'rgba(0,0,0,0.04)',
        marginTop: 15,
        marginBottom: 30
    },

    bottomText: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'rgba(0,0,0,0.05)'
    },

    footer: {
        marginBottom: 50,
        height: 20,
        backgroundColor: 'transparent',
        borderTopWidth: 0
    },

    bottomBtn: {
        width: 12,
        height: 12,
        borderRadius: 6,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        backgroundColor: 'rgba(0,0,0,0.1)'
    },

    bottomBtnActive: {
        backgroundColor: 'rgba(0,0,0,0.4)'
    },

    bottomDivider: {
        width: 5
    },

    gridContainer: {        
        flexWrap: 'wrap',  
        flexDirection :'row',
        marginLeft: 30,
        marginRight: 30,
        width: width - 60,
        marginTop: 20  
    },

    gridItem: {
        width: (width - 60)/ 3,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 4,
        borderBottomColor: 'rgba(0,0,0,0.05)',
        paddingBottom: 10,
        paddingTop: 15,
        position: 'relative'
    },

    gridIcon: {
        width: 55,
        height: 55,
        marginBottom: 8
    },

    gridText: {
        fontSize: 13,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        color: '#3d3d3d',
        opacity: 0.5
    },

    note: {
        color: '#3d3d3d',
        opacity: 0.5,
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        fontSize: 10,
    },

    noteContainer: {
        position: 'absolute',
        right: 15,
        top: 15,        
        backgroundColor: '#fff',
        borderRadius: 11,
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',        
        shadowColor: 'black',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.2
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
        bottom: 70,
        left: 0,
        zIndex: 100
    },

    loyaltyContainer: {
        width: 200,
        height: 200,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center'
    },

    totalText: {
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        fontSize: 16,
        color: '#3d3d3d',
        letterSpacing: 0.89,
        opacity: 0.7
    },

    totalNumber: {
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        fontSize: 65,
        color: Colors.main,
        letterSpacing: -1,
        position: 'relative'
    },

    clockIcon: {
        fontSize: 16,
        color: Colors.main,
        marginTop: 10,
        marginLeft: 5      
    },

    iconContainer: {
        flexDirection: 'row'
    },

    progressBarContainer: {
        width: 220,
        height: 220,
        position: 'relative',
        marginBottom: 20
    },

    progressValueContainer: {
        width: 50,
        height: 50,
        backgroundColor: '#ebe6d7',
        borderRadius: 25,
        position: 'absolute',
        bottom: 30,
        left: -5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    progressValueWrap: {
        width: 40,
        height: 40,
        backgroundColor: '#3d3d3d',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'relative'
    },

    progressValueText: {
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        fontSize: 16,
        color: Colors.main,
        letterSpacing: 0.89
    },

    progressPercentText: {
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        fontSize: 8,
        color: Colors.main,
        position: 'absolute',
        right: 3,
        top: 12,
        backgroundColor: 'transparent'
    },

    text1: {
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        fontSize: 16,
        color: '#3d3d3d',
        opacity: 0.6,
        letterSpacing: 0.89,
        textAlign: 'center',
        marginBottom: 20
    },

    text2: {
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        fontSize: 65,
        color: Colors.main,
        letterSpacing: 1.74,
        textAlign: 'center'
    },

    image1Container: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    image1: {
        width: 236,
        height: 98,
        marginTop: 30
    },

    text3: {
        fontFamily: 'helvetica',
        fontWeight: 'normal',
        fontSize: 16,
        color: '#3d3d3d',
        opacity: 0.7,
        letterSpacing: 0.89,
        textAlign: 'center',
        marginTop: 20
    },

    nearbyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 4,
        borderTopColor: Colors.white,
        position: 'relative'
    },

    nearbyActiveContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 4,
        borderTopColor: 'rgba(61,61,61,0.05)',
        position: 'relative'
    },

    refresh_icon: {
        width: 22.55,
        height: 19,
        position: 'absolute',
        left: 0,
        top: 20
    },

    scan_icon: {
        width: 18,
        height: 17,
        position: 'absolute',
        right: 0,
        top: 20
    },

    nearbyContainer2: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 50
    },

    refreshBtnContainer1: {
        width: 45,
        height: 59,
        marginRight: (width/4)
    },

    refreshBtn2: {
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        width: 45, 
        height: 59
    },

    refresh_icon2: {
        width: 45,
        height: 59
    },

    scanBtnContainer1: {
        width: 31,
        height: 57
    },

    scanBtn2: {
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        width: 31,
        height: 57
    },

    scan_icon2: {
        width: 31,
        height: 57
    }
}