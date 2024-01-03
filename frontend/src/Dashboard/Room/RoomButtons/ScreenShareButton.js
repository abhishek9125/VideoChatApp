import React from "react";
import IconButton from "@mui/material/IconButton";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import StopScreenShareIcon from "@mui/icons-material/StopScreenShare";

const constraints = {
	audio: false,
	video: true,
};

const ScreenShareButton = ({
	isScreenSharingActive,
}) => {

	const handleScreenShareToggle = async () => {

	};

	return (
		<IconButton onClick={handleScreenShareToggle} style={{ color: "white" }}>
			{isScreenSharingActive ? <StopScreenShareIcon /> : <ScreenShareIcon />}
		</IconButton>
	);
};

export default ScreenShareButton;
