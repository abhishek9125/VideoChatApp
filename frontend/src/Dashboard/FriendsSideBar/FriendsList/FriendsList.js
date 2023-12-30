import React from "react";
import { styled } from "@mui/system";
import FriendsListItem from "./FriendsListItem";

const DUMMY_FRIENDS = [

]

const MainContainer = styled("div")({
	flexGrow: 1,
	width: "100%",
});

const FriendsList = ({ friends, onlineUsers }) => {
	console.log('DUMMY_FRIENDS', DUMMY_FRIENDS)
	return (
		<MainContainer>
			{DUMMY_FRIENDS.map((f) => (
				<FriendsListItem
					username={f.username}
					id={f.id}
					key={f.id}
					isOnline={f.isOnline}
				/>
			))}
		</MainContainer>
	);
};

export default (FriendsList);
