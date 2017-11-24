import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export function addMessage (message) {
    return {
        type: 'ADD_MESSAGE',
        ...message
    };
};

export function sendMessage (test, user) {
    return (dispatch) => {
        let message = {
            _id: data.key,
            text: text,
            createdAt: Date.now(),
            user: {
                _id: user.id,
                email: user.avatar
            }
        };

        let messageRef = firebase.database().ref('messages');
        message.id = messageRef.key;
        messageRef.set(message);

        dispatch(addMessage(message));
    };
};

export function startFetchingMessages () {
    return {
        type: 'START_FETCHING_MESSAGES'
    }
}

export function receivedMessages () {
    return {
        type: 'RECEIVED_MESSAGES',
        receivedAt: Date.now()
    }
}

export function loadMessage () {
    return (dispatch) => {
        dispatch(startFetchingMessages());

        firebase.database().ref('message').orderByKey()
        .limitToLast(20).on('value', (snapshot) => {
            setTimeout(() => {
                let msg = snapshot.val() || [];

                dispatch(receiveMessages(msg))
            }, 0);
        })
    }
}

export function receiveMessages (msg) {
    return (dispatch) => {
        Object.values(msg).forEach(messages => dispatch(addMessage(messages)));
        dispatch(receivedMessages());
    }
}
