import React from "react";
import { styled } from "@mui/system";
import FriendsListItem from "./FriendsListItem";

const DUMMY_FRIENDS = [
	{
		id: 1,
		username: "Sweta",
		isOnline: true
	},
	{
		id: 2,
		username: 'Ishika',
		isOnline: false
	},
	{
		id: 3,
		username: 'Riya',
		isOnline: true
	},
	{
		id: 4,
		username: 'Garima',
		isOnline: true
	},
	{
		id: 5,
		username: 'Shweta',
		isOnline: false
	},
	{
		id: 6,
		username: 'Titiksha',
		isOnline: true
	},
	{
		id: 7,
		username: 'Ananya',
		isOnline: false
	},
	{
		id: 8,
		username: 'Nikita',
		isOnline: true
	},
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
