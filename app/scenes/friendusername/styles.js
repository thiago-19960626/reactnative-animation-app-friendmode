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
        alignItems: 'center'        
    },

    emptyText: {
        width: 200,
        textAlign: 'center',
        fontFamily: 'helvetica',
        fontSize: 16,
        letterSpacing: 0.81,
        color: '#8B8982',
        marginTop: 100
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
    }
}