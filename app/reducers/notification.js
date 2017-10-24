const initialState = {
    refresh: false,
    scan: false,
    play: false,
    sessioncheating: false,
    sessionphoto: false,
    sessioninvite: false
}

function notification(state = initialState, action){
    switch(action.type){
        case 'showRefresh':
            return {
                ...state,
                refresh: action.data
            };
        case 'showScan':
            return {
                ...state,
                scan: action.data
            }
        case 'showPlay':
            return {
                ...state,
                play: action.data
            }
        case 'showSessionCheating':
            return {
                ...state,
                sessioncheating: action.data
            }
        case 'showSessionPhoto':
            return {
                ...state,
                sessionphoto:  action.data
            }

        case 'showSessionInvite':
            return {
                ...state,
                sessioninvite: action.data
            }
        default:
            return state;
    }
}

export default notification;