import { Colors } from '../../constants';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default {
    headerLeft: {
        flex: 0.3
    },

    headerRight: {
        flex: 0.3
    },

    webview: {
        width: width,
        height: height - 64
    }
}