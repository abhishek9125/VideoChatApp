import React from "react";
import { styled } from "@mui/system";
import PendingInvitationsListItem from "./PendingInvitationsListItem";

const DUMMY_INVITATIONS = [
	{
		_id: '1',
		senderId: {
			username: "Sweta",
			mail: "dubmd@gmail.com"
		},
	},
	{
		_id: '2',
		senderId: {
			username: "Ishika",
			mail: "fraud@gmail.com"
		}
	},
]


const MainContainer = styled("div")({
	width: "100%",
	height: "22%",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	overflow: "auto",
});

const PendingInvitationsList = ({ pendingFriendsInvitations }) => {
	return (
		<MainContainer>
			{DUMMY_INVITATIONS.map((invitation) => (
				<PendingInvitationsListItem
					key={invitation._id}
					id={invitation._id}
					username={invitation.senderId.username}
					mail={invitation.senderId.mail}
				/>
			))}
		</MainContainer>
	);
};

export default (PendingInvitationsList);