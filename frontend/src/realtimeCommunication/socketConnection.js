import io from 'socket.io-client';
import { setPendingFriendsInvitations } from '../store/actions/friendsActions';
import store from "../store/store";

let socket = null;

export const connectWithSocketServer = (userDetails) => {

    const jwtToken = userDetails.token;

    socket = io('http://localhost:8000',{
        auth: {
            token: jwtToken
        }
    });

    socket.on('connect', () => {
        console.log('Successfully Connected with Socket Server', socket.id);
    })

    socket.on('friends-invitations', (data) => {
        const { pendingInvitations } = data;
        console.log('data', data)
        store.dispatch(setPendingFriendsInvitations(pendingInvitations));
    })
}