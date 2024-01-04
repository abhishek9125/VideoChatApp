import store from "../store/store"
import { setActiveRooms, setIsUserJoinedOnlyWithAudio, setOpenRoom, setRoomDetails } from "../store/actions/roomActions";
import * as socketConnection from "./socketConnection";
import * as webRTCHandler from "./webRTCHandler";

export const createNewRoom = () => {
    const successCalbackFunc = () => {
        store.dispatch(setOpenRoom(true, true));

        const audioOnly = store.getState().room.audioOnly;
        store.dispatch(setIsUserJoinedOnlyWithAudio(audioOnly));
        socketConnection.createNewRoom();
    };

    // const audioOnly = store.getState().room.audioOnly;
    const audioOnly = true;
    webRTCHandler.getLocalStreamPreview(audioOnly, successCalbackFunc);
}

export const newRoomCreated = (data) => {
    const { roomDetails } = data;
    store.dispatch(setRoomDetails(roomDetails));
};

export const updateActiveRooms = (data) => {
    const { activeRooms } = data;
    const friends = store.getState().friends.friends;
    const rooms = [];

    const userId = store.getState().auth.userDetails?._id;

    activeRooms.forEach((room) => {
        const isRoomCreatedByMe = room.roomCreator.userId === userId;

        if (isRoomCreatedByMe) {
            rooms.push({ ...room, creatorUsername: "Me" });
        } else {
            friends.forEach((f) => {
                if (f.id === room.roomCreator.userId) {
                    rooms.push({ ...room, creatorUsername: f.username });
                }
            });
        }
    });
    store.dispatch(setActiveRooms(rooms));
}

export const joinRoom = (roomId) => {
    store.dispatch(setRoomDetails({ roomId }));
    store.dispatch(setOpenRoom(false, true));
    socketConnection.joinRoom({ roomId });
};

export const leaveRoom = () => {
    const roomId = store.getState().room.roomDetails.roomId;

    socketConnection.leaveRoom({ roomId });
    store.dispatch(setRoomDetails(null));
    store.dispatch(setOpenRoom(false, false));
}