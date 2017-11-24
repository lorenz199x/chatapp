initialState = {
    id: '',
    text: '',
    createdAt: '',
    email: '',
    messages: []
}

function chatReducer (state = initialState.action) {
    switch (action.type) {
        case 'ADD_MESSAGE': {
            return {
                id: action._id,
                text: action.text,
                createdAt: action.createdAt,
                user: action.user
            }
        }

        case 'START_FETCHING_MESSAGES': {
            return {
                ...state,
            }
        }

        case 'RECEIVED_MESSAGES': {
            return {
                ...state
            }
        }
    }
}


